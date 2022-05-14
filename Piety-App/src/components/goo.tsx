import React, { ReactNode } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedProps,
  useDerivedValue,
  withSpring,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import MaskedView from "@react-native-masked-view/masked-view";
import { clamp, Vector } from "react-native-redash";

// 0.5522847498 is taken from https://spencermortensen.com/articles/bezier-circle/
const C = 0.5522847498;

const {width, height} = Dimensions.get("screen")
export const HEIGHT = height / 3
export const WIDTH = width  

export const MIN_LEDGE = 20;
export const MARGIN_WIDTH = MIN_LEDGE + 25;

//create anime component
const AnimatedPath = Animated.createAnimatedComponent(Path);

const vector2 = (x: number, y: number) => {
  "worklet";
  return { x, y };
}

const curve = (curve1: Vector, curve2: Vector, to: Vector) => {
  "worklet";
  return `C ${curve1.x} ${curve1.y} ${curve2.x} ${curve2.y} ${to.x} ${to.y}`;
};

export enum Edges {
  R,
  L,
  NA,
}

interface GooProps {
  edges: Edges;
  isGoing: Animated.SharedValue<boolean>
  position: Vector<Animated.SharedValue<number>>
  children: ReactNode;
}

const Goo = ({ position, edges, isGoing, children }: GooProps) => {
  //duplicating here but it still might be a faster way to transition back to original state value, 
  //than lets say extracting
  const x_movement = useDerivedValue(() => {
    const radius = clamp(position.x.value, MARGIN_WIDTH - MIN_LEDGE , WIDTH / 0.2  )
    return withSpring(isGoing.value ? 0: radius/2)
  }) 

  const animeProps = useAnimatedProps(() => {
    
    const radius = clamp(position.x.value, MARGIN_WIDTH - MIN_LEDGE , WIDTH / 0.2  )
    const bezier = C * radius
    const y_movement = Math.max(position.x.value, MARGIN_WIDTH - MIN_LEDGE )
    // movement based on imaginary bezier circle
    const point1 = vector2(position.x.value, position.y.value - 2 * y_movement)
    const point2 = vector2( point1.x + x_movement.value, point1.y + y_movement)
    const point3 = vector2( point2.x + x_movement.value, point2.y + y_movement)
    const point4 = vector2( point3.x - x_movement.value, point3.y + y_movement)
    const point5 = vector2( point4.x - x_movement.value, point4.y + y_movement)

    //curves to smooth out lines
    const curve2_1 = vector2(point1.x, point1.y + bezier)
    const curve2_2 = vector2(point2.x, point2.y)
    const curve3_1 = vector2(point2.x, point2.y)
    const curve3_2 = vector2(point3.x, point3.y - bezier)
    const curve4_1 = vector2(point3.x, point3.y + bezier)
    const curve4_2 = vector2(point4.x, point4.y)
    const curve5_1 = vector2(point4.x, point4.y) 
    const curve5_2 = vector2(point5.x, point5.y - bezier)


    //make path
    const d = [
      "M 0 0", 
      `H ${point1.x}`, 
      `V ${point1.y}`,
      curve(curve2_1, curve2_2, point2),
      curve(curve3_1, curve3_2, point3),
      curve(curve4_1, curve4_2, point4),
      curve(curve5_1, curve5_2, point5),
      /*
      `L ${point2.x} ${point2.y}`,
      `L ${point3.x} ${point3.y}`,
      `L ${point4.x} ${point4.y}`,
      `L ${point5.x} ${point5.y}`,
      */
      `V ${HEIGHT}`,
      "H 0", 
      "Z"
    ]
    return {
      d: d.join(" "),
    }
  })


  return(
    <MaskedView style={[StyleSheet.absoluteFill]} maskElement={ 
      <Svg style={(StyleSheet.absoluteFill, 
        { 
          transform: [{ rotateY: edges === Edges.R ? "180deg" : "0deg"}]
        })
      }
      >
        <AnimatedPath animatedProps={animeProps} fill="black" />
      </Svg>}>
      {children}
    </MaskedView>
  )
};

export default Goo;

