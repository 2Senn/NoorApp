import React, { useCallback } from "react"
import { View, Text, VStack, Image, FlatList, useColorModeValue, IconButton} from 'native-base'
import AnimatedColorBox from "../components/animate-theme-shift"
import { Feather } from "@expo/vector-icons"

interface screenProps{
  navigation: any,
  route: any,
}


export default function HadithDetail(props: screenProps){


  const bg = useColorModeValue("#FEDBD0", "blueGray.700")
  const handleback = useCallback(() => {
    props.navigation.navigate("Hadith")
  }, [props.navigation])  


  return(
    <AnimatedColorBox flex={1} width="full" bg={bg}>
      <View>
        <View flex={1} flexDir="row">
          <IconButton 
            as={Feather}
            name="chevron-left"
            onPress={handleback}
            />
        </View>
        <Text>GAAAAAA</Text>
      </View> 
    </AnimatedColorBox>
  )
}

