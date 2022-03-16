import React from 'react'
import { Text, HStack, Switch, useColorMode} from 'native-base'

export default function ToggleTheme(){
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack space={2} alignItems="center">
      <Text>Night</Text>
      <Switch 
        isChecked={colorMode==='light'} 
        onToggle={toggleColorMode}
        onTrackColor={"#442C2E"}
        offTrackColor={"blue.800"}
        onThumbColor={"black"}
        offThumbColor={"black"}
      >
      </Switch>
      <Text>Day</Text>

  </HStack>
  )
}
