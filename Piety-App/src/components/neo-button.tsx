import React, { useCallback, useState } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { alignItems, minHeight } from 'styled-system'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'



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
      <View style={neostyles.buttonOuter} >
        <View style={neostyles.buttonInner}>
          <LinearGradient 
            colors={_lightArray}
            start={[0,1]}
            end={[1,0]}
            style={neostyles.face}
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
    backgroundColor: '#e1a998',
    borderRadius: Math.round((width + height) / 2),
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowRadius: 16,
    elevation: 8,
    shadowOpacity: 1,
    shadowColor: '#ad8275',
    height: 50,
    width: 50,
  },
  buttonInner: {
    backgroundColor: '#e1a998',
    borderRadius: Math.round((width + height) / 2),
    shadowOffset: {
      width: -8,
      height: -8,
    },
    shadowRadius: 16,
    elevation: 8,
    shadowOpacity: 1,
    shadowColor: '#ffd0bb',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  face: {
    padding: 12,
    borderRadius: Math.round((width + height) / 2),
    position: 'absolute',
    
  }

})

export default NeoButton
