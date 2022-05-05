import React from "react";
import { Button, Icon, useColorModeValue, IButtonProps, useColorMode } from 'native-base'
import { Feather } from "@expo/vector-icons"

interface Props extends IButtonProps {
  active: boolean 
  icon: string
  children: React.ReactNode
}

const MenuButton = ({ active, icon, children, ...props}: Props) => {
  const colorScheme = useColorModeValue("#FEDBD0", "darkBlue")
  const inactiveTextColor = useColorModeValue("#FEEAE6", "white")
  const pressedBgColor = useColorModeValue("#442C2E", "blueGray.700")
  const activeColor = useColorModeValue("rgba(255,255,255,0.6)", "blue.700")
  const inactiveColor = useColorModeValue("rgba(0,0,0,0.6)", "rgba(255,255,255,0.5)")
  const activeBorder = useColorModeValue("#000", "orange")
  const inactiveBorder = useColorModeValue("#FEDBD0", "white")

  return(
    <Button 
      size="lg" 
      colorScheme={colorScheme} 
      bg={active ? activeColor : "black"}
      _pressed={{
        bg: pressedBgColor
      }}
      _text={{
        color: active ? 'black' : inactiveTextColor
      }}
      variant="solid"
      justifyContent="flex-start"
      borderLeftWidth={5}
      borderColor={active ? activeBorder : inactiveBorder}
      leftIcon={<Icon as={Feather} name={icon} size="sm" opacity={1} />}
      {...props}
    >
      {children}
    </Button>
  )
}

export default MenuButton

