import React, { useCallback } from 'react'
import { 
  Text, VStack, useColorModeValue, View, Image, IconButton } from 'native-base'
import { StyleSheet, Dimensions } from 'react-native'
import AnimatedColorBox from '../components/animated-color-box'
import BarNav from '../components/navbar'
import PrayTimes from '../components/prayers'
import { Feather } from '@expo/vector-icons'
import Hijri from '../components/hijri'
import AnimatedText from '../components/text-animator'
import { fontFamily, paddingTop } from 'styled-system'



export default function DefaultScreen({ navigation }: any){

 
  const handleQuranBtn = useCallback(() => {
    navigation.navigate("Quran")
  }, [navigation])

  return (
      <AnimatedColorBox
        flex={1}
        bg = {useColorModeValue('#FEEAE6', 'darkBlue.900')}
        width="full" 
      >
          <View zIndex={1} position="absolute">
            <BarNav />
          </View>
        <VStack 
        space={5}
        bg={useColorModeValue('#FEDBD0', 'darkBlue.800')}
        height="full"
        style={styles.container}
        >
          <Image 
            alt="sakura" 
            source={require("../assets/sakuraa.png")} 
            opacity={0.7} 
            blurRadius={5}
            resizeMode="contain" 
            alignSelf="center" 
            justifyContent="center" 
            position="absolute" />

          <View>
            <AnimatedText 
              content="العلم بطالب أهلاً "
              textStyle={styles.textStyle}
              style={styles.containerStyle}
              duration={700}
            />
          </View>

          <View position="absolute" >
            <PrayTimes />
          </View>          
          <View flex={1} justifyContent="center" alignSelf="center" height={200} paddingBottom={150}>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    padding: 8,
  },
  textStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 14,
  },
  containerStyle: {}
})

