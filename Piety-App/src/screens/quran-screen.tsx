import { Box, HStack, Text, useColorMode, useColorModeValue, View, VStack, Image } from "native-base"
import React, {useState, useEffect, useRef} from "react" 
import { Animated, FlatList, ListView, StatusBar, StyleSheet, TouchableOpacity } from "react-native"
import { SafeAreaView} from "react-native-safe-area-context"
import QuranKemenag from 'quran-kemenag'
import { Surah } from "quran-kemenag/dist/intefaces"
import {ScaledText, Col, Row, Line} from 'urip-rn-kit'
import AnimatedColorBox from "../components/animate-theme-shift"
import theme from "../theme"
import MainHeader from '../components/header'
import BarNav from '../components/navbar'

interface QuranScreenProps {
  navigation: any
}

const SPACING = 5
const ICON_SIZE = 35
const CARD_SIZE = 52 + SPACING * 3


const QuranScreen = (props: QuranScreenProps) => {
  const [listOfSurah, setListOfSurah]: [listOfSurah: Surah[], setListOfSurah: (value: any) => void] = useState([])

  useEffect(() => {
    fetchData()
  }, []) 

  const fetchData = async () => {
    const quran = new QuranKemenag()
    const data = await quran.getListSurah()
    setListOfSurah(data)
    
  }
  const scrollY = useRef(new Animated.Value(0)).current

  return (
    <AnimatedColorBox 
      flex={1}
      bg={useColorModeValue('#FEEAE6', 'blueGray.800')}
      width="full"
    >
        <MainHeader 
          image={require('../assets/quran.png')} 
          title=""
        >
          <BarNav />
        </MainHeader>

      <Animated.FlatList 
        data={listOfSurah}
        keyExtractor={s => `${s.surah_id}`}
        onScroll={Animated.event(
          [{ nativeEvent: {contentOffset: {y: scrollY}}}],
          { useNativeDriver: true }
        )}
        contentContainerStyle={{
          paddingTop: StatusBar.currentHeight || 42,
           
        }}
        renderItem={({item, index}) => {

          const pressed = () => {
            props.navigation.navigate('Detail', {surahNumber: item.surah_id})
          }
          
          const inputRange = [
            -1,
            0,
            CARD_SIZE * index,
            CARD_SIZE * (index + 2)
          ]
 
          const opacityInputRange = [
            -1,
            0,
            CARD_SIZE * index,
            CARD_SIZE * (index + 1)
          ]

          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0]
          })

          const opacity = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [1, 1, 1, 0]
          })

          return (
            <Animated.View style={{
              opacity,
              transform: [{scale}]
            }}>
              <ItemSurah key={index} data={item} onPress={pressed}/>    
            </Animated.View>      
          )

        }}
        />
    </AnimatedColorBox>
  )
}

interface SurahProps {
  data: Surah
  onPress: () => void
}


const ItemSurah = (props: SurahProps) => {
  return(
    <TouchableOpacity onPress={props.onPress}>
    <View
      style={{
        overflow: 'hidden',
        borderRadius: 60,
        padding: SPACING,
        marginBottom: SPACING,
        flexDirection: 'row',
      }}
      >
          <View 
            style={{ 
              padding: SPACING, 
              marginBottom: SPACING, 
              marginRight: SPACING / 2,
             
            }}
          >
            <Col justifyCenter>
              <Image source={require('../assets/icon2.png')} size={ICON_SIZE} flex={1} alt="." />
            </Col>
          </View>
          <View style={{padding: SPACING, marginBottom: SPACING, marginRight: SPACING}}>
            <Col size={2} justifyCenter>
              <ScaledText color={useColorModeValue('#442C2E', 'white')}>
                {props.data.surah_id}
              </ScaledText>
            </Col>
          </View>
          <Col size={4}  justifyCenter>
            <ScaledText size={20} color={useColorModeValue('#442C2E', 'white')} bold>
              {props.data.surah_name}</ScaledText>
            <ScaledText color={useColorModeValue('#442C2E', 'white')}>
              {`${props.data.surah_verse_count} verses`}</ScaledText>
          </Col>
          <Col size={4} justifyCenter alignEnd >
            <ScaledText size={25} color={useColorModeValue('#442C2E', 'white')} bold>
              {props.data.surah_name_arabic}</ScaledText>
          </Col> 
        </View>
        <Line color="000" size={2}/>
      </TouchableOpacity>
  )

}

export default QuranScreen
