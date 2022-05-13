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

export const MainLayout = () => {
  
  const navigation = useNavigation<any>()

  const ibg = useColorModeValue("black", "white")

  const tc = useColorModeValue("black", "white")

    return(
      <VStack style={styles.container} space={3} > 
              <BarNav />
        <View style={styles.box1}>
          <View style={styles.inner}>
            <PrayTimes /> 
          </View>
        </View>
        <View style={styles.minibox}>
            <BlurView style={styles.miniInner} tint={'light'} intensity={20}>
              <Button
                width={"full"}
                height={"full"}
                size="sm" 
                borderLeftWidth={3}
                onPress={() => navigation.navigate("Quran")}
                _pressed={{
                  backgroundColor: "rgba(0,0,0,0.2)"
                }}
                _text={{
                  color: "black"
                }}
                variant="ghost"
                leftIcon={<Icon as={Feather} name={"book"} size="sm" opacity={0.7} color={ibg} />}
              >
              <Text style={[styles.text, {color: tc}]}>Quran</Text>
              </Button>
            </BlurView>
        </View>
        <View style={styles.minibox}>
          <BlurView style={styles.miniInner} tint={"light"} intensity={20}>
            <Button
                width={"full"}
                height={"full"}
                size="sm" 
                borderLeftWidth={3}
                onPress={() => navigation.navigate("Hadith")}
                _pressed={{
                  bg: "rgba(0,0,0,0.2)"
                }}
                _text={{
                  color: "black"
                }}
                variant="ghost"
                leftIcon={<Icon as={Feather} name={"check-circle"} size="sm" opacity={0.7} color={ibg} />}
              >
              <Text style={[styles.text, {color: tc}]}>Hadith Check</Text>
            </Button>
          </BlurView>
        </View>
        <View style={styles.minibox}>  
          <BlurView style={styles.miniInner} intensity={20} tint={'light'}>
            <Button
                width={"full"}
                height={"full"}
                size="sm" 
                borderLeftWidth={3}
                onPress={() => navigation.navigate("Tasks")}
                _pressed={{
                  bg: "rgba(0,0,0,0.2)"
                }}
                _text={{
                  color: "black"
                }}
                variant="ghost"
                leftIcon={<Icon as={Feather} name={"clipboard"} size="sm" opacity={0.7} color={ibg} />}
              >
              <Text style={[styles.text, {color: tc}]}>To Do List</Text>
              </Button>
          </BlurView>
        </View>
        <View style={styles.minibox}>
          <BlurView style={styles.miniInner} tint={"light"} intensity={20}>
            <Button
                width={"full"}
                height={"full"}
                size="sm" 
                borderLeftWidth={3}
                onPress={() => navigation.navigate("About")}
                _pressed={{
                  bg: "rgba(0,0,0,0.2)"
                }}
                _text={{
                  color: "black"
                }}
                variant="ghost"
                leftIcon={<Icon as={Feather} name={"book"} size="sm" opacity={1} color={ibg} />}
              >
              <Text style={[styles.text, {color: tc}]}>About</Text>
              </Button>
          </BlurView>
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
      height: '15%',
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
