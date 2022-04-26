import React, { useCallback, useState } from "react"
import { IconButton, useColorModeValue, View, HStack, Image, FlatList, Box } from "native-base"
import { TouchableOpacity, Dimensions, StatusBar} from "react-native"
import { Feather } from "@expo/vector-icons"
import AnimatedColorBox from "../components/animated-color-box"
import Mushaf from "../components/mushaf"

interface MushafScreenProps{
  navigation: any
} 

const PADDING = 10

const MushafScreen = (props: MushafScreenProps) => {

  const handleBackbutton = useCallback(() => {
    props.navigation.navigate("Quran")
  }, [props.navigation])

  
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

}

export default MushafScreen


