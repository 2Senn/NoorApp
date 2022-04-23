import React, { useState, useEffect, useCallback } from 'react'
import { View, FlatList, Text, VStack, useColorModeValue, StatusBar, Image } from 'native-base'
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import AnimatedColorBox from '../components/animate-theme-shift'
import { SafeAreaView } from 'react-native-safe-area-context'
import { position } from 'native-base/lib/typescript/theme/styled-system'

const {width, height} = Dimensions.get('screen')
const ITEM_HEIGHT = height * 0.18
const SPACING = 20

export default function HadithScreen(){

  const [hadithJSON, setHadithJSON] = useState([])
  const [hadith, setHadith] = useState([])
  const [narrator, setNarrator] = useState([])
  const [grade, setGrade] = useState([])

  const sb = useColorModeValue("rgba(0,0,0,0.6)", "darkBlue.800")
  const i_search = "نيات "
  const url = `https://dorar-hadith-api.herokuapp.com/api/search?value=${i_search}`


  const getHadith = useCallback(async() => {
    try{
      let response = await fetch(url)
      let json = await response.json()
      setHadithJSON(json)
      setHadith(json.hadith)
      setNarrator(json.el_rawi)
      setGrade(json.grade)

    } catch(error){
        console.log(error)
    }  
  }, [])

  useEffect(() => {
    getHadith()
  }, [getHadith])



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

  return(
    
    <AnimatedColorBox
      flex={1}
      width="full"
      height={height}
      bg={useColorModeValue("#FEDBD0", "darkBlue.700")}
    >
      <SafeAreaView style={{flex: 1}}>
      <StatusBar hidden />
      <FlatList 
        data={hadithJSON}
        keyExtractor={(item) => String(item.number_or_page)}
        contentContainerStyle={{ padding: SPACING}}
        renderItem={({item, index}) =>  {
          return(
            <TouchableOpacity style={{ marginBottom: SPACING, height: ITEM_HEIGHT}} onPress={() => {}}>
              <View flex={1} p={SPACING}>
                <View style={[StyleSheet.absoluteFillObject ]} borderRadius={16} backgroundColor={checkBack(item.grade)} />
                  <Text style={styles.hadith}>{item.hadith}</Text>
                  <Text style={styles.grade} >{item.grade}</Text>
                <Image source={require('../assets/sakuraa.png')} style={styles.image}/>
              </View>
            </TouchableOpacity>
            
          )
        }}
        />
      </SafeAreaView>
    </AnimatedColorBox>
  )
}

const styles = StyleSheet.create({
  image: {
    width: ITEM_HEIGHT * 0.8,
    height: ITEM_HEIGHT * 0.8,
    resizeMode: "contain",
    position: "absolute",
    bottom: 0,
    right: SPACING
  },
  hadith: {
    fontWeight: '700',
    fontSize: 18,
    color: "white",
    width: width / 2,
    height: ITEM_HEIGHT,
    flex: 1,
    position: "absolute",
    padding: SPACING

  },
  grade: {
    fontSize: 18,
    opacity: 0.7,
    width: width / 2,
    height: ITEM_HEIGHT * 0.5,
    right: 100,
    padding: SPACING,
    color: "white"

  }
})


