import { Button, HStack, Icon, IconButton, Row, Text, useColorModeValue } from "native-base"
import React, { createRef, useCallback, useEffect, useRef, useState } from "react" 
import { BackHandler, Dimensions, ListView, RefreshControl, StyleSheet, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Feather } from '@expo/vector-icons'
import ToggleTheme from "../components/toggle-theme"
import AnimatedColorBox from "../components/animate-theme-shift"
import { Col, Padder, ScaledText, Box } from "urip-rn-kit"
import QuranKemenag from "quran-kemenag"

interface DetailScreenProps {
  route: any
  navigation: any
}

const DetailScreen = (props: DetailScreenProps) => {

  const [surah, setSurah]: [surah: any, setSurah: any] = useState(null)
  const [verses, setVerses]: [verses: any[], setVerses: any] = useState(
    [],
  )
 
  useEffect(() => {
    const {surahNumber} = props.route.params
    console.log(surahNumber)
    getQuran(surahNumber)
  }, [])

  const getQuran = async (surah_id: number) => {
    const quran = new QuranKemenag()
    const data = await quran.getSurah(surah_id)
    setSurah(data)
    setVerses(data.verses || [])
  }
  
  const SPACING = 10
  const Indicator = () => {
    return(
      <View
        style={styles.indicator}
      >

      </View>
    )
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
            
          >
            <Text style={styles.tabber} color={useColorModeValue('#442C2E', 'white')}>go to Arabic Mushaf</Text>
          </Button>
        </View>
      </View>
    )
  }
  const handleBackbutton = useCallback(() => {
    props.navigation.navigate('Quran')
  }, [props.navigation])
  return (
    <AnimatedColorBox safeArea flex={1} bg={useColorModeValue('#FEDBD0', 'blueGray.800')}>
      <View style={{flexDirection: "row", height: 50 }} >
        <Col size={1} justifyCenter alignCenter>
          <IconButton
            onPress={handleBackbutton}
            alignSelf="flex-start"
            borderRadius={100}
            variant="outline"
            borderColor={useColorModeValue("#442C2E", "blue.700")}
            _icon={{
              as: Feather,
              name: 'chevron-left',
              size: 4,
              color: useColorModeValue('#442C2E', 'darkBlue.700')
              }}
            />
        </Col>
        <Col size={3} justifyCenter >
          <ScaledText 
            color={useColorModeValue("#442C2E", "white")}
            bold
          >    
            {surah ? surah.surah_name : ''}
          </ScaledText>
        </Col>
        <Col size={2} justifyEnd>
          <ToggleTheme />
        </Col>
      </View>
      <Row flex={1} justifyContent="center" alignSelf="center">
        <Tabs />
      </Row>
      <Row>
        <Box>
          <ScaledText>{surah ? surah.surah_name : ''}</ScaledText>
        </Box>
      </Row>
      <View >
          <Box fullWidth fullHeight backgroundImage={require('../assets/sakuraa.png')} opacity={0.2} /> 
      </View>
    </AnimatedColorBox>
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
