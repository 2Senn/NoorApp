import React, { useCallback, useEffect, useRef, useState } from 'react'
import { 
  Text, VStack, useColorModeValue, View, Image, IconButton, Icon } from 'native-base'
import AnimatedColorBox from '../components/animated-color-box'
import BarNav from '../components/navbar'
import Masthead from '../components/masthead'
import MainLayout from '../components/main-layout'
import { ImageBackground, StatusBar } from 'react-native'



export default function DefaultScreen({ navigation }: any){
  


  const bg=useColorModeValue('primary.300', "blueGray.900")
  const headerBg = useColorModeValue('primary.300', "blueGray.900")

  return(
    <AnimatedColorBox
      flex={1}
      w="full"
      bg={bg}
    >
      <StatusBar hidden/>
      <ImageBackground 
        source={require("../assets/sakuraa.png")} 
        resizeMode={"cover"} 
        style={{width: "100%", height: "100%", position: 'absolute'}}
        blurRadius={5}
      >
      </ImageBackground>
      <View backgroundColor={headerBg}>
        <Masthead 
          title={"Al Salamu Alaikum"}
          image={require("../assets/icon2.png")}
        >
        <BarNav />
        </Masthead>
      </View>
      <MainLayout />
    </AnimatedColorBox> 
  )
}

