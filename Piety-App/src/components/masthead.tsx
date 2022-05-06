import React, { useEffect } from 'react'
import { Dimensions, ImageSourcePropType, StyleSheet } from 'react-native'
import { Box, VStack, Heading, Image, useColorModeValue } from 'native-base'
import AnimatedText from './text-animator'

interface Props {
  title: string
  image: ImageSourcePropType
  children: React.ReactNode
}

const {width, height} = Dimensions.get('window')

const Masthead = ({ title, image, children }: Props) => {

  return (
    <VStack h="15%" pb={5}>
      <Image
        position="absolute"
        left={0}
        right={0}
        bottom={0}
        top={5}
        w="full"
        h="75px"
        resizeMode="contain"
        source={image}
        alt="header icon"
      />
      {children}
      <Box flex={1} />
      <AnimatedText 
        content={title}
        duration={700}
        textStyle={styles.text}
        style={styles.container}
      />
    </VStack>
  )
}

const styles = StyleSheet.create({
    text: {
     fontSize: 28,
     fontWeight: 'bold',
     color: "black",

    },
    container: {
      flex: 1,
      bottom: 70,
      padding: 15
    }
  })

export default Masthead
