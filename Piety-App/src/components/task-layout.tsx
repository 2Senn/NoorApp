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


  const handleToggleTask = useCallback(item => {
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

  const handleChangeContent = useCallback((item, newSubject) => {
    setData(prevData => {
      const changed = [...prevData]
      const index = prevData.indexOf(item)
      changed[index] = {...item, subject: newSubject}
      return changed
    })
  }, [])

  const handleFinishEdit = useCallback(_item => {
    setEditID(null)
  }, [])

  const handlePressTaskItemLabel = useCallback(item => {
    setEditID(item.id)
  }, [])

  const handleDelete = useCallback(item => {
    setData(prevData => {
      const updateArr = prevData.filter(i => i !== item)
      return updateArr
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
          onToggleItem={handleToggleTask}
          onChangeSubject={handleChangeContent}
          onFinishEditing={handleFinishEdit}
          onPressLabel={handlePressTaskItemLabel}
          onRemoveItem={handleDelete}
          editingItemId={editID}
        />
      </VStack>
      <Fab
        position="absolute"
        size="sm"
        renderInPortal={false}
        icon={<Icon color="white" as={<Feather name="plus" />} size="sm" />}
        colorScheme={useColorModeValue('#442C2E', 'darkBlue')}
        bg={useColorModeValue('#442C2E', 'blue.400')}
        onPress={() => {
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

