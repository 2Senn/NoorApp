import React, { useEffect } from 'react'
import { Box, useToken } from 'native-base'
import usePrevious from '../utils/use-previous'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor
} from 'react-native-reanimated'

const AnimatedBox = Animated.createAnimatedComponent(Box)

const AnimatedColorBox = ({ bg, ...props }: any) => {
  const bgHex = useToken('colors', bg)
  const prevHexBg = usePrevious(bgHex)
  const transition = useSharedValue(0)

  useEffect(() => {
    transition.value = 0
  }, [bgHex])

  const animatedStyles = useAnimatedStyle(() => {
    transition.value = withTiming(1, { duration: 200 })
    return {
      backgroundColor: interpolateColor(
        transition.value,
        [0, 1],
        [prevHexBg || bgHex, bgHex]
      )
    }
  }, [bgHex])
  return <AnimatedBox {...props} style={animatedStyles} />
}

export default AnimatedColorBox
