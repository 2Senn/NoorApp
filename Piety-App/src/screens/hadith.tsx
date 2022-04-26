import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, VStack, useColorModeValue, StatusBar, Image, Input, Icon, Button, useColorMode } from 'native-base'
import { Dimensions, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import AnimatedColorBox from '../components/animated-color-box'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons' 
import shortid from 'shortid'

export const {width, height} = Dimensions.get('screen')
export const ITEM_HEIGHT = height * 0.18
export const SPACING = 20

interface screenProps{
  navigation: any,
  route: any,
}

export default function HadithScreen(props: screenProps){

  const [hadithJSON, setHadithJSON] = useState<any>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("انما الأعمال بالنيات ")

  const sb = useColorModeValue("rgba(0,0,0,0.6)", "darkBlue.800")
  const url = `https://dorar-hadith-api.herokuapp.com/api/search?value=${search}`



  const getHadith = useCallback(async() => {
    try{
      let response = await fetch(url)
      let json = await response.json()
      setHadithJSON(json)
      console.log(hadithJSON)
    } catch(error){
        console.log(error)
    }  
    setLoading(false)
  }, [search])


  
  useEffect(() => {
    getHadith()
  }, [getHadith])



  //islamic icons created by Freepik - Flaticon

  const data = [
    { 
      key: shortid.generate(),
      hadiths: hadithJSON[0],
      image: require('../assets/man.png')
    },
    {  
      key: shortid.generate(),
      hadiths: hadithJSON[1],
      image: require('../assets/woman.png')
    },
    
    {   
      key: shortid.generate(),
      hadiths: hadithJSON[2],
      image: require('../assets/arab.png')
    },
    {   
      key: shortid.generate(),
      hadiths: hadithJSON[3],
      image: require('../assets/arab2.png')
    },
    {   
      key: shortid.generate(),
      hadiths: hadithJSON[4],
      image: require('../assets/united-arab-emirates.png')
    },
    {   
      key: shortid.generate(),
      hadiths: hadithJSON[5],
      image: require('../assets/arab-man.png')
    },
    {   
      key: shortid.generate(),
      hadiths: hadithJSON[6],
      image: require('../assets/muslim.png')
    },
    {   
      key: shortid.generate(),
      hadiths: hadithJSON[7],
      image: require('../assets/dates.png')
    },
    {   
      key: shortid.generate(),
      hadiths: hadithJSON[8],
      image: require('../assets/window.png')
    },
    {   
      key: shortid.generate(),
      hadiths: hadithJSON[9],
      image: require('../assets/prayer.png')
    },
    {   
      key: shortid.generate(),
      hadiths: hadithJSON[10],
      image: require('../assets/lantern.png')
    },
    {   
      key: shortid.generate(),
      hadiths: hadithJSON[11],
      image: require('../assets/kaaba.png')
    },
    {   
      key: shortid.generate(),
      hadiths: hadithJSON[12],
      image: require('../assets/dates.png')
    },
    {   
      key: shortid.generate(),
      hadiths: hadithJSON[13],  
      image: require('../assets/carpet.png')
    },
    {
      key: shortid.generate(),
      hadiths: hadithJSON[14],
      image: require('../assets/tayammum.png')
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


  const inverse = useColorModeValue("white", "black")
  const sbg = useColorModeValue("rgba(0,0,0,0.8)", "darkBlue.700")

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

  return(
    
    <View
      flex={1}
      width="full"
      height={height}
    >
      <AnimatedColorBox width={"full"} bg={useColorModeValue('#FEDBD0', 'blueGray.900')} flex={1}>
      <Image 
        source={require('../assets/sakuraa.png')}
        style={StyleSheet.absoluteFillObject} blurRadius={10}
          />
      <SafeAreaView style={{flex: 1}}>
      <StatusBar hidden />
      <View pt={5} flex={1} flexDir="row" width={width} height={100} position="absolute">
        <Input 
            placeholder="Search"
            variant="filled" 
            backgroundColor={sbg}
            width={width}
            height={50}
            borderRadius="10" 
            color={sbg}
            onSubmitEditing={(text) => 
              {
                setSearch(text.nativeEvent.text)
                setLoading(true)
              }}
            py="1" 
            px="2" 
            placeholderTextColor={inverse}
            borderWidth="0" 
            InputLeftElement={<Icon ml="2" size="4" color={inverse} as={ Feather } name="cloud" />} 
            />
      </View>
      <View flex={1} pt={SPACING}>
      {(loading) ? <Text  fontSize={30}>Hmmm...</Text> : (
      <FlatList 
        data={data}
        keyExtractor={item => item.key}
        contentContainerStyle={{ padding: SPACING}}
        renderItem={({item, index}) =>  {
          return(
            <TouchableOpacity 
                      style={{ marginBottom: SPACING, height: ITEM_HEIGHT}} 
                      onPress={() => {
                        props.navigation.navigate("HDetail", {item})
                      }}>
              <View flex={1} p={SPACING}>
                <View 
                      style={[StyleSheet.absoluteFillObject ]} 
                      borderRadius={16} 
                      backgroundColor={hasData(item.hadiths) ? checkBack(item.hadiths.grade) : null} 
                      />
                  <View style={{height: ITEM_HEIGHT, width: ITEM_HEIGHT * 1.5, position: 'absolute', flex: 1, flexShrink: 0.2}}>
                    <Text 
                      margin={2} 
                      style={styles.hadith} 
                      adjustsFontSizeToFit>{hasData(item.hadiths) ? item.hadiths.hadith : noResultView()}
                    </Text>
                  </View>
                  <Text 
                    margin={5} 
                    style={styles.grade}
                  >
                    {hasData(item.hadiths) ? item.hadiths.grade : noResultView()}
                  </Text>
                <Image alt="i passed it..." source={hasData(item.hadiths) ? forImage(item.hadiths.grade) : null} style={styles.image}/>
              </View>
            </TouchableOpacity>
            
          )
        }}
        />
      )}
      <View style={styles.bg}/>
      </View>
      </SafeAreaView>
      </AnimatedColorBox>
    </View>
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
  bg: {
    position: 'absolute',
    width,
    height,
    backgroundColor: 'red',
    transform: [{ translateY: height }],
    borderRadius: 32
  }


})



