import React, { useCallback, useState } from "react"
import { IconButton, useColorModeValue, View, HStack, FlatList, Box, Icon } from "native-base"
import { TouchableOpacity, Dimensions, StatusBar, StyleSheet, Image} from "react-native"
import { Feather } from "@expo/vector-icons"
import AnimatedColorBox from "../components/animated-color-box"
import Mushaf from "../utils/mushaf"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import Mushaf2 from "../utils/mushaf2"
import { LinearGradient } from "expo-linear-gradient"
import { zIndex } from "styled-system"

interface MushafScreenProps{
  navigation: any
} 


const MushafScreen = (props: MushafScreenProps) => {

  const handleBackbutton = useCallback(() => {
    props.navigation.navigate("Quran")
  }, [props.navigation])

 
  const [isPressedIn, setIsPressedIn] = useState(false)
  const handlePressIn = useCallback(() => {
    setIsPressedIn(!isPressedIn)
  }, [isPressedIn])

  const handlePressOut = useCallback(() => {
    setIsPressedIn(false)
  }, [isPressedIn])
  
  const l1 = "#faf5e8" 
  const l2 = "#d3cec3"
  const d1 = '#121211'
  const d2 = '#2c2c2b'

  const bg=useColorModeValue('primary.25', "#1f1f1e")
  const outerShadow = useColorModeValue('#b0aca3', "#121211")
  const innerShadow = useColorModeValue("#ffffff", "#000")
  const _lightArray = isPressedIn ? [l1, l2] : [l2, l1]
  const _darkarray = isPressedIn ? [d1, d2] : [d2, d1]  

  const gradient = useColorModeValue(_lightArray, _darkarray)



  const [images, setimages] = useState(Mushaf2)  
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
              <SafeAreaView>
                
                  <View>
                    {showOptions ? (
                      <View 
                        h={"10%"} 
                        bg={bg} 
                        w={"100%"} 
                        p={2}
                        zIndex={2}
                      >
                        <View flex={1} flexDir={"row"} >
                          <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
                          <View w={50} h={50} p={5} style={[styles.buttonOuter, {shadowColor: outerShadow}]}>
                            <View flex={1} w={50} h={50} style={[styles.buttonInner, {shadowColor: innerShadow}]}>
                              <LinearGradient 
                                colors={gradient}
                                start={[0.6,0.5]}
                                end={[0.1, 0.48]}
                                style={[styles.face, {borderRadius: 25}]}
                              >
                                <Icon as={Feather} name="arrow-left-circle" w={40} h={40}/>  
                              </LinearGradient>
                            </View>
                          </View>
                          </TouchableWithoutFeedback>
                        </View>
                      </View>
                    ) : null}
                    <View backgroundColor={"primary.25"} >
                    <Image 
                      source={item} 
                      key={index} 
                      style={{
                        width: width,
                        height: height,
                        resizeMode:'contain',
                      }}
                    />
                    </View>
                  <View w="full" h="80%" position={'absolute'}>
                    <TouchableWithoutFeedback 
                      onPress={() => {setShowOptions(!showOptions)}}
                      containerStyle={{height: height * 0.8, width: width, position: 'absolute', zIndex: 1 }}
                    > 
                    </TouchableWithoutFeedback>
                  </View>
                  </View>
              </SafeAreaView>
            )}
          />
        </View>
      </AnimatedColorBox>
);
}

const styles = StyleSheet.create({
  buttonOuter: {
    borderRadius: 25,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 3,
    elevation: 8,
    shadowOpacity: 1,
  },
  buttonInner: {
    borderRadius: 25,
    shadowOffset: {
      width: -3,
      height: -3,
    },
    shadowRadius: 3,
    elevation: 8,
    shadowOpacity: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  face: {
    padding: 12,
    position: 'absolute',
  }
})

export default MushafScreen


