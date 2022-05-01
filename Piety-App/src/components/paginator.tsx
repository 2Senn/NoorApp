import React from "react"
import { View, Text, StyleSheet, Animated, useWindowDimensions } from 'react-native'
import { width } from "../screens/hadith"



export const Paginator = ({ data, scrollX }: any) => {
    return(
      <View style = {{flexDirection: "row", height: 64, alignItems: 'center', justifyContent: 'center'}}>
        {data.map((_: any, i: any)=>{
          const inputRange = [(i - 1) * width, i * width, (i+1) * width]
          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10, 20, 10],
            extrapolate: 'clamp'
        })
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp'
        })
          return <Animated.View style={[styles.dot, { width: dotWidth, opacity }]} key={i.toString()} />
      })}
      </View>
    )
}

const styles = StyleSheet.create({
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: '#442C2E',
        marginHorizontal: 8,
    },
})

export default Paginator 
