import { Box, useColorMode, HStack, VStack, Center, Avatar, Heading, IconButton, useColorModeValue, Image, View, Text, Icon } from 'native-base'
import React, { useCallback } from 'react'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import AnimatedColorBox from './animated-color-box'
import ToggleTheme from './theme-toggle'
import { Feather } from '@expo/vector-icons'
import MenuButton from './menu-button' 
import { StyleSheet, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Italiana_400Regular } from '@expo-google-fonts/italiana'

const Sidebar = (props: DrawerContentComponentProps) =>{
  const { state, navigation } = props
  const currRoute = state.routeNames[state.index]

  const handlePressBackBtn = useCallback(() => {
    navigation.closeDrawer()
  }, [navigation])
  const handlePressMenuMain = useCallback(() => {
    navigation.navigate('Pray')
  }, [navigation])
  const handlePressMenuAbout = useCallback(() => {
    navigation.navigate('About')
  }, [navigation])
  const handlePressMenuTask = useCallback(() => {
    navigation.navigate('Tasks')
  }, [navigation])
  const handlePressMenuQuran = useCallback(() => {
    navigation.navigate('Quran')
  }, [navigation])
  const handlePressMenuHadithCheck = useCallback(() => {
    navigation.navigate('Hadith')
  }, [navigation])
 
  //Colors
  const profileVColor = useColorModeValue("#e9f1fd", "primary.700")
  const _innerShadows = useColorModeValue('#afb5be', "#121211")
  const _outerShadows = useColorModeValue("#ffffff", "#000")
  const _lightArray = ["#d2d9e4", "#f9ffff"] 
  const _darkarray = ['#121211', '#2c2c2b']
  const gradient = useColorModeValue(_lightArray, _darkarray)

  //date
  let hours = new Date().getHours().toString()
  let minutes = new Date().getUTCMinutes().toString()
  let time = hours + " : " + minutes 

  return(
    <AnimatedColorBox safeArea flex={1} bg={useColorModeValue('#e9f1fd', 'primary.700')} >
      <View w={"full"} h={"10%"} flexDir='row' justifyContent={'center'} alignItems="center">
      <View 
        style={[styles.buttonOuter, {shadowColor: _innerShadows }]} 
        w={"50%"} 
        h={"full"} 
        backgroundColor={profileVColor}

      >
        <View 
          w="full"
          h="full"
          backgroundColor="#e9f1fd"
          style={[styles.buttonInner, {shadowColor: _outerShadows}]}
        >
          <LinearGradient
            colors={gradient}
            start={[0.6,0.5]}
            end={[0.1,0.48]}
            style={[styles.face, StyleSheet.absoluteFillObject, {borderRadius: 25}]}

          >
            <View  flexDir='row' alignItems='center' justifyContent="center" w="full" h="full">
              <Image source={require("../assets/icon2.png")} h={50} w={50} resizeMode="contain" alt="icon" />
              <Text fontSize={15}>{time}</Text>
            </View>

          </LinearGradient>
        </View>
        </View>
        <View 
          flex={1} 
          alignItems="flex-end" 
          justifyContent="center" 
          padding={5}
          w={50}
          h={50}
          style={[styles.buttonOuter, {shadowColor: _innerShadows}]}
        >
          <TouchableOpacity onPress={handlePressBackBtn}>
          <View w={50} h={50} style={[styles.buttonInner, {shadowColor: _outerShadows}]}>
            <LinearGradient
              style={[styles.face, StyleSheet.absoluteFillObject, {borderRadius: 25, alignItems: "center", justifyContent: "center"}]}
              colors={gradient}
              start={[0.6,0.5]}
              end={[0.1,0.48]}
            >
              <Icon 
                as= {Feather}
                name= "arrow-left"
                size="md"
                color={'primary.75'}
              /> 
            </LinearGradient>
          </View>
        </TouchableOpacity>
        </View>
      </View>
      <VStack flex={1} space={8} mt={10} p={0.5} >
      <MenuButton 
        active={currRoute === "Pray"} 
        onPress={handlePressMenuMain}
        icon="cloud"
      >
        Prayers
      </MenuButton>
      <MenuButton
        active={currRoute === "Quran"}
        onPress={handlePressMenuQuran}
        icon="book-open"
      >
        Quran
      </MenuButton> 
      <MenuButton
        active={currRoute === "Tasks"}
        onPress={handlePressMenuTask}
        icon="feather"
      >
        Tasks
      </MenuButton>
      <MenuButton
        active={currRoute === "Hadith"}
        onPress={handlePressMenuHadithCheck}
        icon="check-circle"
      >
        Hadith Authenticator
      </MenuButton>
      <MenuButton
        active={currRoute === "About"}
        onPress={handlePressMenuAbout}
        icon="info"
      >
        About
      </MenuButton>
      </VStack>
    </AnimatedColorBox>
  )
}


const styles = StyleSheet.create({
  buttonOuter: {
    borderRadius: 25,
    borderBottomLeftRadius: 50,
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

export default Sidebar

