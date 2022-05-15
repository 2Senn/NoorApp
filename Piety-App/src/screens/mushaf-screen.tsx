import React, { useCallback, useState } from "react"
import { IconButton, useColorModeValue, View, HStack, FlatList, Box, Icon, Hidden, useColorMode } from "native-base"
import { TouchableOpacity, Dimensions, StatusBar, StyleSheet, Image, ImageBackground} from "react-native"
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
  
  const handleTranslate = useCallback(() => {

  }, [])

  const {toggleColorMode, colorMode} = useColorMode()
 
  const bg=useColorModeValue('primary.25', "#000")
  const iconColor = useColorModeValue("primary.75", "primary.550")

  const [images, setimages] = useState(Mushaf2)  
  const [showOptions, setShowOptions] = useState(false)

  const tint = useColorModeValue("primary.25", "#000")

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
                        <View flex={1} flexDir={"row"} p={5} justifyContent="space-evenly" >
                          <TouchableOpacity 
                            style={{flex: 1, alignItems: 'flex-start'}} 
                            onPress={handleBackbutton}
                          > 
                            <Icon as={Feather} name="arrow-left-circle" color={iconColor} w={40} h={40}/>  
                          </TouchableOpacity>
                          <TouchableOpacity 
                            style={{flex: 1, alignItems: 'center'}} 
                            onPress={handleTranslate}
                          > 
                            <Icon as={Feather} name="globe" color={iconColor} w={40} h={40}/>  
                          </TouchableOpacity>
                          <TouchableOpacity 
                            style={{flex: 1, alignItems: 'flex-end'}} 
                            onPress={toggleColorMode}
                          >
                            <Hidden colorMode={"light"}>
                              <Icon as={Feather} name="sun" color="primary.550" w={40} h={40}/>  
                            </Hidden>
                            <Hidden colorMode={"dark"}>
                              <Icon as={Feather} name="moon" color="primary.75" w={40} h={40}/>  
                            </Hidden>
                          </TouchableOpacity>
                        </View>
                      </View>
                    ) : null}
                    <View backgroundColor={tint} >
                    <Image 
                      source={item} 
                      key={index} 
                      resizeMode={'contain'}
                      style={{
                        width: width,
                        height: height,
                      }}
                      tintColor = {colorMode === 'light' ? "#442C2E" : "#fff"}
                      
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


