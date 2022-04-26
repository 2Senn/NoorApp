import React from 'react'
import {
  ScrollView,
  Box,
  Text,
  VStack,
  Icon,
  Image,
  useColorModeValue
} from 'native-base'
import { Feather } from '@expo/vector-icons'
import AnimatedColorBox from '../components/animated-color-box'
import Navbar from '../components/navbar'
import Masthead from '../components/masthead'

const AboutScreen = () => {
  return (
    <AnimatedColorBox>
      <Text>About</Text>
    </AnimatedColorBox>
  )
}

export default AboutScreen
