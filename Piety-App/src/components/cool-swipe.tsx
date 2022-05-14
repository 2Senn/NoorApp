import React, { useState } from "react";
import Page from './page' 
import Slider from "./slider";
import PrayTimes from "./prayers";
import { View } from "native-base";


const CoolSwipe = () => {

  const prayers = PrayTimes()


  const pages = [
    {
      color: "#1E2952",
      title: "Fajr",
      description: prayers[0],
      icon: "sunrise",
    },
    {
      color: "#FDB482",
      title: "Dhuhr",
      description: prayers[1],
      icon: "sun",
    },
    {
      color: "#FEDBD0",
      title: "Asr",
      description: prayers[2],
      icon: "cloud",
    },
  ];



  const [index, setIndex] = useState(1);
  const prev = pages[index - 1];
  const next = pages[index + 1];
  return (
    <View h="50%" w="100%" alignItems="center" justifyContent="center" flex={1}>
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


