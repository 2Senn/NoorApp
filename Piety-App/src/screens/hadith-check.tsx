import React, { useCallback, useState } from 'react'
import { 
  Text, Box, VStack, 
  useColorModeValue, Image, View } from 'native-base'
import { ImageBackground, StyleSheet, Dimensions } from 'react-native'
import AnimatedColorBox from '../components/animate-theme-shift'
import BarNav from '../components/navbar'

export default function HadithCheck(){
  return(
    <AnimatedColorBox
      flex={1}
      width="full"
      bg={useColorModeValue("#FEDBD0", "blueGray.800")}
    >
      <View flex={1} flexDir={"row"} style={styles.container}>
        <BarNav />
      </View>
      <View>
        <Image source={require("../assets/sakuraa.png")} resizeMode={"cover"} alt="sakura"/>
      </View>

    </AnimatedColorBox> 
  )
}

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    height: height / 10,
    width: width
  }
})

