import { Box, Image, Text, useColorMode, useColorModeValue, View, VStack } from "native-base"
import React, { useEffect, useRef, useState } from "react"
import { ImageBackground, Animated, StyleSheet } from "react-native"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import Carousel from "react-native-snap-carousel"
import { width } from "../screens/hadith"
import Gregorian from "./gregorian"
import Hijri from "./hijri"
import Paginator from "./paginator"
import { BlurView } from "expo-blur"
import { LinearGradient } from 'expo-linear-gradient'
import { borderWidth } from "styled-system"
import RandomHadith from "./random-hadith"

export const Cards = () => {
 
  //use States
  const [weather, setWeather] = useState<any>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  //Paginator animation
  const scrollX = useRef(new Animated.Value(0)).current
  const itemChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index)
  }).current
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50}).current
  
  //Component colors
  const tc = useColorModeValue("#442C2E", "white")
  const cardColor = useColorModeValue("black", "#E9D0C4")
  const carouselRef = useRef(null)
  const bg=useColorModeValue("#E9D0C4", "black")

  //Calender Variables
  let getHijri = Hijri()
  let getGregorian = Gregorian()

  //gradient options
  //
  const _lightArray = ["rgba(204,154, 137, 1)", "rgba(156, 33, 37, 0.4)"]
  const _darkArray = ["rgba(255,255,255,0.2)", "rgba(255,255,255,0.1)"]
  const checkColor = useColorModeValue(_lightArray, _darkArray)

  const randomHadith = RandomHadith[Math.floor(Math.random() * RandomHadith.length)].english

  //data
  const Calender = [
    {
      id: 1,
      title: "Hijri",
      type: getHijri,
      image: require('../assets/card1.png'), 
      secondary: require('../assets/lantern.png')
    },
    {
      id: 2,
      title: "Gregorian",
      type: getGregorian,
      image: require('../assets/card4.png'),
      secondary: require('../assets/header.png')
    },
  ]
  
  //render function

  const renderItem = ({item}: any)=>{
    return(
      <TouchableWithoutFeedback>
        <View>
          <BlurView
            style={{
              flexDirection: 'row', 
              height: "100%",
              width: "100%",
              borderRadius: 45,
            }}
            intensity={50}
            tint={"default"}
          >
            <LinearGradient 
              colors={checkColor} 
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              style=
                {[StyleSheet.absoluteFillObject, {
                borderRadius: 45,
              }]}
              />
          <VStack space={2}>
            <View flex={1} alignItems='flex-start' justifyContent="flex-start" margin={5} >
              <Text style={{fontSize: 25, fontWeight: 'bold', color: '#000', paddingTop: 10}}>{item.title}</Text>
              <Text color="#000" fontSize={20}>{item.type}</Text>
              <Image 
                  source={require('../assets/lantern.png')} 
                  resizeMode={"contain"} 
                  position="absolute" 
                  width={50} 
                  height={50} 
                  top={20} 
                  alt="lantern vector icon by freepik - FlatList.com"
                />
            </View>
          </VStack>
            <View flex={1} alignItems='center' justifyContent='center' width={100} >
             <Text paddingX={10}  >{randomHadith}</Text> 
            </View>
          </BlurView>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  return(
    <View flex={3}>
      <Carousel 
        layout='default'
        ref={carouselRef}
        data={Calender}
        renderItem={renderItem}
        pagingEnabled
        scrollEventThrottle={32}
        onScroll=
          {Animated.event([{nativeEvent: { contentOffset: { x: scrollX} } }], {
            useNativeDriver: false,
          })}
        onViewableItemsChanged={itemChanged}
        viewabilityConfig={viewConfig}
        sliderWidth={width - 10}
        showsHorizontalScrollIndicator={false}
        itemWidth={width-10}
      />
      <Paginator data={Calender} scrollX={scrollX} />
    </View>
    
  )
}

export default Cards
