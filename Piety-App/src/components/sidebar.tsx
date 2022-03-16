import { Box, useColorMode, HStack, VStack, Center, Avatar, Heading, IconButton, useColorModeValue, Image } from 'native-base'
import React, { useCallback } from 'react'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import AnimatedColorBox from './animate-theme-shift'
import ToggleTheme from './toggle-theme'
import { Feather } from '@expo/vector-icons'
import MenuButton from './menu-btn' 
import AsyncStorage from '@react-native-async-storage/async-storage'

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


  return(
    <AnimatedColorBox safeArea flex={1} bg={useColorModeValue('#FEDBD0', 'darkBlue.800')} p={7}>
      <VStack flex={1} space={2}>
        <HStack justifyContent="flex-end">
          <IconButton 
            onPress={handlePressBackBtn}
            borderRadius={100}
            variant="outline"
            borderColor={useColorModeValue("#442C2E", "blue.700")}
            _icon={{
              as: Feather,
              name: 'chevron-left',
              size: 6,
              color: useColorModeValue('#442C2E', 'darkBlue.700')
            }}
            />
        </HStack>
        
        <Image
          source={require("../assets/sakuraa.png")}
          alt="sakura"
          position="relative"
          height="200px"
          resizeMode="cover"
          opacity="0.5"/>
      <Heading mb={4} size="xl">
        استعن بالله ولا تعجز
      </Heading>
      <MenuButton 
        active={currRoute === "Pray"} 
        onPress={handlePressMenuMain}
        icon="cloud"  
      >
        Prayers
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

export default Sidebar
