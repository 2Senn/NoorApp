import { Box, useColorMode, HStack, VStack, Center, Avatar, Heading, IconButton, useColorModeValue, Image, View } from 'native-base'
import React, { useCallback } from 'react'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import AnimatedColorBox from './animated-color-box'
import ToggleTheme from './theme-toggle'
import { Feather } from '@expo/vector-icons'
import MenuButton from './menu-button' 

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
 

  return(
    <AnimatedColorBox safeArea flex={1} bg={useColorModeValue('#E7D5C5', 'black')} p={7}>
      <VStack flex={1} space={5} top={5}>
        <View flexDir="row">
          <Heading mb={4} size="xl" zIndex={1} color={useColorModeValue("black", "white")}>
            استعن بالله ولا تعجز
          </Heading>
          <IconButton 
            onPress={handlePressBackBtn} 
            zIndex={1}
            variant="ghost"
            _icon={{
              as: Feather,
              name: 'arrow-left-circle',
              strokeWidth: 10,
              size: 7,
              color: useColorModeValue('#442C2E', 'darkBlue.700')
            }}
            />
        </View>
        <View position="absolute" >
          <Image
            source={require("../assets/olive.png")}
            alt="olive tree"
            resizeMode="cover"
            position="absolute"
            flex={1}   
            width={400}
            height={300}
            opacity={0.6}
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
        active={currRoute === "Hadith"}
        onPress={handlePressMenuHadithCheck}
        icon="check-circle"
        borderRadius={20}  
      >
        Hadith Authenticator
      </MenuButton>
      <MenuButton
        active={currRoute === "About"}
        onPress={handlePressMenuAbout}
        icon="info"
        borderRadius={20}
      >
        About
      </MenuButton>
      <View alignItems="center" justifyContent="center" pt={10}>
        <ToggleTheme />
      </View>
      </VStack>
    </AnimatedColorBox>
  )
}

export default Sidebar

