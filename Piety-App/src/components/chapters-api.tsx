import React, {useState, useEffect, useRef, useCallback} from 'react'
import { StyleSheet, Animated, TouchableOpacity} from 'react-native'
import { Text, VStack, Image } from 'native-base'
import { useNavigation } from '@react-navigation/native'


export default function FetchQuran() {

  const navigation = useNavigation()

  const [data, setData] = useState<any>([])
  const [loading, setLoading] = useState(true)
  const url = "https://api.quran.com/api/v3/chapters?language=en"
  const PADDING = 5
  const scrollY = useRef(new Animated.Value(0)).current
  const ICON_SIZE = 30
  const ITEM_SIZE = 7 + ICON_SIZE + PADDING * 12 

  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false))
  }, [])

  return(
      <Animated.FlatList 
        data={data.chapters}
        onScroll={Animated.event(
          [{ nativeEvent: {contentOffset: {y: scrollY}}}],
          { useNativeDriver: true }
      )}
        renderItem={({ item, index }) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ]
          const opacityInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 0.5)
          ]

          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          })
          const opacity = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0]
          })
         
          const chapterNumber = item.id 
          const handleSelect = () => {
            navigation.navigate("Mushaf", {chapterNumber})
        } 
        

        return(
          <TouchableOpacity onPress={handleSelect}> 
            <Animated.View 
              style={{ 
                flex: 1, 
                flexDirection: "row", 
                padding: PADDING,
                borderColor: "black",
                borderBottomWidth: 1,
                borderRadius: 50,
                opacity,
                transform: [{scale}]
            }}
               
            >
              <Image source={require("../assets/icon2.png")} size={ICON_SIZE} alignSelf="center" alt="icon2" />
              <Text style={styles.item}>{item.id}</Text>
              <Text style={styles.item} >{item.name_arabic}</Text>
              <VStack alignSelf={"flex-end"}>
                <Text style={styles.item}>{item.name_complex}</Text>
                <Text style={styles.verse_count}>{item.verses_count} Verses</Text>
              </VStack>
            </Animated.View>
          </TouchableOpacity>
        )
        }}
        keyExtractor={(item) => item.id}
      />
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

