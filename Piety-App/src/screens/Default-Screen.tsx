import * as React from 'react'
import { Text, Box, Center, VStack, HStack, themeTools, useTheme, useColorMode, useColorModeValue } from 'native-base'
import ToggleTheme from '../components/toggle-theme'

export default function DefaultScreen(){
  return (
    <Center 
    _dark={{bg: 'blueGray.900'}} 
    _light={{bg: 'blueGray.50'}}
    px={4}
    flex={1}>
      <VStack space={4} alignItems="center">
        <Box p={10} bg={useColorModeValue('green.900', 'red.300')}>
          <Text>Alhamdulilah</Text>
        </Box>
        <ToggleTheme />
      </VStack>
    </Center>
  )
}
