import { Button, Fab, Icon, IconButton, Pressable, Text, useColorModeValue, View, VStack } from "native-base"
import React, { useCallback, useEffect, useState } from "react"
import { AsyncStorage, StyleSheet, TouchableOpacity, Alert } from "react-native"
import AnimatedColorBox from "./animated-color-box"
import Masthead from "./masthead"
import BarNav from "./navbar"
import TaskList from "./task-list"
import { Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import TaskItem from "./todo"
import shortid from "shortid"
import LoadingIndicator from "./moti-loading"
import AppLoading from 'expo-app-loading'
import { storedData } from '../utils/stored-tasks'  

export const TaskLayout = () => {

  const checkStorage = () => {
    const test = AsyncStorage.getItem("Tasks")
    if(test !== null){
      return storedData
    }
    else return []
  }

  const [data, setData] = useState(checkStorage())
  const [editID, setEditID] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [task, setTask] = useState<any>([])
  

  const deleteAlert = () => {
    alert('Delete this Task? There is no going back after this :o')
  }

  const findTasks = async () => {
    const results = await AsyncStorage.getItem('Tasks')
    if(results !== null){
      setData(JSON.parse(results))
    }
  }

  useEffect(() => {
    findTasks()
    setLoading(false)
  }, [])
  
  const handleToggleTask = useCallback( async item => {
    let update = []
    setData(prevData => {
      const newData = [...prevData]
      const index = prevData.indexOf(item)
      newData[index] = {
        ...item,
        done: !item.done
      }
      update = newData
      return newData
    })
    await AsyncStorage.setItem("Tasks", JSON.stringify(update))
  }, [])

  const handleChangeContent = useCallback( async (item, newSubject) => {
    const result = await AsyncStorage.getItem("Tasks")
    let tasks = []
    setData(prevData => {
      const newData = [...prevData]
      const index = prevData.indexOf(item)
      newData[index] = {
        ...item,
        subject: newSubject
      }
      
      tasks = newData
      return newData
    })
    await AsyncStorage.setItem('Tasks', JSON.stringify(tasks))
  }, [])

  const handleFinishEdit = useCallback( async (_item) => {
    setEditID(null)
  }, [])

  const handlePressTaskItemLabel = useCallback(item => {
    setEditID(item.id)
  }, [])


  const handleDelete = useCallback(item => {
    Alert.alert('Delete this Task?', "There is no going back after this :o",
      [
        {
          text: 'delete',
          onPress: async () => {
            let postDelete = [] 
            setData(prevData => {
              const updateArr = prevData.filter(i => i !== item)
              postDelete = updateArr
              return updateArr
            })
            await AsyncStorage.setItem("Tasks", JSON.stringify(postDelete))
          } 
        },
        {
          text: 'Nope',
          onPress: () => console.log("no thanks"),
        },
      ],
      {
        cancelable: true,
      })
  }, [])

  
  return (
    <AnimatedColorBox
      width="full"
      bg={useColorModeValue("#FEDBD0", "blueGray.900")}
      flex={1}
    >
      <Masthead
        title="Got tasks to do?"
        image={require('../assets/icon2.png')}
      >
        <BarNav />
      </Masthead>
      {loading ? 
        <View width="full" height="full" alignItems={'center'} justifyContent="center"> 
          <LoadingIndicator size={150}/> 
        </View> 
      : (
      <VStack
        space={1}
        height={"full"}
        mt={30}
        bg={useColorModeValue('#FEEAE6', 'primary.900')}
        borderTopLeftRadius="30px"
        borderTopRightRadius="30px"
      >
        <TaskList
          data={data}
          onToggleItem={handleToggleTask}
          onChangeSubject={handleChangeContent}
          onFinishEditing={handleFinishEdit}
          onPressLabel={handlePressTaskItemLabel}
          onRemoveItem={handleDelete}
          editingItemId={editID}
        />
      </VStack>
      )}
      <Fab
        position="absolute"
        size="sm"
        renderInPortal={false}
        icon={<Icon color="white" as={<Feather name="plus" />} size="sm" />}
        bg={useColorModeValue('#442C2E', 'blue.400')}
        onPress={async () => {
          const id = shortid.generate()
          setData([
            {
              id,
              subject: "",
              done: false,
            },
            ...data
          ])
          setEditID(id)
        }}
        
      />
      
    </AnimatedColorBox>
  )
}


export default TaskLayout

