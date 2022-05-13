import React, { useCallback, useEffect, useRef, useState } from 'react'
import { 
  Text, VStack, useColorModeValue, View, Image, IconButton, Icon } from 'native-base'
import AnimatedColorBox from '../components/animated-color-box'
import BarNav from '../components/navbar'
import Masthead from '../components/masthead'
import MainLayout from '../components/main-layout'
import { ImageBackground, StatusBar } from 'react-native'



export default function DefaultScreen({ navigation }: any){
  


  const bg=useColorModeValue('primary.400', "blueGray.900")
  const headerBg = useColorModeValue('primary.400', "blueGray.900")

  return(
    <AnimatedColorBox
      flex={1}
      w="full"
      h="full"
      position="absolute"
      bg={bg}
    >
      <StatusBar hidden/>
      <ImageBackground 
        source={require("../assets/sakuraa.png")} 
        resizeMode={"cover"} 
        style={{width: "100%", height: "100%", position: 'absolute'}}
        blurRadius={10}
      >
      </ImageBackground>
      <MainLayout />
    </AnimatedColorBox> 
  )
}

