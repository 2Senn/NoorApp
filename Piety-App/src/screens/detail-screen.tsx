import { Button, FlatList, HStack, Icon, IconButton, Row, Text, useColorModeValue, VStack, View, Image} from "native-base"
import React, { createRef, useCallback, useEffect, useRef, useState } from "react" 
import { BackHandler, Dimensions, ListView, RefreshControl, StyleSheet,} from "react-native"
import { Feather } from '@expo/vector-icons'
import ToggleTheme from "../components/toggle-theme"
import AnimatedColorBox from "../components/animate-theme-shift"

interface DetailScreenProps {
  navigation: any
  route: any
}

const DetailScreen = (props: DetailScreenProps) => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  
  const {chapterNumber} = props.route.params
  const url = `http://api.quran.com/api/v3/chapters/${chapterNumber}/verses?recitation=1&translations=21&language=ar&text_type=image` 

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
  
  const PADDING = 10
 
  const handleBackbutton = useCallback(() => {
    props.navigation.navigate("Quran")
  }, [props.navigation])
  return (
    <View flex={1} padding={PADDING}>
      <IconButton 
        width="10"
        onPress={handleBackbutton}
        alignSelf="flex-start"
        borderRadius={150}
        variant="outline"
        borderColor={useColorModeValue("#442C2E", "blue.700")}
        _icon={{
          as: Feather,
          name: 'chevron-left',
          size: 4,
          color: useColorModeValue('#442C2E', 'darkBlue.700')
          }}
      /> 
    </View>


  )
    /*
    <AnimatedColorBox
      width="full"
      flex= {1}
      bg="#FEEBD0"
    >
    <FlatList 
      data={data.verses}
      renderItem={({item, index}) => {
      const _image = `http:${item.image.url}`  
        return(
              <View>
                <Image source={{uri: _image}} style={{width: 400, height: 40}}/>
              </View>
        )
      }}
      />
    </AnimatedColorBox>
  )
  */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50
  },
  item: {
    padding: 20,
    fontSize: 20,
    marginTop: 5,
    alignSelf: "center"
  },
  verse_count: {
    fontSize: 15,
    alignSelf: "center"
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 25,
    elevation: 4

  }

})

export default DetailScreen
