import { Text, useColorModeValue } from 'native-base'
import React, { useCallback, useState } from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AnimatedColorBox from '../components/animated-color-box'
import TaskLayout from '../components/task-layout'

export default function TaskScreen(){
  const [checked, setChecked] = useState<boolean>(false)

  const bg = useColorModeValue("#442C2E", "darkBlue.800")
  return(
        <TaskLayout />
  )
}                                               

