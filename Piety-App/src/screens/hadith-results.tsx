import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, VStack, useColorModeValue, StatusBar, Image } from 'native-base'
import { Dimensions, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import AnimatedColorBox from '../components/animate-theme-shift'
import { SafeAreaView } from 'react-native-safe-area-context'
import { position } from 'native-base/lib/typescript/theme/styled-system'
import { faker } from '@faker-js/faker'

const {width, height} = Dimensions.get('screen')
const ITEM_HEIGHT = height * 0.18
const SPACING = 20

interface screenProps{
  navigation: any,
  route: any,
}

export default function HadithScreen(){

  const [hadithJSON, setHadithJSON] = useState([])
  const [hadith, setHadith] = useState("")
  const [narrator, setNarrator] = useState([])
  const [grade, setGrade] = useState()  
  const [source, setSource] = useState([])
  const [number, setNumber] = useState([])
  const [mohadeth, setMohadeth] = useState([])
  const [loading, setLoading] = useState(true)

  const sb = useColorModeValue("rgba(0,0,0,0.6)", "darkBlue.800")
  const i_search = "نيات "
  const url = `https://dorar-hadith-api.herokuapp.com/api/search?value=${i_search}`




  const getHadith = useCallback(async() => {
    try{
      let response = await fetch(url)
      let json = await response.json()
      setHadithJSON(json)
      setHadith(json.hadith)
      console.log(hadithJSON)
    } catch(error){
        console.log(error)
    }  
    setLoading(false)
  }, [])


  
  useEffect(() => {
    getHadith()
    console.log(hadith)
  }, [])

  //islamic icons created by Freepik - Flaticon

  const data = [
    { 
      key: faker.random.uuid(),
      hadiths: hadithJSON[0],
      image: require('../assets/quran.png'),

    },
    {  
      key: faker.random.uuid(),
      hadiths: hadithJSON[1],
      image: require('../assets/kaaba.png')
    },
    
    {   
      key: faker.random.uuid(),
      hadiths: hadithJSON[2],
      image: require('../assets/carpet.png')
    },
    {   
      key: faker.random.uuid(),
      hadiths: hadithJSON[3],
      
      image: require('../assets/lantern.png')
    },
    {   
      key: faker.random.uuid(),
      hadiths: hadithJSON[4],
      
      
      image: require('../assets/praying.png')
    },
    {   
      key: faker.random.uuid(),
      hadiths: hadithJSON[5],
      
      
      image: require('../assets/tayammum.png')
    },
    {   
      key: faker.random.uuid(),
      hadiths: hadithJSON[6],
      
      
      image: require('../assets/woman.png')
    },
    {   
      key: faker.random.uuid(),
      hadiths: hadithJSON[7],
      
      
      image: require('../assets/dates.png')
    },
    {   
      key: faker.random.uuid(),
      hadiths: hadithJSON[8],
      
      
      image: require('../assets/alms.png')
    },
    {   
      key: faker.random.uuid(),
      hadiths: hadithJSON[9],
      
      
      image: require('../assets/ablution.png')
    },
    {   
      key: faker.random.uuid(),
      hadiths: hadithJSON[10],
      image: require('../assets/pork.png')
    },
    {   
      key: faker.random.uuid(),
      hadiths: hadithJSON[11],
      image: require('../assets/miswak.png')
    },
    {   
      key: faker.random.uuid(),
      hadiths: hadithJSON[12],
      image: require('../assets/man.png')
    },
    {   
      key: faker.random.uuid(),
      hadiths: hadithJSON[13],  
      image: require('../assets/prayer.png')
    },
    {
      key: faker.random.uuid(),
      hadiths: hadithJSON[14],
      image: require('../assets/window.png')
    }
    
  ]


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

  if(loading) return <Text fontSize={30}>LOADING</Text>

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
        data={data}
        keyExtractor={item => item.key}
        contentContainerStyle={{ padding: SPACING}}
        renderItem={({item, index}) =>  {
          return(
            <TouchableOpacity style={{ marginBottom: SPACING, height: ITEM_HEIGHT}} onPress={() => {}}>
              <View flex={1} p={SPACING}>
                <View style={[StyleSheet.absoluteFillObject ]} borderRadius={16} backgroundColor={checkBack(item.hadiths.grade)} />
                  <View style={{height: ITEM_HEIGHT, width: ITEM_HEIGHT * 1.5, position: 'absolute', flex: 1, flexShrink: 0.2}}>
                    <Text margin={2} style={styles.hadith} adjustsFontSizeToFit>{item.hadiths.hadith}</Text>
                  </View>
                  <Text margin={5} style={styles.grade} >{item.hadiths.grade}</Text>
                <Image alt="i passed it..." source={forImage(item.hadiths.grade)} style={styles.image}/>
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
    padding: SPACING,

  },
  grade: {
    fontSize: 18,
    opacity: 0.7,
    width: width / 2,
    height: ITEM_HEIGHT * 0.5,
    right: 100,
    padding: SPACING,
    color: "white",
    overflow: "hidden"
  },
})


