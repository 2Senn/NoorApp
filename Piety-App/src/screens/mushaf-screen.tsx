import React, { useCallback, useEffect, useState } from "react"
import { IconButton, Text, useColorModeValue, View, VStack, HStack, Image, FlatList, Box } from "native-base"
import QuranScreen from "./quran-screen"
import { TouchableOpacity, Dimensions, StatusBar} from "react-native"
import { Feather } from "@expo/vector-icons"
import ToggleTheme from "../components/toggle-theme"
import AnimatedColorBox from "../components/animate-theme-shift"
import Mushaf from "../components/mushaf"
import { interpolate } from "react-native-reanimated"
import TextRecognition from 'react-native-text-recognition'
import { require } from "yargs"

interface MushafScreenProps{
  navigation: any
} 

const PADDING = 10

const MushafScreen = (props: MushafScreenProps) => {

  const handleBackbutton = useCallback(() => {
    props.navigation.navigate("Quran")
  }, [props.navigation])

  
     
  const range = () => {
    return Array.from(Array(604).keys())
}
  
  const [images, setimages] = useState(Mushaf)
  const [showOptions, setShowOptions] = useState(false)

  const tint = useColorModeValue("yellow.900", "white")

  const height = Dimensions.get('window').height
  const width = Dimensions.get('window').width

  return (
      <AnimatedColorBox width="full" flex={1} bg={useColorModeValue("white", "black")}>
        <View style={{ width }}>
          <StatusBar hidden />
          <FlatList
            horizontal={true} 
            inverted
            showsHorizontalScrollIndicator={false} 
            pagingEnabled
            snapToAlignment="start"
            decelerationRate="fast"
            snapToInterval={width}
            zIndex={1}
            data={images}
            renderItem={ ({ item, index }) => (
              <TouchableOpacity 
                onPress={() => 
                {
                  setShowOptions(!showOptions)
                  
                }
              }>
                <View>
                  {showOptions ? (
                    <View>
                      <View flex={1} flexDir={"row"}>
                        <IconButton
                          width="10"
                          zIndex={1}
                          onPress={handleBackbutton}
                          alignSelf="flex-start"
                          borderRadius={150}
                          variant="outline"
                          borderColor="black"
                          _icon={{
                            as: Feather,
                            name: 'chevron-left',
                            size: 4,
                            color: "black"
                            }}
                        />
                      </View>
                    </View>
                  ) : null}
                  <Image 
                    tintColor={tint}
                    source={item} 
                    key={index} 
                    alt="."
                    style={{
                      width: width,
                      height: height,
                      resizeMode:'contain',
                    }}
                  />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </AnimatedColorBox>
);


    /*
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue("#FEEAE6", "blueGray.800")}
      width="full"
    >
      <DisplayMushaf />
        <View flex={1} flexDirection={"row"} pt={PADDING}>
          <IconButton
            width="10"
            onPress={handleBackbutton}
            alignSelf="flex-start"
            borderRadius={150}
            variant="outline"
            borderColor={useColorModeValue("#442C2E", "blue.700")}
            _icon={{
              as: Feather,
              name: 'chevron-left',
              size: 4,
              color: useColorModeValue('#442C2E', 'darkBlue.700')
              }}
          />
          <View flex={1} justifyContent="center" alignContent="center" padding={PADDING}>
            <ToggleTheme />
          </View>
        </View>
    </AnimatedColorBox>
      */
}

export default MushafScreen

