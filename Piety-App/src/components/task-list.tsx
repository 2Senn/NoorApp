import { Text, FlatList } from 'native-base'
import React, { useState } from 'react'
import { StyleSheet, View, Pressable} from 'react-native'
import AnimatedCheckbox from 'react-native-checkbox-reanimated'
import { toDoData } from '../db/todo-data'
import Todo from './todo'

export default function TaskList() {
  
  return(
    <FlatList 
      data={toDoData}
      keyExtractor={item => item.id}
      renderItem={({item}) =>{
        return(
          <View style={styles.container} >
            <Todo {...item}/>
          </View>
          
        )
      }}
    />
  )
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  checkbox: {
    width: 64,
    height: 64
  }
})
