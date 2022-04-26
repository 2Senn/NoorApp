import React, { useState, useEffect, useCallback } from "react"
import { View, Text, VStack, useColorModeValue, Icon } from "native-base" 
import { Dimensions, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"


const PrayTimes = () => {

  //use states
  const [times, setTimes] = useState([])
  const [loading, setLoading] = useState(true)
  const [fajr, setFajr] = useState("")
  const [sunrise, setSunrise] = useState("")
  const [dhuhr, setDhuhr] = useState("")
  const [asr, setAsr] = useState("")
  const [maghrib, setMaghrib] = useState("")
  const [isha, setIsha] = useState("")
  const [time, setTime] = useState("")
  const [isFajr, setIsFajr] = useState(false)
  const [isDhuhr, setIsDhuhr] = useState(false)
  const [isAsr, setIsAsr] = useState(false)
  const [isMaghrib, setIsMaghrib] = useState(false)
  const [isIsha, setIsIsha] = useState(false)

  useEffect(() => {
    var hour = new Date().getHours()
    var minutes = new Date().getMinutes()
    const time = hour.toString() + "." + minutes.toString()
    setTime(time)
    console.log(time)
  }, [])
  //images
  const images = [
    {
      id: 1,
      image: require('../assets/fajr.jpg'), //'https://i.pinimg.com/originals/9e/9a/81/9e9a81011e6d32193cb134418739a226.jpg',
      time: fajr,
      icon: 'sunrise'
    }, 
    {
      id: 2,
      image: require('../assets/dhuhr.jpg'), //'https://images.unsplash.com/photo-1603663694798-e43bd6c3b150?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGlzbGFtfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      time: dhuhr,
      avatar: require('../assets/icon2.png'),
      icon: 'sun'
    },
    
    {
      id: 3,
      image: require('../assets/asr.jpg'),
      time: asr,
      avatar: require('../assets/icon2.png'),
      icon: 'cloud'
    }, 
    {
      id: 4,
      image: require('../assets/maghrib.jpg'),
      time: maghrib,
      avatar: require('../assets/icon2.png'),
      icon: 'sunset'
    }, 
    {
      id: 5,
      image: require("../assets/isha.jpg"),
      time: isha,
      avatar: require('../assets/icon2.png'),
      icon: 'moon'
    },
    
  ]

  //get screen dimensions
  const {width, height} = Dimensions.get('screen')
  const ITEM_WIDTH = width * 0.76
  const ITEM_HEIGHT = height * 0.40

  //api options
  const method = "3" 
  const city= "Amman"
  const country = "Jordan"

  const cBorder = useColorModeValue("#FEEAE6", "darkBlue.500")
  const PADDING = 10
  const url = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=${method}`
  //const url = `https://api.aladhan.com/v1/timingsByCity?city=amman&country=jordan&method=3`

  const fetchData = useCallback(async() => {
    try{
      let response = await fetch(url)
      let json = await response.json()
      setTimes(json)
      setFajr(json.data.timings.Fajr)
      setSunrise(json.data.timings.Sunrise)
      setDhuhr(json.data.timings.Dhuhr)
      setAsr(json.data.timings.Asr)
      setMaghrib(json.data.timings.Maghrib)
      setIsha(json.data.timings.Isha)
      setLoading(false)
    } catch(error){
      console.error(error)
    }
  }, [])
  
   useEffect(() => {
    fetchData()
  }, [fetchData])

  const textC = useColorModeValue("black", "white")
 
  useEffect(() => {
    if((parseInt(time) <= parseInt(fajr)) && (parseInt(time) > parseInt(isha))){
       setIsFajr(true)
    }
    if((parseInt(time) <= parseInt(dhuhr)) && (parseInt(time) > parseInt(fajr))){
       setIsDhuhr(true)
    }
    if((parseInt(time) <= parseInt(asr)) && (parseInt(time) > parseInt(dhuhr))){
       setIsAsr(true)
    }
    if((parseInt(time) <= parseInt(maghrib)) && (parseInt(time) > parseInt(asr))){
       setIsMaghrib(true)
    }
    if((parseInt(time) <= parseInt(isha)) && (parseInt(time) > parseInt(maghrib))){
       setIsIsha(true)
    }

    
  }) 


  return(

    <View flex={1} flexDir={'row'} justifyContent="center" alignSelf="center" pl={width / 10}>
      <VStack 
        space="3" 
        alignItems="center" 
        borderTopWidth={isFajr ? "1" : null}
        borderBottomWidth={isFajr ? "1" : null}
        borderColor="#442C2E"
      >
        <Text>Fajr</Text>
        <Text style={styles.item} color={textC}>{images[0].time}  </Text>
        <Icon as={Feather} name="sunrise" size="md" opacity={1} color={"yellow.500"}/>
      </VStack>
      <VStack  
        space="3" 
        alignItems="center" 
        borderTopWidth={isDhuhr ? "1" : null}
        borderBottomWidth={isDhuhr ? "1" : null}
        borderColor="#442C2E"
      >
        <Text>Dhuhr</Text>
        <Text style={styles.item} color={textC}>{images[1].time}  </Text>
        <Icon as={Feather} name="sun" size="md" opacity={1} color={"yellow.500"}/>
      </VStack>
       <VStack 
        space="3" 
        borderTopWidth={isAsr ? "1" : null}
        borderBottomWidth={isAsr ? "1" : null}
        borderColor="#442C2E"
        alignItems="center"
      >
        <Text>Asr</Text>
        <Text style={styles.item} color={textC}>{images[2].time}  </Text>
        <Icon as={Feather} name="cloud" size="md" opacity={1} color={"yellow.500"}/>
      </VStack> 
      <VStack 
        space="3" 
        alignItems="center"
        borderTopWidth={isMaghrib ? "1" : null}
        borderBottomWidth={isMaghrib ? "1" : null}
        borderColor="#442C2E"
      >
        <Text>Maghrib</Text>
        <Text style={styles.item} color={textC}>{images[3].time}  </Text>
        <Icon as={Feather} name="sunset" size="md" opacity={1} color={"yellow.500"}/>
      </VStack>
      <VStack 
        space="3" 
        alignItems="center"
        borderTopWidth={isIsha ? "1" : null}
        borderBottomWidth={isIsha ? "1" : null}
        borderColor="#442C2E"
      >
        <Text>Isha</Text>
        <Text style={styles.item} color={textC}>{images[4].time}  </Text>
        <Icon as={Feather} name="moon" size="md" opacity={1} color={"yellow.500"} 
          style={{justifyContent: 'center', alignSelf: 'center'}}/>
      </VStack>
    </View>
 )

}
const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'rgba(0,0,0,0.4)'
  }
})

export default PrayTimes

