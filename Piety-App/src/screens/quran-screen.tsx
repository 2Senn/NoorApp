import { Box, HStack, Text, useColorMode, useColorModeValue, View, VStack, Image } from "native-base"
import React from "react"
import { StyleSheet } from "react-native"
import AnimatedColorBox from "../components/animated-color-box"
import BarNav from '../components/navbar'
import FetchQuran from "../components/chapters-api"
import ToggleTheme from "../components/theme-toggle"

const QuranScreen = () => {
  return(
    <AnimatedColorBox
      flex={1}
      bg={"#FEDBD0"}
    >
      <View zIndex={1} >
        <BarNav />
        <ToggleTheme />
      </View>
      <View zIndex={1}>
        <FetchQuran />
      </View>
      <Image source={require("../assets/sakuraa.png")} style={StyleSheet.absoluteFillObject} opacity={0.4} blurRadius={5}/>
    </AnimatedColorBox>
  )
}

export default QuranScreen

