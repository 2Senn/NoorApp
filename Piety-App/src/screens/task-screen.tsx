import React, { useCallback, useState } from 'react'
import { StyleSheet, View } from 'react-native'


export default function TaskScreen(){
  const [checked, setChecked] = useState<boolean>(false)


}                                               
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkbox: {
    width: 64,
    height: 64
  }
})


