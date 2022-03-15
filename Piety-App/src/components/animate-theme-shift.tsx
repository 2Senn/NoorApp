import React, {useEffect} from "react"
import { Box, useTheme, themeTools } from 'native-base'
import usePrevious from "../utilities/use-previous"
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  interpolateColor} from "react-native-reanimated"

const AnimatedBox = Animated.createAnimatedComponent(Box)

const AnimatedColorBox = ({ bg, ...props}: any) => {
  const theme = useTheme()
  const bgHex = themeTools.getColor(theme, bg)
  const bgHexPrev = usePrevious(bgHex)
  const progress = useSharedValue(0)

  useEffect(() => {
    progress.value = 0
  }, [bgHex])

  const animatedStyles = useAnimatedStyle(() => {
    progress.value = withTiming(1, {duration: 200})
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        [bgHexPrev || bgHex, bgHex]
      )
    }
  }, [bgHex])
  return <AnimatedBox {...props} style={animatedStyles} />


}

export default AnimatedColorBox
