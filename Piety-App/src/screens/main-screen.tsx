import React, { useCallback, useEffect, useRef, useState } from 'react'
import { 
  Text, VStack, useColorModeValue, View, Image, IconButton, Icon, Heading, useColorMode, Box, Hidden } from 'native-base'
import AnimatedColorBox from '../components/animated-color-box'
import BarNav from '../components/navbar'
import Masthead from '../components/masthead'
import MainLayout from '../components/main-layout'
import { ImageBackground, StatusBar } from 'react-native'
import { neostyles } from '../components/neo-button'
import { LinearGradient } from 'expo-linear-gradient'
import { 
  Limelight_400Regular,
  useFonts
} from '@expo-google-fonts/limelight'
import AnimatedText from '../components/text-animator'
import PrayTimes from '../components/prayers'
import LoadingIndicator from '../components/moti-loading'



export default function DefaultScreen({ navigation }: any){
  
  const bg=useColorModeValue('primary.150', "#1f1f1e")
  let [fontsLoaded] = useFonts({
    Limelight_400Regular
  }) 
  

  
  
  if(!fontsLoaded){
    return( 
      <View width="full" h="full" backgroundColor={'primary.100'}>
        <LoadingIndicator size={150}/>
      </View>
    )
  }

  return(
    <AnimatedColorBox
      flex={1}
      w="full"
      h="full"
      position="absolute"
      bg={bg}
    >
      <StatusBar hidden/>
      <View w="100%" h="12%" p={2}>
        <BarNav>
          <View flex={1} alignItems="center" justifyContent="center">
            <Hidden colorMode="dark">
              <Image source={require("../assets/kaaba.png")} alt={"logo"} resizeMode={"contain"} w={50} h="50"/>
            </Hidden>
            <Hidden colorMode="light">
              <Image source={require("../assets/window.png")} alt={"logo"} resizeMode={"contain"} w={50} h="50"/>
            </Hidden>
          </View>
        </BarNav>
      </View>
      <View w="full" h="8%" p={2}>
        <Heading shadow={7} fontFamily={"Limelight_400Regular"}>
          Welcome
        </Heading>
      </View>
      <View w="full" h="80%" p={2}>
        <MainLayout />
      </View>
    </AnimatedColorBox> 
  )
}

