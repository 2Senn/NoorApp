import { Text, useColorModeValue } from 'native-base'
import React, { useCallback, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AnimatedColorBox from '../components/animated-color-box'
import TaskLayout from '../components/task-layout'
import AnimatedTask from '../components/task-list'


export default function TaskScreen(){
  const [checked, setChecked] = useState<boolean>(false)

  return(
    <AnimatedColorBox 
      width="full"
      flex={1}
      bg={useColorModeValue("FEEAE6", "blueGRay.900")}
    >
      <SafeAreaView>
        <TaskLayout />
      </SafeAreaView>
    </AnimatedColorBox>
  )
}                                               

