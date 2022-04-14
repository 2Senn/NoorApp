import { HStack, Text } from "native-base"
import React from "react" 
import { ListView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

interface DetailScreenProps {
  navigation: any
}

const DetailScreen = (props: DetailScreenProps) => {
    return (
    <SafeAreaView>
      <Text>DetailScreen</Text>
    

    </SafeAreaView>
  )
}

export default DetailScreen
