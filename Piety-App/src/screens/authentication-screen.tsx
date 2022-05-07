import React from "react"
import { View, Text, Image, useColorModeValue, } from 'native-base'
import { StyleSheet, Dimensions } from 'react-native'
import { BlurView } from "expo-blur"
import AnimatedColorBox from "../components/animated-color-box"

export const AuthScreen = () => {

  const bg = useColorModeValue("#EBECF0", "black")

  return(
    <AnimatedColorBox w="full" h="full" bg={bg}>
      <View style={styles.box1}>
        <View style={styles.inner}>
          <Text fontSize={40}>AUTH</Text>
        </View>
      </View>
    </AnimatedColorBox>
  )
}

const styles = StyleSheet.create({
  container: {
    
  },
  box1: {
    width: "100%",
    height: "60%",
    padding: 5,
  },
  inner: {
    flex: 1
  }
})

export default AuthScreen
