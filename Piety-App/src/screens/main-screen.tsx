import React, { useCallback, useEffect, useRef, useState } from 'react'
import { 
  Text, VStack, useColorModeValue, View, Image, IconButton, Icon } from 'native-base'
import AnimatedColorBox from '../components/animated-color-box'
import BarNav from '../components/navbar'
import Masthead from '../components/masthead'
import MainLayout from '../components/main-layout'
import { ImageBackground } from 'react-native'



export default function DefaultScreen({ navigation }: any){
  


  const bg=useColorModeValue("#E9D0C4", "black")

  const isDay = () => {
      var currTime = new Date().getHours()
      if(currTime < 12){
          return(
            true
          )
        }
      else{
          false
        }
    }

  return(
    <AnimatedColorBox
      flex={1}
      w="full"
      bg={bg}
    >
      <ImageBackground 
        source={require("../assets/sakuraa.png")} 
        resizeMode={"cover"} 
        style={{width: "100%", height: "100%", position: 'absolute'}}
        blurRadius={3}
      >
      </ImageBackground>
      <View>
        <Masthead 
          title={isDay() ? "Good Morning" : "Good Evening"}
          image={require("../assets/icon2.png")}
        >
        <BarNav />
        </Masthead>
      </View>
      <MainLayout />
    </AnimatedColorBox> 
  )
}
