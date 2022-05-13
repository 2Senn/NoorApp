import { useNavigation } from "@react-navigation/native"
import { Button, Icon, IconButton, Text, useColorModeValue, VStack, View, Heading } from "native-base"
import React, { useCallback, useRef } from "react"
import { StyleSheet, ImageBackground, FlatList, Dimensions } from 'react-native'
import Cards from "./card-component"
import Panel from "./navigation-panel"
import PrayTimes from "./prayers"
import { Feather } from "@expo/vector-icons"
import Carousel from "react-native-snap-carousel"
import Paginator from "./paginator"
import { BlurView } from "expo-blur"
import BarNav from "./navbar"
import { height } from "../screens/hadith"

export const MainLayout = () => {
  
  const navigation = useNavigation<any>()

  const ibg = useColorModeValue("black", "white")

  const tc = useColorModeValue("black", "white")

    return(
      <VStack style={styles.container} space={3} > 
              </VStack>

    )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      padding: 10,
      top: 10,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    header: {
      width: '100%',
      height: '10%',
    },
    box1: {
      width: '100%',
      height: '20%',
      padding: 5,
    },
    box2: {
      width: '100%',
      height: '40%',
      padding: 5,
    },
    box3: {
      width: "100%",
      height: "5%",
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
      fontSize: 19,
      fontWeight: "700"
    },
})

export default MainLayout
