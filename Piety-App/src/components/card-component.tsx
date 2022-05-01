import { BlurView } from "@react-native-community/blur"
import { Box, Image, Text, useColorModeValue, View } from "native-base"
import React, { useEffect, useRef, useState } from "react"
import { ImageBackground, Animated } from "react-native"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import Carousel from "react-native-snap-carousel"
import { width } from "../screens/hadith"
import Gregorian from "./gregorian"
import Hijri from "./hijri"
import Paginator from "./paginator"


export const Cards = () => {
 
  const [weather, setWeather] = useState<any>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const scrollX = useRef(new Animated.Value(0)).current

  const itemChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index)
  }).current

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50}).current
  
  const tc = useColorModeValue("#442C2E", "white")
  const cardColor = useColorModeValue("black", "#E9D0C4")
  const carouselRef = useRef(null)
  const bg=useColorModeValue("#E9D0C4", "black")

  let getHijri = Hijri()
  let getGregorian = Gregorian()

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


  const renderItem = ({item}: any)=>{
    return(
      <TouchableWithoutFeedback>
        <View>
          <Box
            style={{
              flexDirection: 'row', 
              height: "100%",
              width: "100%",
              justifyContent: 'space-around', 
              alignItems: 'center',
              backgroundColor: '#CEDADE',
              borderRadius: 30,
            }}
          >
            <Text style={{fontSize: 24, fontWeight: 'bold', color: '#000'}}>{item.title}</Text>
            <Text color="black" fontSize={20}>{item.type}</Text>
          </Box>
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
