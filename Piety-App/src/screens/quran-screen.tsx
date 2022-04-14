import { HStack, Text, useColorMode, useColorModeValue, View, VStack, Image } from "native-base"
import React, {useState, useEffect} from "react" 
import { FlatList, ListView } from "react-native"
import { SafeAreaView} from "react-native-safe-area-context"
import QuranKemenag from 'quran-kemenag'
import { Surah } from "quran-kemenag/dist/intefaces"
import {ScaledText, Col, Row, Line} from 'urip-rn-kit'
import AnimatedColorBox from "../components/animate-theme-shift"
import theme from "../theme"

interface QuranScreenProps {
  navigation: any
}

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

  return (
    <SafeAreaView>
      <FlatList 
        data={listOfSurah}
        keyExtractor={s => `${s.surah_id}`}
        renderItem={({item, index}) => {
          return <ItemSurah key={index} data={item}/>
        }}
        />
    </SafeAreaView>
  )
}

const SPACING = 20
const ICON_SIZE = 50

interface SurahProps {
  data: Surah
}


const ItemSurah = (props: SurahProps) => {
  return(
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('#FEDBD0', 'blueGray.800')}
      width="full"
    >
      <VStack>
        <Row>
          <View style={{padding: SPACING, marginBottom: SPACING}}>
            <Col size={4} justifyCenter>
              <Image source={require('../assets/icon2.png')} size={ICON_SIZE} flex={1} />
              <ScaledText color={useColorModeValue('#442C2E', 'white')}>
                {props.data.surah_id}
              </ScaledText>
            </Col>
          </View>
          <Col size={4}  justifyCenter>
            <ScaledText size={20} color={useColorModeValue('#442C2E', 'white')}>
              {props.data.surah_name}</ScaledText>
            <ScaledText color={useColorModeValue('#442C2E', 'white')}>
              {`${props.data.surah_verse_count} verses`}</ScaledText>
          </Col>
          <Col size={4} justifyCenter alignEnd>
            <ScaledText size={25} color={useColorModeValue('#442C2E', 'white')}>
              {props.data.surah_name_arabic}</ScaledText>
          </Col>
        </Row>
        <Line size={1} color={useColorModeValue(theme.colors[250], theme.colors[900])} />
      </VStack>
    </AnimatedColorBox>
    
  )
}


export default QuranScreen
