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
import { Vector } from "react-native-redash";

// 0.5522847498 is taken from https://spencermortensen.com/articles/bezier-circle/
const C = 0.5522847498;

const {width, height} = Dimensions.get("screen")
export const HEIGHT = height / 2
export const WIDTH = width  

export const MIN_LEDGE = 12.5;
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
  position: Vector<Animated.SharedValue<number>>
  children: ReactNode;
}

const Goo = ({ position, edges, children }: GooProps) => {

  const animeProps = useAnimatedProps(() => {
    //make path
    const d = ["M 0 0", `H ${position.x.value}`, `V ${HEIGHT}`, "H 0", "Z"]
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

