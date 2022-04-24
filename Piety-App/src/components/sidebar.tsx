import { Box, useColorMode, HStack, VStack, Center, Avatar, Heading, IconButton, useColorModeValue, Image } from 'native-base'
import React, { useCallback } from 'react'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import AnimatedColorBox from './animate-theme-shift'
import ToggleTheme from './toggle-theme'
import { Feather } from '@expo/vector-icons'
import MenuButton from './menu-btn' 

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
    navigation.navigate('Search')
  }, [navigation])
  const handlePressMenuLibrary = useCallback(() => {
    navigation.navigate('Library')
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
        borderRadius="20"
      >
        Prayers
      </MenuButton>
      <MenuButton
        active={currRoute === "Quran"}
        onPress={handlePressMenuQuran}
        icon="book-open"
        borderRadius={20}
      >
        Quran
      </MenuButton> 
      <MenuButton
        active={currRoute === "Tasks"}
        onPress={handlePressMenuTask}
        icon="feather"
        borderRadius="20"  
      >
        Tasks
      </MenuButton>
      <MenuButton
        active={currRoute === "About"}
        onPress={handlePressMenuAbout}
        icon="info"
        borderRadius={20}
      >
        About
      </MenuButton>
      <MenuButton
        active={currRoute === "Hadith Checker"}
        onPress={handlePressMenuHadithCheck}
        icon="check-circle"
        borderRadius={20}  
      >
        Hadith Checker
      </MenuButton>
      <MenuButton
        active={currRoute === "Library"}
        onPress={handlePressMenuLibrary}
        icon="coffee"
        borderRadius={20}
        >
        Library
      </MenuButton>
      <ToggleTheme />
      </VStack>
    </AnimatedColorBox>
  )
}

export default Sidebar
