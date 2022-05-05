import { Button, Fab, Icon, IconButton, Pressable, Text, useColorModeValue, View, VStack } from "native-base"
import React, { useCallback, useEffect, useState } from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import AnimatedColorBox from "./animated-color-box"
import Masthead from "./masthead"
import BarNav from "./navbar"
import TaskList from "./task-list"
import { toDoData } from "../db/todo-data"
import { Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import TaskItem from "./todo"
import shortid from "shortid"

export const TaskLayout = () => {

  const [data, setData] = useState(toDoData)
  const [editID, setEditID] = useState<string | null>(null)

  const handleToggleTaskItem = useCallback(item => {
    setData(prevData => {
      const newData = [...prevData]
      const index = prevData.indexOf(item)
      newData[index] = {
        ...item,
        done: !item.done
      }
      return newData
    })
  }, [])
  const handleChangeTaskItemSubject = useCallback((item, newSubject) => {
    setData(prevData => {
      const newData = [...prevData]
      const index = prevData.indexOf(item)
      newData[index] = {
        ...item,
        subject: newSubject
      }
      return newData
    })
  }, [])
  const handleFinishEditingTaskItem = useCallback(_item => {
    setEditID(null)
  }, [])
  const handlePressTaskItemLabel = useCallback(item => {
    setEditID(item.id)
  }, [])
  const handleRemoveItem = useCallback(item => {
    setData(prevData => {
      const newData = prevData.filter(i => i !== item)
      return newData
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
          onToggleItem={handleToggleTaskItem}
          onChangeSubject={handleChangeTaskItemSubject}
          onFinishEditing={handleFinishEditingTaskItem}
          onPressLabel={handlePressTaskItemLabel}
          onRemoveItem={handleRemoveItem}
          editingItemId={editID}
        />
      </VStack>
      <Fab
        position="absolute"
        renderInPortal={false}
        size="sm"
        icon={<Icon color="white" as={<Feather name="plus" />} size="sm" />}
        colorScheme={useColorModeValue('blue', 'darkBlue')}
        bg={useColorModeValue('blue.500', 'blue.400')}
        onPress={() => {
          const id = shortid.generate().toString()
          setData([
            {
              id,
              subject: '',
              done: false
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

