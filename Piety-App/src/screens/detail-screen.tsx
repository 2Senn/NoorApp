import { Button, FlatList, HStack, Icon, IconButton, Row, Text, useColorModeValue } from "native-base"
import React, { createRef, useCallback, useEffect, useRef, useState } from "react" 
import { BackHandler, Dimensions, ListView, RefreshControl, StyleSheet, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Feather } from '@expo/vector-icons'
import ToggleTheme from "../components/toggle-theme"
import AnimatedColorBox from "../components/animate-theme-shift"
import { Col, Padder, ScaledText, Box } from "urip-rn-kit"
import QuranKemenag from "quran-kemenag"
import App from "../../App"
import RNRestart from 'react-native-restart'
import { Verse } from "quran-kemenag/dist/intefaces"

interface DetailScreenProps {
  navigation: any
  route: any
}

const DetailScreen = (props: DetailScreenProps) => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  
  const {chapterNumber} = props.route.params
  const url = `http://api.quran.com/api/v3/chapters/${chapterNumber}/verses?recitation=1&translations=21&language=ar&text_type=words` 

  useEffect(() => {
    const {chapterNumber} = props.route.params
    fetch(url)
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false))
  }, [chapterNumber])

  /*
  const getData = async () => {
    const quran = new QuranKemenag()
    const data = await quran.getSurah(surahNumber)
    console.log(surahNumber)
    setSurah(data)
    setVerses(data.verses || [])
  }
  */
  
  const SPACING = 10

  const goToMushaf= () => {
    props.navigation.navigate('Mushaf')
  }

  const Tabs = () => {
    return(
      <View style={{ position: 'absolute', top: 50, width: 200, alignSelf: 'center' }}>
        <View style={styles.tabber}>
          <Button 
            opacity={1} 
            bg={useColorModeValue('#FEDBD0', 'blueGray.800')}
            borderTopWidth={1}
            borderTopColor={useColorModeValue("#442C2E", "white")} 
            borderBottomWidth={1}
            borderBottomColor={useColorModeValue("#442C2E", "white")} 
            leftIcon={<Icon as={Feather} name="book" size="sm" />}
            _pressed={{bg: "#FEEAE6", opacity: 0.4}}
            onPress={goToMushaf}
            
          >
            <Text style={styles.tabber} color={useColorModeValue('#442C2E', 'white')}>go to Arabic Mushaf</Text>
          </Button>
        </View>
      </View>
    )
  }
  const handleBackbutton = useCallback(() => {
    props.navigation.navigate("Quran")
  }, [props.navigation])
  return (
    <View>
      <Tabs />
    </View>
  )
  
}

interface VerseItemProps {
  data: Verse
}

const VerseItem =(props: VerseItemProps) => {
  return (
    <Col>
      <Row></Row>
      <Row><ScaledText>{props.data.verse_arabic}</ScaledText></Row>
    </Col>
  )
}


const styles = StyleSheet.create({
  tabber: {
    fontSize: 19,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  indicator: {
    position: 'absolute',
    height: 1,
    flex: 1,
    alignSelf: 'flex-start',
    width: 75,
    backgroundColor: 'black',
  }
})

export default DetailScreen
