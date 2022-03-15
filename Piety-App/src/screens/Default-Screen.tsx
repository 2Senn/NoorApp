import * as React from 'react'
import { 
  Text, Box, Center, VStack, HStack, 
  themeTools, useTheme, useColorMode, useColorModeValue } from 'native-base'
import ToggleTheme from '../components/toggle-theme'
import FetchPrayer from '../components/prayer-api'
import { View, Image, ImageBackground } from 'react-native'
import AnimatedColorBox from '../components/animate-theme-shift'
import MainHeader from '../components/header'
import BarNav from '../components/navbar'

export default function DefaultScreen(){
  
  return (
    
      <AnimatedColorBox
        flex={1}
        bg = {useColorModeValue('warmGray.50', 'blueGray.900')}
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
        alignItems="center" 
        width="full" >
          <ToggleTheme />
          <Center>
            <FetchPrayer />
          </Center>
        </VStack>
        </AnimatedColorBox>
    
  )
}
