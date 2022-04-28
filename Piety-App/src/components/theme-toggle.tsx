import React from 'react'
import { Text, HStack, Switch, useColorMode, Image, Icon} from 'native-base'
import { Feather } from '@expo/vector-icons'

export default function ToggleTheme(){
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack space={2} alignItems="center">
      <Icon as={ Feather } name="moon" strokeWidth={3.5} size={"md"} />
      <Switch 
        isChecked={colorMode==='light'} 
        onToggle={toggleColorMode}
        onTrackColor={"#442C2E"}
        offTrackColor={"blue.800"}
        onThumbColor={"black"}
        offThumbColor={"black"}
      >
      </Switch>
      <Icon as={ Feather } name="sun" strokeWidth={3.5} size={"md"} color={'#AF8D7A'} />

  </HStack>
  )
}

