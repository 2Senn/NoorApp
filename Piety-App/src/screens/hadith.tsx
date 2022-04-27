import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, VStack, useColorModeValue, StatusBar, Image, Input, Icon, Button, useColorMode, Center } from 'native-base'
import { Dimensions, StyleSheet, TouchableOpacity, FlatList, ScrollView, Animated, Alert } from 'react-native'
import AnimatedColorBox from '../components/animated-color-box'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons' 
import shortid from 'shortid'
import { flexWrap } from 'styled-system'
import { useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer';


export const {width, height} = Dimensions.get('screen')
export const ITEM_HEIGHT = height * 0.18
export const SPACING = 20

  export const detailsIcon = [
    { color: '#CEB1B5', icon: 'user'},
    { color: '#337692', icon: 'user-check'},
    { color: '#F2988F', icon: 'book'},
    { color: '#9FD7F1', icon: 'hash'},
    { color: '#F3B000', icon: 'check-circle'},

  ]


export type RootDrawerParamList = {
  HDetail: { item: any };
};



export default function HadithScreen(){

  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>()

  const [hadithJSON, setHadithJSON] = useState<any>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("نيات ")

  const sb = useColorModeValue("rgba(0,0,0,0.6)", "darkBlue.800")
  const url = `https://dorar-hadith-api.herokuapp.com/api/search?value=${search}`


  const t_image = [
    "https://cdn-icons.flaticon.com/png/512/1008/premium/1008927.png?token=exp=1650959224~hmac=1aa3cc035e1a4b5d41aca4c061b42898",
    "https://cdn-icons.flaticon.com/png/512/294/premium/294432.png?token=exp=1650959593~hmac=21cc30659994d80005b04fb67a9a9493"
  ]                                                                       

  const getHadith = useCallback(async() => {
    try{
      let response = await fetch(url)
      let json = await response.json()
      setHadithJSON(json)
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
    if(item.includes("صحيح")){
      return "#285D34"
    }
    else if((item.includes("حسن"))){
      return "#698E71"
    }
    else if(item.includes("جيد")){
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
      return require("../assets/approve.png")
    }
    if( checkBack(item) == "#285D34"){
      return require("../assets/approve.png")
    }
    else{
      return require("../assets/rejected.png")
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

  //Animation
  const scrollY = React.useRef(new Animated.Value(0)).current
  const IMAGE_SIZE = 50 
  const ITEM_SIZE = IMAGE_SIZE + 20 + SPACING * 5

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
      <Animated.FlatList 
        data={data}
        onScroll={Animated.event(
                  [{ nativeEvent: {contentOffset: {y: scrollY}}}],
                  { useNativeDriver: true }
                )}
        keyExtractor={item => item.key}
        contentContainerStyle={{ padding: SPACING}}
        renderItem={({item, index}) =>  {
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
 
          return(
            <TouchableOpacity 
                      style={{ marginBottom: SPACING, height: ITEM_HEIGHT}} 
                      onPress={() => {
                        if(item != null){
                          navigation.navigate("HDetail", {item: item})
                        }
                        else{
                          Alert.alert("Error", "please select a valid hadith")
                        }
                      }}>
              <Animated.View 
                  style={{flex: 1, 
                  padding: SPACING,
                  transform: [{scale}],
                  opacity
                }}
              >
                <View 
                      style={[StyleSheet.absoluteFillObject ]} 
                      borderRadius={16} 
                      backgroundColor={hasData(item.hadiths) ? checkBack(item.hadiths.grade) : null} 
                      />
                  <VStack space={2} position={'absolute'} alignSelf={'flex-end'} justifyContent={'center'}>
                    <View flex={1}>
                      <Text
                        textAlign={'center'}
                        style={styles.hadith} 
                        adjustsFontSizeToFit>{hasData(item.hadiths) ? item.hadiths.hadith : noResultView()}
                      </Text>
                    </View>
                    <View flex={1} pr={SPACING} >
                      <Text 
                        adjustsFontSizeToFit
                        style={styles.grade}
                      >
                        {hasData(item.hadiths) ? item.hadiths.grade : noResultView()}
                      </Text>
                    </View>
                  </VStack>
      
                <Image 
                  alt="i passed it..."
                  size={IMAGE_SIZE}
                  source={hasData(item.hadiths) ? forImage(item.hadiths.grade) : null} style={styles.image}/>
              </Animated.View>
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
    //width: ITEM_HEIGHT * 0.7,
    //height: ITEM_HEIGHT * 0.7,
    resizeMode: "contain",
    position: "absolute",
    bottom: 20,
    right: SPACING
  },
  hadith: {
    fontWeight: '700',
    fontSize: 18,
    color: "white",
    padding: SPACING,
    right: 20

  },
  grade: {
    fontSize: 18,
    opacity: 1,
    padding: SPACING,
    alignSelf: 'center',
    justifyContent: 'center',
    bottom: 40,
    color: "#EDC423",
     
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



