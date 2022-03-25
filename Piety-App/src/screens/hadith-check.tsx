import React, { useCallback, useState } from 'react'
import { 
  Text, Box, Center, VStack, HStack, 
  themeTools, useTheme, useColorMode, useColorModeValue } from 'native-base'
import { View, Image, ImageBackground, StyleSheet, Dimensions } from 'react-native'
import AnimatedColorBox from '../components/animate-theme-shift'
import MainHeader from '../components/header'
import BarNav from '../components/navbar'

export default function HadithCheck(){
  return(
   
    <Box>
      <Text>Hadith Checker</Text>
    </Box>
  )
}

