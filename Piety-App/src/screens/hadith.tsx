import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, VStack, useColorModeValue, StatusBar, Image, Input, Icon, Button, useColorMode, Center, IconButton } from 'native-base'
import { Dimensions, StyleSheet, TouchableOpacity, FlatList, ScrollView, Animated, Alert } from 'react-native'
import AnimatedColorBox from '../components/animated-color-box'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons' 
import shortid from 'shortid'
import { useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer';
import BarNav from '../components/navbar'
import { textAlign } from 'styled-system'
import LoadingIndicator from '../components/moti-loading'


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

export default function HadithScreen({navigation}: any){

  navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>()
  
  const handleBackbutton = useCallback(() => {
    navigation.navigate("Pray")
  }, [navigation])


  const [hadithJSON, setHadithJSON] = useState<any>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("نيات ")

  const url = `https://dorar-hadith-api.herokuapp.com/api/search?value=${search}`


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


  const borderColor = useColorModeValue("#000", "#fff")

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
      setLoading(true)
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
      <AnimatedColorBox width={"full"} h="full" bg={useColorModeValue('primary.25', 'blueGray.900')} flex={1}>
      <SafeAreaView style={{flex: 1}}>
      <StatusBar hidden />
        <View p={4} mt={10} width={"full"} height={"20%"} >
          <View flex={1} flexDir="row">
            <View width={50} height={50} alignItems="flex-start">
              <IconButton 
                onPress={handleBackbutton}
                width={50}
                height={50}
                borderRadius={50}
                _icon={{
                  as: Feather,
                  name: 'arrow-left-circle',
                  size: 6,
                  }}
              />
            </View>
            <View flex={1} width={250} height={50}>
              <Input 
                placeholder="Search"
                variant="filled" 
                flex={1}
                backgroundColor={sbg}
                width={250}
                height={50}
                borderRadius="10" 
                color={inverse}
                onSubmitEditing={(text) => 
                  {
                    setSearch(text.nativeEvent.text)
                    setLoading(true)
                  }}
                placeholderTextColor={inverse}
                InputLeftElement={<Icon ml="2" size="4" color={inverse} as={ Feather } name="cloud" />} 
                />
            </View>
          </View>
        </View>
      <View flex={1}>
      {(loading) ? 
              <View alignSelf="center" justifyContent="center" height="full" > 
                <LoadingIndicator size={150}/>
              </View>
      : (
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
                      style={{ marginBottom: SPACING, height: ITEM_HEIGHT * 0.85}} 
                      onPress={() => {
                        if(item.hadiths === void 0){
                          Alert.alert("Error", "please select a valid hadith")
                        }
                        else{
                          navigation.navigate("HDetail", {item: item})
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
                  borderRightWidth={5}
                  borderColor={borderColor}
                  borderTopLeftRadius={30}
                  backgroundColor={hasData(item.hadiths) ? checkBack(item.hadiths.grade) : null} 
                />
                  <VStack space={2} position={'absolute'} alignSelf={'flex-end'} justifyContent={'center'} width={300}>
                    <View flex={1}>
                      <Text
                        noOfLines={3}
                        textAlign={'center'}
                        style={styles.hadith} 
                        adjustsFontSizeToFit>{hasData(item.hadiths) ? item.hadiths.hadith : noResultView()}
                      </Text>
                    </View>
                  </VStack>
                <View position={'absolute'} flex={1} style={{marginTop: 50, padding: 5}} alignItems="flex-start" justifyContent="flex-start" >
                  <Text 
                    adjustsFontSizeToFit
                    style={styles.grade}
                  >
                    {hasData(item.hadiths) ? item.hadiths.grade : noResultView()}
                  </Text>
                </View>
                <Image 
                  alt="Icons by Freepik from FlatIcons.com"
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
    padding: 10,
    margin: 10,
    bottom: 20,
    right: SPACING
  },
  hadith: {
    fontWeight: '700',
    fontSize: 18,
    margin: 20,
    color: "white",
    right: 10,
    textAlign: 'right'

  },
  grade: {
    fontSize: 18,
    opacity: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 15,
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



