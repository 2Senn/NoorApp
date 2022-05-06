import { MotiView } from "@motify/components"
import { useColorModeValue } from "native-base"
import React from "react"
import { View } from 'react-native'
import Animated from "react-native-reanimated"
import LottieView from 'lottie-react-native'

const LoadingIndicator =({ size }: { size: number }) => {
  return(
    <LottieView 
      source={require('../assets/loading.json')}
      autoPlay
      loop
      style={{width: size, height: size}}
    />
  )
}

export default LoadingIndicator

