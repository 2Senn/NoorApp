import React, { useCallback, useState } from 'react'
import { Text, StyleSheet, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { View } from 'native-base'



export const NeoButton = (props: any) => {

  const [isPressedIn, setIsPressedIn] = useState(false)
  const handlePressIn = useCallback(() => {
    setIsPressedIn(!isPressedIn)
  }, [isPressedIn])

 const handlePressOut = useCallback(() => {
    setIsPressedIn(false)
  }, [isPressedIn])

const _lightArray = isPressedIn ? ["#f1b5a3", "#cb9889"] : ["#cb9889", "#f1b5a3"]

 return(

    <TouchableWithoutFeedback 
      onPressIn={handlePressIn}
      onPressOut={props.nav}
      containerStyle={{flex: 1}}
    >
      <View style={[neostyles.buttonOuter, {shadowColor: props.shadowColor}]} backgroundColor={props.backgroundColor} h={props.h} w={props.w} >
        <View style={[neostyles.buttonInner, {shadowColor: props.shadowColor2}]} backgroundColor={props.backgroundColor} h={props.h} w={props.w}>
          <LinearGradient 
            colors={_lightArray}
            start={[0,1]}
            end={[1,0]}
            style={[neostyles.face, {borderRadius: props.br}]}
          >
          </LinearGradient>
          {props.children}
        </View>
      </View>
    </TouchableWithoutFeedback>
 )
}

const {width, height} = Dimensions.get('screen')

export const neostyles= StyleSheet.create({
  buttonOuter: {
    borderRadius: Math.round((width + height) / 2),
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowRadius: 16,
    elevation: 8,
    shadowOpacity: 1,
  },
  buttonInner: {
    borderRadius: Math.round((width + height) / 2),
    shadowOffset: {
      width: -8,
      height: -8,
    },
    shadowRadius: 16,
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

export default NeoButton
