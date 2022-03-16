import React from "react";
import { Button, Icon, useColorModeValue, IButtonProps } from 'native-base'
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

  return(
    <Button 
      size="lg" 
      colorScheme={colorScheme} 
      bg={active ? "#442C2E" : "black"}
      _pressed={{
        bg: pressedBgColor
      }}
      _text={{
        color: active ? '#FEDBD0' : inactiveTextColor
      }}
      variant="solid"
      justifyContent="flex-start"
      leftIcon={<Icon as={Feather} name={icon} size="sm" opacity={0.5} />}
      {...props}
    >
      {children}
    </Button>
  )
}

export default MenuButton
