import React, { useEffect, useRef, useState } from "react";
import Page from './page' 
import Slider from "./slider";
import PrayTimes from "./prayers";
import { View } from "native-base";
import Paginator from "./paginator";
import Animated from "react-native-reanimated";


const CoolSwipe = () => {

  const prayers = PrayTimes()


  const pages = [
    {
      color: "#e9f1fd",
      title: "Fajr",
      description: prayers[0],
      icon: "sunrise",
    },
    {
      color: "#AEC1BD",
      title: "Dhuhr",
      description: prayers[1],
      icon: "sun",
    },
    {
      color: "#A0D0C6",
      title: "Asr",
      description: prayers[2],
      icon: "cloud",
    },
    {
      color: '#E5DAD7',
      title: "Maghrib",
      description: prayers[3],
      icon: "sunset",
    },
    {
      color: "#877375",
      title: "Isha",
      description: prayers[4],
      icon: "moon",
    },
  ];


  const [index, setIndex] = useState(1);
  const prev = pages[index - 1];
  const next = pages[index + 1];
  return (
    <View borderRadius={30} h="full" w="100%">
      <Slider
        key={index}
        index={index}
        setIndex={setIndex}
        prev={prev && <Page page={prev} />}
        next={next && <Page page={next} />}
      >
        <Page page={pages[index]!} />
      </Slider>
    </View>
  );
};

export default CoolSwipe;


