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
    <VStack h="300px" alignContent="center"  >
      <Image 
        position="absolute"
        left={0} 
        bottom={100}
        top={0}
        h="400"
        w="full"  
        resizeMode="contain" 
        source={image}
        alt="MainHeader image"
        opacity={1}
      />
      {children}
      <Box flex={1}/>
      <Heading zIndex={1} color={useColorModeValue('black', 'rose.400')} p={4} size="2xl" bottom={0} alignSelf="center">
        {title}
      </Heading>

    </VStack>
  )
}

export default MainHeader
