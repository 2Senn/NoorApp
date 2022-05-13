import { Box, Button, Fab, Icon, IconButton, Image, Pressable, ScrollView, Text, useColorModeValue, View, VStack } from "native-base"
import React, { useCallback, useEffect, useState } from "react"
import { AsyncStorage, StyleSheet, TouchableOpacity, Alert, Dimensions } from "react-native"
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
import { LinearGradient } from "expo-linear-gradient"
import NeoButton from "./neo-button"
import { width } from "../screens/hadith"
import {neostyles} from './neo-button'
import { BlurView } from "expo-blur"
import { borderColor } from "styled-system"
import RandomHadith from "./random-hadith"
import Hijri from "./hijri"
import Gregorian from "./gregorian"


export const TaskLayout = () => {

  const checkStorage = () => {
    const test = AsyncStorage.getItem("Tasks")
    if(test !== null){
      return storedData
    }
    else return []
  }

  const navigation = useNavigation<any>()
  const [data, setData] = useState(checkStorage())
  const [editID, setEditID] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [task, setTask] = useState<any>([])
  
  const [isPressedIn, setIsPressedIn] = useState(false)
  const handlePressIn = useCallback(() => {
    setIsPressedIn(!isPressedIn)
  }, [isPressedIn])

 const handlePressOut = useCallback(() => {
    setIsPressedIn(false)
  }, [isPressedIn])
  const _lightArray = isPressedIn ? ["#f1b5a3", "#cb9889"] : ["#cb9889", "#f1b5a3"]

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

  const handleBack = useCallback(() => {
    navigation.navigate("Pray")
  }, [navigation])

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

  const handleEntry = async () => {
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

  }

  const getTotalTasks = async () => {
    const result = await AsyncStorage.getItem("Tasks")
    return data.length
  }

  
  return (
    <AnimatedColorBox
      p={10}
      flexDir={'row'}
      flexWrap={'wrap'}
      width="full"
      bg={useColorModeValue("#e1a998", "blueGray.900")}
      flex={1}
    >
      <View style={styles.header}>
        <View style={styles.inner}>
          <NeoButton 
            nav={handleBack} 
            w={50} 
            h={50} 
            br={100} 
            backgroundColor={"#e1a998"}
            shadowColor={"#ad8275"}

                shadowColor2={"#ffd0bb"}
          >
            <Icon as={Feather} name="arrow-left" size="sm"/>
          </NeoButton>
          <View flex={1} alignItems={'center'} justifyContent={'center'} >
            <Text style={styles.title}>My Tasks</Text>
          </View>
          <View flex={1} alignItems="flex-end" justifyContent="center">
            <NeoButton 
              w={50} 
              h={50} 
              br={100}
              backgroundColor={"#e1a998"}
              shadowColor={"#ad8275"}

                shadowColor2={"#ffd0bb"}
            >
              <Icon as={Feather} name="sun" size="sm"/>
            </NeoButton>
          </View>
        </View>
      </View>
      <View style={styles.upper}>
        <View style={styles.inner}>
          <View style={styles.minibox1}>
            <View style={styles.neoView}>
              <View style={styles.card}>
                <VStack flex={1} alignItems={'center'} justifyContent={'center'}>
                  <Text fontWeight='bold'>Good Morning</Text>
                </VStack>
              </View>
            </View>
          </View>
          <View style={styles.minibox2}>
            <BlurView intensity={40} tint={"default"} >
              <View style={styles.card}>
                <VStack alignItems='center' justifyContent='center' flex={1}>
                  <Text fontSize={17} fontWeight={"bold"}>Total Tasks</Text>
                  <Text fontSize={17} opacity={0.8}>{data.length}</Text>
                </VStack>
              </View>
            </BlurView>
          </View>
        </View>
      </View>
      <View style={styles.main}>
        <View  flex={1} flexDir='row' style={styles.neoView}>
          {loading ? 
            <View width="full" height="full" alignItems={'center'} justifyContent="center"> 
              <LoadingIndicator size={150}/> 
            </View> 
          : (
          <VStack space={5} paddingY={4}>
          <ScrollView >
            <TaskList
              data={data}
              onToggleItem={handleToggleTask}
              onChangeSubject={handleChangeContent}
              onFinishEditing={handleFinishEdit}
              onPressLabel={handlePressTaskItemLabel}
              onRemoveItem={handleDelete}
              editingItemId={editID}
            />
          </ScrollView>
          </VStack>
          )}
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.inner}>
          <View alignItems={'flex-end'} flex={1} height={50} width={50} >
            <NeoButton 
              nav={handleEntry} 
              w={50} 
              h={50} 
              br={100} 
              backgroundColor={"#e1a998"}
              shadowColor={"#ad8275"}

                shadowColor2={"#ffd0bb"}
            >
              <Icon as={Feather} name="plus" size="sm" />
            </NeoButton>
          </View>
        </View>
      </View>
    </AnimatedColorBox>
  )
}


const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "10%",
    padding: 5,
  },
  inner: {
    flex: 1,
    flexDirection: 'row',
    
  },
  title: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  main: {
    width: "100%",
    height: "60%",
    padding: 5,
    backgroundColor: '#e1a998',
    borderRadius: 10,
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowRadius: 16,
    elevation: 8,
    shadowOpacity: 1,
    shadowColor: '#ad8275',

  },
  upper: {
    width: "100%",
    height: "20%",
    padding: 5,
    marginTop: 10
  },
  footer: {
    width: "100%",
    height: "10%",
    padding: 10,
  },
  card: {
    padding: 3,
    width: "100%",
    height: "100%",
    borderColor: "rgba(255,255,255,0.6)",
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center'

  },
  minibox1: {
    width: "50%",
    height: "100%",
    padding: 5
  },
  minibox2: {
    width: "50%",
    height: "100%",
    padding: 5,
  },
  neoView: {
    backgroundColor: '#e1a998',
    borderRadius: 10,
    shadowOffset: {
      width: -8,
      height: -8,
    },
    shadowRadius: 10,
    elevation: 8,
    shadowOpacity: 1,
    shadowColor: '#ffd0bb',
    alignItems: 'center',
    justifyContent: 'center'

  }
})

export default TaskLayout

