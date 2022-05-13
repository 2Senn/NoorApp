import React, { useCallback, useState } from 'react'
import { Hidden, HStack, Icon, IconButton, useColorMode, useColorModeValue, View } from 'native-base'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { height, width } from '../screens/hadith'
import { neostyles } from './neo-button'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { alignSelf } from 'styled-system'

const BarNav = (props: any) => {

  const nav = useNavigation<DrawerNavigationProp<{}>>()
  const handlePressMenuBtn = useCallback(() => {
    nav.openDrawer()
  }, [nav])

  const shadows = useColorModeValue('#98807a', "#121211")
  const shadows2 = useColorModeValue("#fff4e8", "#000")

  
  const [isPressedIn, setIsPressedIn] = useState(false)
  const handlePressIn = useCallback(() => {
    setIsPressedIn(!isPressedIn)
  }, [isPressedIn])

 const handlePressOut = useCallback(() => {
    setIsPressedIn(false)
    handlePressMenuBtn()
  }, [isPressedIn])

 const handlePressOutTheme = useCallback(() => {
    setIsPressedIn(false)
    toggleColorMode()
  }, [isPressedIn])
  const _lightArray = isPressedIn ? ["#9f867f", "#ffeee3"] : ["#ffeee3", "#9f867f"]
  const _darkarray = isPressedIn ? ['#121211', '#2c2c2b'] : ['#2c2c2b', '#121211']  

  const gradient = useColorModeValue(_lightArray, _darkarray)


  const { colorMode, toggleColorMode } = useColorMode()

  return(
    <HStack width="full" padding={2} flexDir='row' flex={1}>
      <TouchableWithoutFeedback
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        containerStyle={{
        flex: 1,
        }}
      >
        <View 
          w={50}
          h={50}
          style={[styles.buttonOuter, {shadowColor: shadows}]}>
            <View
              w={50}
              h={50}
              style={[styles.buttonInner, {shadowColor: shadows2}]}>
                <LinearGradient 
                colors={gradient}
                start={[1,0]}
                end={[0,1]}
                style={[styles.face, {borderRadius: 25}]}
                >
                  <Icon  
                    borderRadius={100} 
                    as={Feather}
                    name= 'menu'
                    size= {6}
                    color={useColorModeValue('primary.400', '#F79548')}
                  />
                </LinearGradient>
            </View>
        </View>
      </TouchableWithoutFeedback>
        {props.children}
      <TouchableWithoutFeedback
        onPressIn={handlePressIn}
        onPressOut={handlePressOutTheme}
        containerStyle={{
        flex: 1,
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        justifyContent: 'center'
        }}
      >
        <View 
          w={50}
          h={50}
          style={[styles.buttonOuter, {shadowColor: shadows}]}
        >
          <View
            w={50}
            h={50}
            style={[styles.buttonInner, {shadowColor: shadows2}]}
          >
            <LinearGradient 
              colors={gradient}
              start={[1,0]}
              end={[0,1]}
              style={[styles.face, {borderRadius: 25}]}
            >
              <View>
                <Hidden colorMode="light">
                  <Icon  
                    as={Feather}
                    name= 'sun'
                    size= {6}
                    color={useColorModeValue('primary.200', '#F79548')}
                  />
                </Hidden>
                <Hidden colorMode="dark">
                <Icon  
                  as={Feather}
                  name= 'moon'
                  size={6}
                  color={useColorModeValue('#442C2E', '#FEDBD0')}
                />
              </Hidden>
                </View>
            </LinearGradient>
          </View>
        </View>
        </TouchableWithoutFeedback>
    </HStack>
  )
}

const styles = StyleSheet.create({
  buttonOuter: {
    borderRadius: 25,
    shadowOffset: {
      width: 7,
      height: 7,
    },
    shadowRadius: 15,
    elevation: 8,
    shadowOpacity: 1,
  },
  buttonInner: {
    borderRadius: 25,
    shadowOffset: {
      width: -7,
      height: -7,
    },
    shadowRadius: 15,
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

export default BarNav


