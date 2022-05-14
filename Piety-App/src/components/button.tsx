import React from "react";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Vector } from "react-native-redash";
import { Feather } from "@expo/vector-icons";
import { Dimensions } from "react-native";

import { Edges, WIDTH } from "./goo";
import { Icon } from "native-base";

const RADIUS = 12.5;

interface ButtonProps {
  position: Vector<Animated.SharedValue<number>>;
  edge: Edges;
  currEdge: Animated.SharedValue<Edges>;
}

const Button = ({ position, edge, currEdge }: ButtonProps) => {
  const leftEdge = edge === Edges.L;
  const style = useAnimatedStyle(() => ({
    position: "absolute",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    left: leftEdge ? position.x.value - RADIUS * 2 : WIDTH - position.x.value,
    top: position.y.value - RADIUS,
    //borderWidth: 1,
    //borderColor: "white",
    borderRadius: RADIUS,
    width: RADIUS * 2,
    height: RADIUS * 2,
    justifyContent: "center",
    alignItems: "center",
    opacity: withTiming(currEdge.value === Edges.NA ? 1 : 0),
  }));
  return (
    <Animated.View style={style} >
      <Icon
        name={`chevron-${leftEdge ? "right" : "left"}` as const}
        size={24}
        color="white"
      />
    </Animated.View>
  );
};

export default Button;

