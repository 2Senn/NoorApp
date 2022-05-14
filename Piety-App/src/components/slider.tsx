import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Goo, 
{ 
  HEIGHT, 
  MARGIN_WIDTH, 
  Edges, 
  WIDTH, 
  MIN_LEDGE
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
    const left = useVector(0, HEIGHT / 2)
    const right = useVector(0, HEIGHT / 2)

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
          const activationPoints = [MIN_LEDGE, WIDTH]
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
          const activationPoints = [WIDTH - MIN_LEDGE, 0]
          const endpoint = snapPoint(x, velocityX, activationPoints)
          goingRight.value = endpoint === 0
          right.y.value = withSpring(HEIGHT / 2, { velocity: velocityY })
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
      left.x.value = withSpring(MIN_LEDGE)
      right.x.value = withSpring(MIN_LEDGE)
    }, [left.x, right.x])

    //fix pages overlapping
    const lefty = useAnimatedStyle(() => ({zIndex: currEdge.value === Edges.L ? 100: 0}))

    return (
      <PanGestureHandler onGestureEvent={gestureEvent}>
        <Animated.View style={[StyleSheet.absoluteFill, {borderRadius: 30}]}>
          {current}
          {prev && (
            <Animated.View style={[StyleSheet.absoluteFill, lefty, {borderRadius: 30}]}>
              <Goo edges={Edges.L} position={left} isGoing={goingLeft} >{prev}</Goo>
            </Animated.View>
          )}
          {next && (
            <View style={[StyleSheet.absoluteFill, {borderRadius: 30}]}>
              <Goo edges={Edges.R} position={right} isGoing={goingRight}>{next}</Goo>
            </View>
          )}
        </Animated.View>
      </PanGestureHandler>
    );
};

export default Slider;

