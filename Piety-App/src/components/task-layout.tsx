import { Text, View } from "native-base"
import React from "react"
import { StyleSheet } from "react-native"
import TaskList from "./task-list"



export const TaskLayout = () => {
  
  return(
     

    <View style={styles.container}>
          <View style={styles.box1}>
            <View style={styles.inner}>
              <TaskList />
              <Text>Tasks</Text>
            </View>
          </View>
        </View>

  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 10,
    top: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box1: {
      width: "100%",
      height: "50%",
      padding: 5,
    },
    inner: {
      flex: 1,
    }, 

})



export default TaskLayout
