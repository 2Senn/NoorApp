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
    <VStack h="250px" pb={5}>
      <Image 
        position="absolute"
        left={0} 
        bottom={0}
        top={150}
        w="full" 
        h="400px" 
        resizeMode="cover" 
        source={image} 
        alt="MainHeader image"
        opacity={0.3}
      />
      {children}
      <Box flex={1}/>
      <Heading color={useColorModeValue('black', 'rose.400')} p={4} size="xl" bottom={50}>
        {title}
      </Heading>

    </VStack>
  )
}

export default MainHeader
