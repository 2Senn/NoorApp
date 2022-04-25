import React, { useCallback, useEffect } from "react"
import { View, Text, VStack, Image, FlatList, useColorModeValue, IconButton} from 'native-base'
import AnimatedColorBox from "../components/animate-theme-shift"
import { Feather } from "@expo/vector-icons"
import { StyleSheet } from "react-native"
import { height, width, SPACING, ITEM_HEIGHT } from "./hadith-results"

interface screenProps{
  navigation: any,
  route: any,
}


export default function HadithDetail(props: screenProps){
  
  const {item} = props.route.params

 

  const bg = useColorModeValue("#FEDBD0", "blueGray.700")
  const handleback = useCallback(() => {
    props.navigation.navigate("Hadith")
  }, [props.navigation])  
 
  const hasData = (item: any) => {
    if(item != null){
      return true
    }
    else{
      return false
    }
  }


  const noResultView = () => {
    return(
      <View flex={1} alignSelf="center" justifyContent="center">
        <Text>
          NO RESULTS... PLEASE MODIFY SEARCH 
        </Text>
      </View>
    )
  }


  const checkBack = (item: string) => {
    if(item.indexOf("صحيح") !== -1 ){
      return "#285D34"
    }
    else if(((item.indexOf("حسن")) !== -1 )){
      return "#698E71"
    }
    else if(((item.indexOf("جيد" )) !== -1 )){
      return "#698E71"
    }
    else{
      return "rgba(179, 63, 64, 0.8)"
    }
  }

  const forImage = (item: string) => {
    if(checkBack(item) == "#698E71"){
      return require("../assets/thumbs-up.png")
    }
    if( checkBack(item) == "#285D34"){
      return require("../assets/thumbs-up.png")
    }
    else{
      return require("../assets/dislike.png")
    }
  }

  return(
      <View style={{flex: 1}}>
          <IconButton
            onPress={handleback}
            variant={"ghost"} 
            position="absolute"
            style={{padding: 12}}
            top={5} 
            left={3}
            zIndex={2}
            _icon={{
              as: Feather,
              name: "arrow-left",
              size: 30,
              color: useColorModeValue("#442C2E", "darkBlue.600")
          }}
            />
          <View 
            style={[StyleSheet.absoluteFillObject]} 
            borderRadius={16} 
            backgroundColor={checkBack(item.hadiths.grade)} 
          />
          <Text style={styles.hadith}>{item.hadiths.hadith}</Text>
          <Text style={styles.grade}>{item.hadiths.grade}</Text>
          <Image
            progressiveRenderingEnabled
            alt="i passed it..." 
            source={item.image} 
            key={item.id}
            style={styles.image}
          /> 
          <View style={styles.bg}>
            <Text>CONTENT</Text>
          </View>
            
      </View> 
  )
}
const styles = StyleSheet.create({
  image: {
    width: ITEM_HEIGHT * 0.8,
    height: ITEM_HEIGHT * 0.8,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
    right: SPACING
  },
  hadith: {
    fontWeight: '700',
    fontSize: 18,
    color: "white",

  },
  grade: {
    fontSize: 18,
    color: "white",
  },
  bg: {
    position: 'absolute',
    width,
    height,
    backgroundColor: 'red',
    transform: [{ translateY: height }],
    borderRadius: 32
  }

})
