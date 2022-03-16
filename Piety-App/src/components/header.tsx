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
    <VStack h="400px" pb={5}>
      <Image 
        position="absolute"
        left={0} 
        bottom={100}
        top={0}
        h="400"
        w="full"  
        resizeMode="cover" 
        source={image}
        alt="MainHeader image"
        opacity={0.3}
      />
      {children}
      <Box flex={1}/>
      <Heading zIndex={1} color={useColorModeValue('black', 'rose.400')} p={4} size="xl" bottom={100}>
        {title}
      </Heading>

    </VStack>
  )
}

export default MainHeader
