import React, { memo, useEffect } from "react"
import { Pressable, Text, HStack, Box } from "native-base"
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withTiming,
  withDelay,
  interpolateColor
} from "react-native-reanimated"

interface Props {
  strikethrough: boolean
  textColor: string
  inactiveTextColor: string
  onPress?: () => void
  children?: React.ReactNode
}

const AnimeBox = Animated.createAnimatedComponent(Box)
const AnimeHStack = Animated.createAnimatedComponent(HStack)
const AnimeText = Animated.createAnimatedComponent(Text)

const AnimeLabel = memo((props: Props) => {
  const {strikethrough, textColor, inactiveTextColor, onPress, children} = props
  const hstackOffset = useSharedValue(0)
  const hstackAnimeStyle = useAnimatedStyle(
    () =>({
      transform: [{ translateX: hstackOffset.value}]
    }),
    [strikethrough]
  )
  const textColorProgress = useSharedValue(0)
  const textColorAnimeStyles = useAnimatedStyle(
    () => ({
      color: interpolateColor(
        textColorProgress.value,
        [0, 1],
        [textColor, inactiveTextColor]
      )
    }),
    [strikethrough, textColor, inactiveTextColor]
  )
  const strikethroughWidth = useSharedValue(0)
  const strikethroughAnimeStyles = useAnimatedStyle(
    () => ({
      width: `${strikethroughWidth.value * 100}%`,
      borderBottomColor: interpolateColor(
        textColorProgress.value,
        [0, 1],
        [textColor, inactiveTextColor]
      )
    }),
    [strikethrough, textColor, inactiveTextColor]
  )

  useEffect(() => {
    const easing = Easing.out(Easing.quad)
    if(strikethrough) {
      hstackOffset.value = withSequence(
        withTiming(4, { duration: 200, easing }),
        withTiming(0, { duration: 200, easing })
      )
      strikethroughWidth.value = withTiming(1, { duration: 400, easing })
      textColorProgress.value = withDelay(1000, withTiming(1, {duration: 400, easing})
      )
    } else{
      strikethroughWidth.value = withTiming(0, { duration: 400, easing})
      textColorProgress.value = withTiming(0, { duration: 400, easing})
    }
  })

  return(
    <Pressable onPress={onPress}>
      <AnimeHStack alignItems="center" style={[hstackAnimeStyle]}>
        <AnimeText 
        fontSize={20}
        noOfLines={1}
        isTruncated
        px={1}
        style={[textColorAnimeStyles]}
        >
          {children}
        </AnimeText>
        <AnimeBox
          position="absolute"
          h={1}
          borderBottomWidth={1}
          style={[strikethroughAnimeStyles]}
        />
      </AnimeHStack>
    </Pressable>
  )
})


export default AnimeLabel

