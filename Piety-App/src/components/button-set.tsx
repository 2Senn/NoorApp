import React from "react"
import { LinearGradient } from "expo-linear-gradient"
import { HStack, Icon, IconButton, Text, useColorModeValue, View, VStack } from "native-base"
import { useCallback, useState } from "react"
import { StyleSheet } from "react-native"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import { neo } from "./navbar"
import { Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { alignSelf } from "styled-system"

export const ButtonSet = ({ navigation }: any) => {

  navigation = useNavigation()
  const shadows = useColorModeValue('#b0aca3', "#121211")
  const shadows2 = useColorModeValue("#ffffff", "#000")

  
  const [isPressedIn, setIsPressedIn] = useState(false)
  const handlePressIn = useCallback(() => {
    setIsPressedIn(!isPressedIn)
  }, [isPressedIn])

  const handleButton = (ref: number) => {
    switch(ref){
      case 1:
        navigation.navigate("Quran")
        break
       case 2:
        navigation.navigate("Hadith")
        break
       case 3:
        navigation.navigate("Tasks")
        break
       case 4:
        navigation.navigate("About")
        break
    }
  }

 const handlePressOut = useCallback((ref) => {
    setIsPressedIn(false)
    handleButton(ref)
  }, [isPressedIn])
    
  /* IOS ONLY
  const _lightArray = isPressedIn ? ["#faf5e8",  "#d3cec3"] : ["#d3cec3", "#faf5e8"]
  const _darkarray = isPressedIn ? ['#121211', '#2c2c2b'] : ['#2c2c2b', '#121211']  

  const gradient = useColorModeValue(_lightArray, _darkarray)
  <TouchableWithoutFeedback
          onPressIn={handlePressIn}
          onPressOut={() => handlePressOut(1)}
          containerStyle={{
          flex: 1,
          }}
        >
          <View style={[styles.buttonOuter, {shadowColor: shadows}]}>
            <View style={[styles.buttonInner, {shadowColor: shadows2} ] }>
              <LinearGradient   
                  colors={gradient}
                  start={[0.6,0.5]}
                  end={[0.1,0.48]}
                  style={[styles.face, {borderRadius: 25}]}
                  >
                <Icon 
                  borderRadius={100} 
                  as={Feather}
                  name= 'book'
                  size= {6}
                  color={useColorModeValue('primary.75', '#F79548')}
                  />
              </LinearGradient>
            </View>
          </View>
          </TouchableWithoutFeedback>
        <View flex={1} alignItems="center" justifyContent="center" w={100} h={50}>
          <Text style={styles.text}>Quran</Text>
        </View>
      </VStack>
      <VStack h={75} >
        <TouchableWithoutFeedback
          onPressIn={handlePressIn}
          onPressOut={() => handlePressOut(2)}
          containerStyle={{
          flex: 1,
          }}
        >
          <View style={[styles.buttonOuter, {shadowColor: shadows}]}>
            <View style={[styles.buttonInner, {shadowColor: shadows2} ] }>
              <LinearGradient   
                  colors={gradient}
                  start={[0.6,0.5]}
                  end={[0.1,0.48]}
                  style={[styles.face, {borderRadius: 25}]}
                  >
                <Icon 
                  borderRadius={100} 
                  as={Feather}
                  name= 'check-circle'
                  size= {6}
                  color={useColorModeValue('primary.75', '#F79548')}
                  />
              </LinearGradient>
            </View>
          </View>
          </TouchableWithoutFeedback>
        <View flex={1} alignItems="center" justifyContent="center" w={100} h={50}>
          <Text style={styles.text}>Hadith</Text>
        </View>
      </VStack>
      <VStack h={75} >
        <TouchableWithoutFeedback
          onPressIn={handlePressIn}
          onPressOut={() => handlePressOut(3)}
          containerStyle={{
          flex: 1,
          }}
        >
          <View style={[styles.buttonOuter, {shadowColor: shadows}]}>
            <View style={[styles.buttonInner, {shadowColor: shadows2} ] }>
              <LinearGradient   
                  colors={gradient}
                  start={[0.6,0.5]}
                  end={[0.1,0.48]}
                  style={[styles.face, {borderRadius: 25}]}
                  >
                <Icon 
                  borderRadius={100} 
                  as={Feather}
                  name= 'clipboard'
                  size= {6}
                  color={useColorModeValue('primary.75', '#F79548')}
                  />
              </LinearGradient>
            </View>
          </View>
          </TouchableWithoutFeedback>
        <View flex={1} alignItems="center" justifyContent="center" w={100} h={50}>
          <Text style={styles.text}>Tasks</Text>
        </View>
      </VStack>
      <VStack h={75} >
        <TouchableWithoutFeedback
          onPressIn={handlePressIn}
          onPressOut={() => handlePressOut(4)}
          containerStyle={{
          flex: 1,
          }}
        >
          <View style={[styles.buttonOuter, {shadowColor: shadows}]}>
            <View style={[styles.buttonInner, {shadowColor: shadows2} ] }>
              <LinearGradient   
                  colors={gradient}
                  start={[0.6,0.5]}
                  end={[0.1,0.48]}
                  style={[styles.face, {borderRadius: 25}]}
                  >
                <Icon 
                  borderRadius={100} 
                  as={Feather}
                  name= 'help-circle'
                  size= {6}
                  color={useColorModeValue('primary.75', '#F79548')}
                  />
              </LinearGradient>
            </View>
          </View>
          </TouchableWithoutFeedback>
        <View flex={1} alignItems="center" justifyContent="center" w={100} h={50}>
          <Text style={styles.text}>About</Text>
        </View>
    */

  return(
    <HStack  space="5" flex={1}>
      <VStack h={75} >
        <View flex={1}>
        <IconButton 
          onPress={() => handleButton(1)}
          width={50}
          height={50}
          borderWidth={2}
          borderRadius="50"
          justifyContent="center"
          _icon={{
            as: Feather,
            name: 'book',
            size: 6,
            alignSelf: "center",
          }}
          />
          <Text style={styles.text}>Quran</Text>
          </View>
      </VStack>
      <VStack h={75} >
        <View flex={1}>
        <IconButton 
          onPress={() => handleButton(2)}
          width={50}
          height={50}
          borderWidth={2}
          borderRadius="50"
          justifyContent="center"
          _icon={{
            as: Feather,
            name: 'check-circle',
            size: 6,
            alignSelf: "center",
          }}
          />
          <Text style={styles.text}>Hadith</Text>
          </View>
      </VStack>
      <VStack h={75} >
        <View flex={1}>
        <IconButton 
          onPress={() => handleButton(3)}
          width={50}
          height={50}
          borderWidth={2}
          borderRadius="50"
          justifyContent="center"
          _icon={{
            as: Feather,
            name: 'clipboard',
            size: 6,
            alignSelf: "center",
          }}
          />
          <Text style={styles.text}>Tasks</Text>
          </View>
      </VStack>
      <VStack h={75} >
        <View flex={1}>
        <IconButton 
          onPress={() => handleButton(4)}
          width={50}
          height={50}
          borderWidth={2}
          borderRadius="50"
          justifyContent="center"
          _icon={{
            as: Feather,
            name: 'help-circle',
            size: 6,
            alignSelf: "center",
          }}
          />
          <Text style={styles.text}>About</Text>
          </View>
      </VStack>

    </HStack>
  )
}

const styles = StyleSheet.create({
  text: {
    alignSelf: "center"
  },
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

export default ButtonSet
