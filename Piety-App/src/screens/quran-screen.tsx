import { Box, HStack, Text, useColorMode, useColorModeValue, View, VStack, Image } from "native-base"
import React from "react"
import { StyleSheet } from "react-native"
import AnimatedColorBox from "../components/animate-theme-shift"
import BarNav from '../components/navbar'
import FetchQuran from "../components/chapters-api"
import ToggleTheme from "../components/toggle-theme"

const QuranScreen = () => {
  return(
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue("#FEDBD0", "darkBlue.800")}
    >
      <View zIndex={1} >
        <BarNav />
        <ToggleTheme />
      </View>
      <View zIndex={1}>
        <FetchQuran />
      </View>
      <Image source={require("../assets/sakuraa.png")} style={StyleSheet.absoluteFillObject} opacity={0.4} blurRadius={5}/>
    </AnimatedColorBox>
  )
}

/*
interface QuranScreenProps {
  navigation: any
  refreshing: boolean
  route: any
}


const SPACING = 5
const ICON_SIZE = 35
const CARD_SIZE = 52 + SPACING * 3
const {width, height} = Dimensions.get('screen')

const QuranScreen = (props: QuranScreenProps) => {
  const [listOfSurah, setListOfSurah]: [listOfSurah: Surah[], setListOfSurah: (value: any) => void,] = useState([])

  useEffect(() => {
    getData()
  }, []) 

  const getData = async () => {
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
      <BarNav /> 
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
          const surahNumber = item.surah_id
          const pressed = () => {
            props.navigation.navigate('Detail', { surahNumber })
            
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
        <Line color="000" size={1}/>
      </TouchableOpacity>
  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

*/

export default QuranScreen
