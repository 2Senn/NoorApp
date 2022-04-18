import React, { useCallback } from "react"
import { IconButton, Text, useColorModeValue, View, VStack, HStack } from "native-base"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { getFocusedRouteNameFromRoute } from "@react-navigation/core" 
import QuranScreen from "./quran-screen"
import { TouchableOpacity} from "react-native"
import { Feather } from "@expo/vector-icons"
import { DrawerContentComponentProps } from "@react-navigation/drawer"
import ToggleTheme from "../components/toggle-theme"
import AnimatedColorBox from "../components/animate-theme-shift"


interface MushafScreenProps{
  navigation: any
} 

const PADDING = 10

const MushafScreen = (props: MushafScreenProps) => {

  const handleBackbutton = useCallback(() => {
    props.navigation.navigate("Quran")
  }, [props.navigation])
     

  return(
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue("#FEEAE6", "blueGray.800")}
      width="full"
    >
        <View flex={1} flexDirection={"row"} pt={PADDING}>
          <IconButton
            width="10"
            onPress={handleBackbutton}
            alignSelf="flex-start"
            borderRadius={150}
            variant="outline"
            borderColor={useColorModeValue("#442C2E", "blue.700")}
            _icon={{
              as: Feather,
              name: 'chevron-left',
              size: 4,
              color: useColorModeValue('#442C2E', 'darkBlue.700')
              }}
          />
          <View flex={1} justifyContent="center" alignContent="center" padding={PADDING}>
            <ToggleTheme />
          </View>
        </View>
    </AnimatedColorBox>
  )
}

export default MushafScreen

