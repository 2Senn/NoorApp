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
        top={200}
        w="full" 
        h="500px" 
        resizeMode="cover" 
        source={image} 
        alt="MainHeader image"
        opacity={0.2}
      />
      {children}
      <Box flex={1} />
      <Heading color={useColorModeValue('black', 'yellow.900')} p={6} size="xl">
        {title}
      </Heading>

    </VStack>
  )
}

export default MainHeader
