import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Goo, 
{ 
  HEIGHT, 
  MARGIN_WIDTH, 
  Edges, 
  WIDTH 
} from "./goo";
import Button from "./Button";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, { runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { snapPoint, useVector } from "react-native-redash";
import { alignItems } from "styled-system";

const PREV = WIDTH;
const NEXT = 0;

interface SliderProps {
  prev?: JSX.Element;
  next?: JSX.Element;
  index: number;
  setIndex: (value: number) => void;
  children: JSX.Element;
}

const Slider = ({
  prev,
  next,
  index,
  setIndex,
  children: current,}: SliderProps) => 
  {
    //check if there is a page before or after
    const prevExists = !!prev;
    const nextExists = !!next;
    
    //3 animations: 1) to check if next/prev page is activated 2) x anime 3) y anime
    const currEdge = useSharedValue(Edges.NA)
    const left = useVector()
    const right = useVector()

    //need to animate transition so it is smooth and there is no delay
    const goingLeft = useSharedValue(false)
    const goingRight = useSharedValue(false)

    const gestureEvent = useAnimatedGestureHandler({
      onStart: ({ x }) => {
        //if x reaches a specific point then activate the page at the reached edge
        if(x < MARGIN_WIDTH){
          currEdge.value = Edges.L
      } else if (x > WIDTH -MARGIN_WIDTH){
          currEdge.value = Edges.R
      } else {
          currEdge.value = Edges.NA
      }
      },
      onActive: ({ x, y }) => {
        if(currEdge.value === Edges.L){
          left.x.value = x
          left.y.value = y
        } 
        else if(currEdge.value === Edges.R){
          right.x.value = WIDTH - x
          right.y.value = y
        }
      },
      onEnd: ({ x, velocityX, velocityY }) => {
        if(currEdge.value === Edges.L){
          const activationPoints = [MARGIN_WIDTH, WIDTH]
          const endpoint = snapPoint(x, velocityX, activationPoints)
          goingLeft.value = endpoint === WIDTH
          left.x.value = withSpring(endpoint, 
          { 
            velocity: velocityX,
            overshootClamping: goingLeft.value ? true : false,
            restSpeedThreshold: goingLeft.value ? 100 : 0.01,
            restDisplacementThreshold: goingLeft.value ? 100 : 0.01,
          }, () => {
            if(goingLeft.value) {
              runOnJS(setIndex)(index-1)
            } 
        })
        }
        else if(currEdge.value === Edges.R){
          const activationPoints = [WIDTH - MARGIN_WIDTH, 0]
          const endpoint = snapPoint(x, velocityX, activationPoints)
          goingRight.value = endpoint === 0
          right.x.value = withSpring(WIDTH - endpoint, 
          { 
            velocity: velocityX, 
            overshootClamping: goingRight.value ? true : false,
            restSpeedThreshold: goingRight.value ? 100 : 0.01,
            restDisplacementThreshold: goingRight.value ? 100 : 0.01,
          }, () => {
            if(goingRight.value) {
              runOnJS(setIndex)(index+1)
            } 
          })
        }
      }
    })
  
    //using useEffect to animate slider from 0 to margin width
    useEffect(() => {
      left.x.value = withSpring(MARGIN_WIDTH)
      right.x.value = withSpring(MARGIN_WIDTH)
    }, [left.x, right.x])

    //fix pages overlapping
    const lefty = useAnimatedStyle(() => ({zIndex: currEdge.value === Edges.L ? 100: 0}))

    return (
      <PanGestureHandler onGestureEvent={gestureEvent}>
        <Animated.View style={[StyleSheet.absoluteFill]}>
          {current}
          {prev && (
            <Animated.View style={[StyleSheet.absoluteFill, lefty]}>
              <Goo edges={Edges.L} position={left}>{prev}</Goo>
            </Animated.View>
          )}
          {next && (
            <View style={StyleSheet.absoluteFill}>
              <Goo edges={Edges.R} position={right}>{next}</Goo>
            </View>
          )}
        </Animated.View>
      </PanGestureHandler>
    );
};

export default Slider;

