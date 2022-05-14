import React from "react"
import { View, Text, Image, useColorModeValue} from 'native-base'
import { StyleSheet } from "react-native"
import { height } from "../screens/hadith"

export const BottomSheet = () => {

  const bg = useColorModeValue("primary.100", "rgba(0,0,0,0.9)")

  return(
    <View bg={bg} style={styles.container}>
      <View style={styles.divider}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: '100%',
    position: 'absolute',
    top: height / 2,
    borderRadius: 30,
  },
  divider: {
    width: 75,
    height: 4,
    backgroundColor: '#e9f1fd',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 5
  }
})

export default BottomSheet
