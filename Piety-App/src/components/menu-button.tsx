import React from "react";
import { Button, Icon, useColorModeValue, IButtonProps, useColorMode } from 'native-base'
import { Feather } from "@expo/vector-icons"

interface Props extends IButtonProps {
  active: boolean 
  icon: string
  children: React.ReactNode
}

const MenuButton = ({ active, icon, children, ...props}: Props) => {
  const inactiveTextColor = useColorModeValue("primary.400", "white")
  const pressedBgColor = useColorModeValue("rgba(17,47,75,0.2)", "rgba(70, 63, 96, 0.4)")
  const activeColor = useColorModeValue("rgba(255,255,255,0.6)", "blue.700")
  const inactiveColor = useColorModeValue("rgba(0,0,0,0.6)", "rgba(255,255,255,0.5)")
  const activeBorder = useColorModeValue("primary.400", "orange")
  const inactiveBorder = useColorModeValue("primary.300", "white")

  return(
    <Button 
      size="lg" 
      _pressed={{
        bg: pressedBgColor,
        borderColor: "rgba(0,0,0,0.3)"
      }}
      _text={{
        color: active ? 'primary.400' : inactiveTextColor,
        fontWeight: active ? 'bold' : '400'
      }}
      variant="ghost"
      justifyContent="flex-start"
      borderLeftWidth={5}
      borderRadius={0}
      borderColor={active ? activeBorder : inactiveBorder}
      leftIcon={<Icon as={Feather} name={icon} size="sm" opacity={1} />}
      {...props}
    >
      {children}
    </Button>
  )
}

export default MenuButton

