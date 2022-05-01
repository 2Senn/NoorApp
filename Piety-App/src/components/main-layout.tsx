import { useNavigation } from "@react-navigation/native"
import { Button, Icon, IconButton, useColorModeValue } from "native-base"
import React, { useCallback, useRef } from "react"
import { View, Text, StyleSheet, ImageBackground, FlatList, Dimensions } from 'react-native'
import Cards from "./card-component"
import Panel from "./navigation-panel"
import PrayTimes from "./prayers"
import { Feather } from "@expo/vector-icons"
import Carousel from "react-native-snap-carousel"
import Paginator from "./paginator"

export const MainLayout = () => {
  
  const navigation = useNavigation<any>()

  const btnBg = useColorModeValue("rgba(206, 173, 145, 0.7)", "darkBlue.700")
  const ibg = useColorModeValue("black", "white")

  const carouselRef = useRef(null)
  const {width, height} = Dimensions.get('screen')

    return(
      <View style={styles.container}> 
        <View style={styles.box1}>
          <View style={styles.inner}>
            <PrayTimes /> 
          </View>
        </View>
        <View style={styles.minibox}>
            <View style={styles.miniInner}>
              <Button
                borderRadius={75}
                width={"full"}
                height={"full"}
                size="sm" 
                bg={btnBg}
                shadow={"7"}
                onPress={() => navigation.navigate("Quran")}
                _pressed={{
                  bg: "grey"
                }}
                _text={{
                  color: "black"
                }}
                variant="ghost"
                leftIcon={<Icon as={Feather} name={"book"} size="sm" opacity={0.7} color={ibg} />}
              >
              <Text style={styles.text}>Quran</Text>
              </Button>
            </View>
        </View>
        <View style={styles.minibox}>
          <View style={styles.miniInner}>
            <Button
                borderRadius={75}
                width={"full"}
                height={"full"}
                size="sm" 
                bg={btnBg}
                shadow={"7"}
                onPress={() => navigation.navigate("Hadith")}
                _pressed={{
                  bg: "grey"
                }}
                _text={{
                  color: "black"
                }}
                variant="ghost"
                leftIcon={<Icon as={Feather} name={"check-circle"} size="sm" opacity={0.7} color={ibg} />}
              >
              <Text style={styles.text}>Hadith Check</Text>
            </Button>
          </View>
        </View>
        <View style={styles.minibox}>  
          <View style={styles.miniInner}>
            <Button
                borderRadius={75}
                width={"full"}
                height={"full"}
                size="sm" 
                bg={btnBg}
                shadow={"7"}
                onPress={() => navigation.navigate("Tasks")}
                _pressed={{
                  bg: "grey"
                }}
                _text={{
                  color: "black"
                }}
                variant="ghost"
                leftIcon={<Icon as={Feather} name={"clipboard"} size="sm" opacity={0.7} color={ibg} />}
              >
              <Text style={styles.text}>To Do List</Text>
              </Button>
        </View>
        </View>
        <View style={styles.minibox}>
          <View style={styles.miniInner}>
            <Button
                borderRadius={75}
                width={"full"}
                height={"full"}
                size="sm" 
                bg={btnBg}
                shadow={"7"}
                onPress={() => navigation.navigate("About")}
                _pressed={{
                  bg: "grey"
                }}
                _text={{
                  color: "black"
                }}
                variant="ghost"
                leftIcon={<Icon as={Feather} name={"book"} size="sm" opacity={0.7} color={ibg} />}
              >
              <Text style={styles.text}>About</Text>
              </Button>
        </View>
        </View>
        <View style={styles.box2}>
          <View style={styles.inner}>
            <Cards />  
          </View>
        </View>
        <View style={styles.box3}>
          <View style={styles.inner}>
            <Paginator />
          </View>
        </View>
      </View>

    )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '85%',
      padding: 15,
      top: 10,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    box1: {
      width: '100%',
      height: '20%',
      padding: 5,
    },
    box2: {
      width: '100%',
      height: '38%',
      padding: 5,
    },
    box3: {
      width: "100%",
      height: "7%",
      padding: 5,
    },
    inner: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }, 
    minibox: {
      width: '50%',
      height: '15%',
      padding: 10,
    },
    miniInner: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: "black",
      fontSize: 18,
      fontWeight: "600"
    },
})

export default MainLayout
