import { Box, useColorMode, HStack, VStack, Center, Avatar, Heading, IconButton, useColorModeValue, Image, View } from 'native-base'
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
    navigation.navigate('Hadith')
  }, [navigation])
  const handlePressMenuLibrary = useCallback(() => {
    navigation.navigate('Library')
  }, [navigation])


  return(
    <AnimatedColorBox safeArea flex={1} bg={useColorModeValue('#FEDBD0', 'darkBlue.800')} p={7}>
      <VStack flex={1} space={2}>
        <HStack flex={1} flexDir="row">
          <Heading mb={4} size="xl">
            استعن بالله ولا تعجز
          </Heading>
          <IconButton 
            onPress={handlePressBackBtn} 
            variant="ghost"
            _icon={{
              as: Feather,
              name: 'arrow-left-circle',
              strokeWidth: 10,
              size: 7,
              color: useColorModeValue('#442C2E', 'darkBlue.700')
            }}
            />
        </HStack>
        <View flex={1} height={500} width={500} >
          <Image
            source={require("../assets/olive.png")}
            alt="olive tree"
            resizeMode="cover"
            position="absolute"
            flex={1}
            opacity="0.6"
            width={500}
            height={500}
            />
        </View>
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
        active={currRoute === "Hadith"}
        onPress={handlePressMenuHadithCheck}
        icon="check-circle"
        borderRadius={20}  
      >
        Hadith Authenticator
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
      <View flex={1}>
        <Image source={require("../assets/fig-sm.png")} alt="fig tree" resizeMode="contain" height={150} width={100} opacity={0.5} />
      </View>
      </VStack>
    </AnimatedColorBox>
  )
}

export default Sidebar
