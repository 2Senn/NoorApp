import React from "react"
import { StyleSheet, Text, View} from 'react-native'

interface Props{
  id: any,
  subject: string,
  done: boolean,
  isToday: boolean,
  hour: number
}

export default function Todo(props: Props){

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.subject}</Text>
      <Text style={styles.time}>{props.hour}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: '#737373'
  },
  time: {
    fontSize: 13,
    color: '#000',
    fontWeight: '500'
  }

})
