import React, { useCallback, useState } from 'react'
import { 
  Text, Box, Center, VStack, HStack, 
  themeTools, useTheme, useColorMode, useColorModeValue } from 'native-base'
import FetchPrayer from '../components/prayer-api'
import { View, Image, ImageBackground, StyleSheet, Dimensions } from 'react-native'
import AnimatedColorBox from '../components/animate-theme-shift'
import MainHeader from '../components/header'
import BarNav from '../components/navbar'


export default function DefaultScreen(){
 
  /*
  const handleToggleTaskItem = useCallback(item => {
    setData(prevData => {
      const newData = [...prevData]
      const index = prevData.indexOf(item)
      newData[index] = {
        ...item,
        done: !item.done
      }
      return newData
    })
  }, [])
  */

  return (
      <AnimatedColorBox
        flex={1}
        bg = {useColorModeValue('#FEEAE6', 'black')}
        width="full" 
      >
        <MainHeader 
          title="Al Salamu Alaikum"
          image={require('../assets/header.png')} 
        >
        <BarNav />
        </MainHeader>
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
        <HStack 
          style={styles.cardContainer} 
          backgroundColor={useColorModeValue("#FEEAE6", "blueGray.900")}
        >
          <FetchPrayer />
        </HStack>
         
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
