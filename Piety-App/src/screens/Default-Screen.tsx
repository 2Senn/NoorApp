import React, { useCallback, useEffect, useState } from 'react'
import { 
  Text, Box, Center, VStack, HStack, 
  themeTools, useTheme, useColorMode, useColorModeValue, View, Image, Button, IconButton } from 'native-base'
import FetchPrayer from '../components/prayer-api'
import { ImageBackground, StyleSheet, Dimensions } from 'react-native'
import AnimatedColorBox from '../components/animate-theme-shift'
import MainHeader from '../components/header'
import BarNav from '../components/navbar'
import PrayTimes from '../components/pray-times'
import MenuButton from '../components/menu-btn'
import { Feather } from '@expo/vector-icons'
import Hijri from '../components/hijri-time'


interface navProps{
  navigation: any
}

export default function DefaultScreen(props: navProps){

  const handleTest= useCallback(() => {
    props.navigation.navigate("Test")
  }, [props.navigation])
 
  const handleQuranBtn = useCallback(() => {
    props.navigation.navigate("Quran")
  }, [props.navigation])

  return (
      <AnimatedColorBox
        flex={1}
        bg = {useColorModeValue('#FEEAE6', 'black')}
        width="full" 
      >
        <View>
          <Image source={require("../assets/icon2.png")} resizeMode="contain" size="250" alignSelf="center"/>
          <View position="absolute">
            <BarNav />
          </View>
        </View>
        <VStack 
        space={5}
        bg={useColorModeValue('#FEDBD0', 'blueGray.900')}
        mt="-110px"
        height="full"
        shadow="6"
        borderTopLeftRadius="30px" 
        borderTopRightRadius="30px"
        pt="40px"
        >
          <Image source={require("../assets/masjid2.png")} opacity={0.4} resizeMode="contain" alignSelf="center" justifyContent="center" position="absolute" />

          <View position="absolute" pt={10}>
            <PrayTimes />
          </View>          
          <View flex={1} justifyContent="center" alignSelf="center" paddingBottom={150}>
            <Hijri />
          </View>
          <View mt={20} flex={1} alignSelf={"center"} flexDir={'row'}>
            <IconButton
            onPress={handleQuranBtn}
            strokeWidth={1}
            as={Feather}
            name="book"
            size="lg"
            width={deviceWidth / 2}
            />
          </View>
        </VStack>
        </AnimatedColorBox>
  )
}

const deviceWidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
  cardContainer: {
    width: deviceWidth -25,
    height: 250,
    color: "#FEDBD0",
    top: 50,
    position: "relative",
    alignSelf: "center",
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 10,
    elevation: 10,
  },
  timeContainer: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#D4AF37",
  }
})
