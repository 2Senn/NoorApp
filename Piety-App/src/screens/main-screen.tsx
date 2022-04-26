import React, { useCallback } from 'react'
import { 
  Text, VStack, useColorModeValue, View, Image, IconButton } from 'native-base'
import { StyleSheet, Dimensions } from 'react-native'
import AnimatedColorBox from '../components/animated-color-box'
import BarNav from '../components/navbar'
import PrayTimes from '../components/prayers'
import { Feather } from '@expo/vector-icons'
import Hijri from '../components/hijri'


interface navProps{
  navigation: any
}

export default function DefaultScreen(props: navProps){

  const handleTest= useCallback(() => {
    props.navigation.navigate("Test")
  }, [props.navigation])
 
  const handleQuranBtn = useCallback(() => {
    props.navigation.navigate("Quran")
  }, [props.navigation])

  return (
      <AnimatedColorBox
        flex={1}
        bg = {useColorModeValue('#FEEAE6', 'darkBlue.900')}
        width="full" 
      >
        <View>
          <Image alt="icon2" source={require("../assets/icon2.png")} resizeMode="contain" size="250" alignSelf="center"/>
          <View position="absolute">
            <BarNav />
          </View>
        </View>
        <VStack 
        space={5}
        bg={useColorModeValue('#FEDBD0', 'darkBlue.800')}
        mt="-110px"
        height="full"
        shadow="6"
        borderTopLeftRadius="30px" 
        borderTopRightRadius="30px"
        pt="40px"
        >
          <Image 
            alt="sakura" 
            source={require("../assets/sakuraa.png")} 
            opacity={0.4} 
            resizeMode="contain" 
            alignSelf="center" 
            justifyContent="center" 
            position="absolute" />

          <View position="absolute" pt={10}>
            <PrayTimes />
          </View>          
          <View flex={1} justifyContent="center" alignSelf="center" paddingBottom={150}>
            <Hijri />
          </View>
          <View mt={20} flex={1} alignSelf={"center"} flexDir={'row'}>
            <IconButton
            onPress={handleQuranBtn}
            strokeWidth={1}
            as={Feather}
            name="book"
            size="lg"
            width={deviceWidth / 2}
            />
          </View>
        </VStack>
        </AnimatedColorBox>
  )
}

const deviceWidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
  cardContainer: {
    width: deviceWidth -25,
    height: 250,
    color: "#FEDBD0",
    top: 50,
    position: "relative",
    alignSelf: "center",
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 10,
    elevation: 10,
  },
  timeContainer: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#D4AF37",
  }
})

