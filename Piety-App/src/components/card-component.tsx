import { Box, Image, Text, useColorMode, useColorModeValue, View } from "native-base"
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
  const _darkArray = ["rgba(0,0,0,0.2)", "rgba(0,0,0,0.1)"]
  const checkColor = useColorModeValue(_lightArray, _darkArray)

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
    {
      id: 3,
      title: "Weather",
      type: "soon",
      image: require('../assets/card3.png'),
      secondary: require('../assets/cloudy.png')
    }
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
              justifyContent: 'space-around', 
              alignItems: 'center',
              borderRadius: 45,
            }}
            intensity={80}
            tint={"light"}
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
            <View flex={1} alignItems='flex-start' justifyContent="flex-start" width={"50%"} height="50%" >
              <Text style={{fontSize: 22, fontWeight: 'bold', color: '#000'}}>{item.title}</Text>
              <Text color="#000" fontSize={20}>{item.type}</Text>
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
        sliderWidth={width - 20}
        showsHorizontalScrollIndicator={false}
        itemWidth={width-20}
      />
      <Paginator data={Calender} scrollX={scrollX} />
    </View>
    
  )
}

export default Cards
