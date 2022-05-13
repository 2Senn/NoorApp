import React, { useCallback } from 'react'
import { Hidden, HStack, IconButton, useColorMode, useColorModeValue, View } from 'native-base'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { width } from '../screens/hadith'

const BarNav = () => {
  const nav = useNavigation<DrawerNavigationProp<{}>>()
  const handlePressMenuBtn = useCallback(() => {
    nav.openDrawer()
  }, [nav])


  const { colorMode, toggleColorMode } = useColorMode()

  return(
    <HStack space={width * 0.6} padding={2} flexDir='row'>
      <IconButton  
        onPress={handlePressMenuBtn} 
        
        borderRadius={100} 
        _icon={{
        as:Feather,
        name: 'menu',
        size: 6,}}
        color={useColorModeValue('#442C2E', '#FEDBD0')}
      />
        <View>
        <Hidden colorMode="light">
         <IconButton  
          onPress={toggleColorMode} 
          borderRadius={100} 
          _icon={{
          as:Feather,
          name: 'sun',
          size: 6,}}
          color={useColorModeValue('#442C2E', '#FEDBD0')}
          />
        </Hidden>
        <Hidden colorMode="dark">
        <IconButton  
          onPress={toggleColorMode} 
          borderRadius={100} 
          _icon={{
          as:Feather,
          name: 'moon',
          size: 6,}}
          color={useColorModeValue('#442C2E', '#FEDBD0')}
        />
      </Hidden>
        </View>
    </HStack>
  )
}

export default BarNav


