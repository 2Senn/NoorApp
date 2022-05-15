import React, { useCallback, useEffect, useRef, useState } from 'react'
import { 
  Text, VStack, useColorModeValue, View, Image, IconButton, Icon, Heading, useColorMode, Box, Hidden, Button, HStack } from 'native-base'
import AnimatedColorBox from '../components/animated-color-box'
import BarNav from '../components/navbar'
import Masthead from '../components/masthead'
import { ImageBackground, ScrollView, StatusBar, StyleSheet } from 'react-native'
import { neostyles } from '../components/neo-button'
import { LinearGradient } from 'expo-linear-gradient'
import { 
  Italiana_400Regular,
  useFonts
} from '@expo-google-fonts/italiana'
import AnimatedText from '../components/text-animator'
import PrayTimes from '../components/prayers'
import LoadingIndicator from '../components/moti-loading'
import { SafeAreaView } from 'react-native-safe-area-context'
import CoolSwipe from '../components/cool-swipe'
import Paginator from '../components/paginator'
import Page from '../components/page'
import ButtonSet from '../components/button-set'
import RandomHadith from '../components/random-hadith'
import Cards from '../components/card-component'
import Hijri from '../components/hijri'
import { GestureHandlerRootView } from 'react-native-gesture-handler'


export default function DefaultScreen({ navigation }: any){
  


  //colors
  const bg=useColorModeValue('primary.25', "#1f1f1e")
  const outerShadow = useColorModeValue('#b0aca3', "#121211")
  const innerShadow = useColorModeValue("#ffffff", "#000")
  const l1 = "#faf5e8" 
  const l2 = "#d3cec3"
  const d1 = '#121211'
  const d2 = '#2c2c2b'
  const iconColor = useColorModeValue('primary.75', '#F79548')
  let [fontsLoaded] = useFonts({
    Italiana_400Regular
  }) 
 
  

  const textColor = useColorModeValue("primary.75", "primary.50")
  
  if(!fontsLoaded){
    return( 
      <View width="full" h="full" backgroundColor={'primary.25'}>
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
        <BarNav 
          l1={l1} 
          l2={l2} 
          d1={d1} 
          d2={d2} 
          iconColor={iconColor} 
          innerShadow={innerShadow} 
          outerShadow={outerShadow}
        >
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
        <Heading shadow={7} color={textColor} fontFamily={"Italiana_400Regular"}>
          Welcome
        </Heading>
      </View>
      <View w="full" h="10%" p={5} alignItems="center" justifyContent="center" mt={10}>
         <ButtonSet /> 
      </View>
      <View style={[styles.buttonOuter, {shadowColor: '#FEDBD0'}]} w="full" h="50%" p={1} mt={10}>
        <View flex={1} style={[styles.buttonInner, {shadowColor: '#FEDBD0'}]}>
          <CoolSwipe />
        </View>
      </View>
      <View w="full" h="20%" alignItems="center" justifyContent="center" >
        <View flex={1}>
        </View>
      </View>
    </AnimatedColorBox>
  )
}

const styles = StyleSheet.create({
  buttonOuter: {
    borderRadius: 25,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 5,
    elevation: 8,
    shadowOpacity: 1,
  },
  buttonInner: {
    borderRadius: 25,
    shadowOffset: {
      width: -5,
      height: -5,
    },
    shadowRadius: 5,
    elevation: 8,
    shadowOpacity: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  face: {
    padding: 12,
    position: 'absolute',
  }

})
