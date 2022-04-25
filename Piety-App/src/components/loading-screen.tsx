import React from "react"
import { Text, View, Image, useColorModeValue } from "native-base"
import { MotiView } from "@motify/components"

const LoadingIndicator = ({size}: { size: number}) => {
  return( 
    <MotiView
      from={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: 0,
        shadowOpacity: 0.5,
      }}
      animate={{
        width: size + 25,
        height: size + 25,
        borderRadius: (size + 25) / 2,
        borderWidth: size / 10,
        shadowOpacity: 1,
      }}
      transition={{
        type: 'timing',
        duration: 1000,
        loop: true,
      }}
      style={{
        width: size, 
        height: size, 
        borderRadius: size / 2, 
        borderWidth: size / 10, 
        borderColor: '#fff',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 10
      }}
    />
  )
}

const LoadingView = () => {

  const bg = useColorModeValue("white", "black")

  return(
    <View
      bg={bg}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LoadingIndicator size={110} />
    </View>
  )
}

export default LoadingView
