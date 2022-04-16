import React, { useCallback } from "react";
import { IconButton, Text, useColorModeValue } from "native-base";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { getFocusedRouteNameFromRoute } from "@react-navigation/core" 
import QuranScreen from "./quran-screen";
import { TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons"
import { DrawerContentComponentProps } from "@react-navigation/drawer";

interface MushafScreenProps{
  navigation: any
} 

const MushafScreen = (props: MushafScreenProps) => {

  const handleBackbutton = useCallback(() => {
    props.navigation.navigate("Quran")
  }, [props.navigation])
     

  return(
    <TouchableOpacity>
      <View>
        <IconButton
          onPress={handleBackbutton}
          alignSelf="flex-start"
          borderRadius={100}
          variant="outline"
          borderColor={useColorModeValue("#442C2E", "blue.700")}
          _icon={{
            as: Feather,
            name: 'chevron-left',
            size: 4,
            color: useColorModeValue('#442C2E', 'darkBlue.700')
            }}
        />
      </View>
    </TouchableOpacity>
  )
}

export default MushafScreen

