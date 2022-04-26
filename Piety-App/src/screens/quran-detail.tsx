import { Button, IconButton, Row, Text, useColorModeValue, View } from "native-base"
import React, { useCallback, useEffect, useState } from "react" 
import { StyleSheet } from "react-native"
import { Feather } from '@expo/vector-icons'


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
 
  const PADDING = 10
 
  const handleBackbutton = useCallback(() => {
    props.navigation.navigate("Quran")
  }, [props.navigation])

  const handleMushaf = useCallback(() => {
    props.navigation.navigate("Mushaf")
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
      <Button onPress={handleMushaf}>
        <Text>Mushaf</Text>  
      </Button>
    </View>


  )
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

