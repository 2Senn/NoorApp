import React, { useCallback } from 'react'
import { HStack, IconButton } from 'native-base'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'

const BarNav = () => {
  const nav = useNavigation<DrawerNavigationProp<{}>>()
  const handlePressMenuBtn = useCallback(() => {
    nav.openDrawer()
  }, [nav])

  return(
    <HStack 
      w="full" 
      h={40} 
      alignItems="center" 
      alignContent="center" 
      p={4}>
        <IconButton  
        onPress={handlePressMenuBtn} 
        borderRadius={100} 
        _icon={{
        as:Feather,
        name: 'menu',
        size: 6,
        color: 'white',
        }} 
      />
    </HStack>
  )
}

export default BarNav

