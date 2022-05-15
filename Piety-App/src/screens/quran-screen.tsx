import { Box, HStack, Text, useColorMode, useColorModeValue, View, VStack, Image, Hidden, Input, Icon } from "native-base"
import React from "react"
import { StatusBar, StyleSheet } from "react-native"
import AnimatedColorBox from "../components/animated-color-box"
import BarNav from '../components/navbar'
import FetchQuran from "../components/chapters-api"
import ToggleTheme from "../components/theme-toggle"
import { useFonts, Italiana_400Regular } from "@expo-google-fonts/italiana"
import { Feather } from "@expo/vector-icons"

const QuranScreen = () => {
  

  //colors
  const bg=useColorModeValue('primary.25', "#1f1f1e")
  const bc = useColorModeValue("rgba(255,255,255,0.5)", "rgba(255, 182, 0, 0.5)")
  const chapterBg= useColorModeValue("rgba(233,241,253, 0.3)", "rgba(0,0,0,0.3)")
  const outerShadow = useColorModeValue('#b0aca3', "#121211")
  const innerShadow = useColorModeValue("#ffffff", "#000")
  const l1 = "#faf5e8" 
  const l2 = "#d3cec3"
  const d1 = '#121211'
  const d2 = '#2c2c2b'

  //font
  const iconColor = useColorModeValue('primary.75', '#F79548')
  let [fontsLoaded] = useFonts({
    Italiana_400Regular
  }) 


  return(
    <AnimatedColorBox
      flex={1}
      w="full"
      h="full"
      bg={bg}
    >
      <StatusBar hidden/>
      <View w="100%" h="12%" p={2} zIndex={2}>
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
              <Image 
                source={require("../assets/noor-alpha.png")} 
                alt={"logo"} 
                resizeMode={"contain"} 
                w={200} h={200}/>
            </Hidden>
            <Hidden colorMode="light">
              <Image source={require("../assets/kaaba.png")} alt={"logo"} resizeMode={"contain"} w={50} h="50"/>
            </Hidden>
          </View>
        </BarNav>
      </View>
      <View w={"100%"} h={"80%"} p={2} zIndex={1}>
        <View flex={1} bg={chapterBg} borderRadius={30} borderWidth={1} borderColor={bc} >
          <FetchQuran />
        </View>
      </View>
      <Hidden colorMode="dark">
        <Image 
          source={require("../assets/sakuraa.png")} 
          style={StyleSheet.absoluteFillObject} 
          opacity={0.4} 
          blurRadius={5}
          alt={"sakura"}
          />
      </Hidden>
      <Hidden colorMode="light">
        <Image 
          source={require("../assets/isha.jpg")} 
          style={StyleSheet.absoluteFillObject} 
          opacity={0.4} 
          blurRadius={5}
          alt={"stars"}
          />
      </Hidden>
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

export default QuranScreen

