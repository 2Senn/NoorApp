import { Image, Text, useColorModeValue } from "native-base"
import React, { useRef, useState } from "react"
import { ImageBackground, View } from "react-native"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import Carousel from "react-native-snap-carousel"
import { width } from "../screens/hadith"
import Gregorian from "./gregorian"
import Hijri from "./hijri"


export const Cards = () => {
 
  const [weather, setWeather] = useState<any>([])


  const tc = useColorModeValue("#442C2E", "white")
  const cardColor = useColorModeValue("black", "#E9D0C4")
  const carouselRef = useRef(null)
  const bg=useColorModeValue("#E9D0C4", "black")

  const Calender = [
    {
      id: 1,
      title: "Hijri",
      type: "Hijri",
      image: require('../assets/card1.png'), 
      secondary: require('../assets/lantern.png')
    },
    {
      id: 2,
      title: "Gregorian",
      type: "gregorian",
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
          <ImageBackground
            source={item.image}
            borderRadius={20}
            style={{
              flexDirection: 'row', 
              height: "100%",
              width: "100%",
              justifyContent: 'space-around', 
              alignItems: 'center',
            }}
          >
            <Text style={{fontSize: 24, fontWeight: 'bold', color: '#fff'}}>{item.title}</Text>
            <Text>{item.type}</Text>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  return(
    <Carousel 
      layout='tinder'
      ref={carouselRef}
      data={Calender}
      renderItem={renderItem}
      pagingEnabled
      sliderWidth={width}
      itemWidth={width-10}
      swipeThreshold={100}
      layoutCardOffset={-12}
      inactiveSlideOpacity={0.4}
      containerCustomStyle={{
        overflow: 'visible',
      }}
      contentContainerCustomStyle={{
        paddingTop: 10
    }}
    />
  )
}

export default Cards
