import { HStack, IconButton, Text, useColorModeValue } from "native-base"
import React, { useCallback } from "react" 
import { ListView, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Feather } from '@expo/vector-icons'
import ToggleTheme from "../components/toggle-theme"
import AnimatedColorBox from "../components/animate-theme-shift"

interface DetailScreenProps {
  navigation: any
}

const DetailScreen = (props: DetailScreenProps) => {

  const SPACING = 20

  const handleBackbutton = useCallback(() => {
    props.navigation.navigate('Quran')
  }, [])
  return (

    <AnimatedColorBox safeArea flex={1} bg={useColorModeValue('#FEDBD0', 'darkBlue.800')}>
      <View>
        <View style={{flexDirection: "row", padding: SPACING}} >
          <IconButton
            onPress={handleBackbutton}
            alignSelf="flex-start"
            borderRadius={100}
            variant="outline"
            borderColor={useColorModeValue("#442C2E", "blue.700")}
            _icon={{
              as: Feather,
              name: 'chevron-left',
              size: 6,
              color: useColorModeValue('#442C2E', 'darkBlue.700')
              }}
            />
          <View style={{alignSelf: "flex-end", paddingLeft: 200  }}>
            <ToggleTheme />
          </View>
        </View>
      </View>
    </AnimatedColorBox>

  )
}

export default DetailScreen
