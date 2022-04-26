import React from 'react'
import { Text, HStack, Switch, useColorMode, Image} from 'native-base'

export default function ToggleTheme(){
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack space={2} alignItems="center">
      <Image resizeMode={'contain'} width={25} height={25}  source={require("../assets/moon.png")} />
      <Switch 
        isChecked={colorMode==='light'} 
        onToggle={toggleColorMode}
        onTrackColor={"#442C2E"}
        offTrackColor={"blue.800"}
        onThumbColor={"black"}
        offThumbColor={"black"}
      >
      </Switch>
      <Image resizeMode={"contain"} width={25} height={25} source={require("../assets/sun.png")}/>

  </HStack>
  )
}

