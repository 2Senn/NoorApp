import React from "react"
import { ImageSourcePropType } from "react-native"
import { Box, VStack, Heading, Image, useColorModeValue} from 'native-base'

interface Props{
  title: string,
  image: ImageSourcePropType,
  children: React.ReactNode,
} 

const MainHeader = ({ title, image, children}: Props) => {
  return (  
    <VStack h="100px" alignContent="center"   >
      <Image 
        position="absolute"
        h="200"
        w="full"  
        resizeMode="contain" 
        source={image}
        alt="MainHeader image"
        opacity={0.2}
      />
      {children}
      <Box flex={1}/>
      <Heading zIndex={1} color={useColorModeValue('black', 'white')} p={1} size="xl" alignSelf="center">
        {title}
      </Heading>

    </VStack>
  )
}

export default MainHeader
