import React, { useState, useEffect, useCallback } from 'react'
import { View, FlatList, Text, VStack, useColorModeValue, StatusBar } from 'native-base'
import { StyleSheet } from 'react-native'
import AnimatedColorBox from '../components/animate-theme-shift'

export default function HadithScreen(){

  const [hadithJSON, setHadithJSON] = useState([])
  const [hadith, setHadith] = useState([])
  const [narrator, setNarrator] = useState([])
  const [grade, setGrade] = useState([])

  const SPACING = 20  
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

  return(
    <AnimatedColorBox
      width="full"
      flex={1}
      bg={useColorModeValue("#006994", "black")}
    >
      <StatusBar hidden />
      <FlatList 
        data={hadithJSON}
        keyExtractor={(item) => String(item.number_or_page)}
        horizontal
        pagingEnabled
        renderItem={({item, index}) =>  {
          return(
            <VStack space={5}>
              <Text>{item.hadith}</Text>
              <Text>{item.grade}</Text>
              <Text>{item.el_rawi}</Text>
            </VStack>
          )
        }}
        />
    </AnimatedColorBox>
  )
}

