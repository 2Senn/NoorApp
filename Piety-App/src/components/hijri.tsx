import React, { useCallback, useEffect, useRef, useState } from "react"
import { Text, View, FlatList, useColorModeValue, Box, Image } from "native-base"
import { Dimensions, ImageBackground, StyleSheet } from "react-native"


const Hijri = () => {


  const [date, setDate] = useState('')
  const [hijri, setHijri] = useState([])
  const [hijriDate, setHijriDate] = useState("")

  const url = `https://api.aladhan.com/v1/gToH?date=${date}`

  const fetchHijri = useCallback(async() => {
    try{
      let response = await fetch(url)
      let json = await response.json()
      setHijri(json) 
      setHijriDate(json.data.hijri.date)
    } catch(error){
      console.log(error)
    }
  }, [])

  useEffect(() => {
    var year = new Date().getFullYear()
    var month = new Date().getMonth()
    var day = new Date().getDate()
    
    setDate(
      day + "-" + month + "-" + year
    )
  })

  useEffect(() => {
    fetchHijri()
  }, [fetchHijri])
  
  return(

      <Text>{hijriDate}</Text>

  )  
}

export default Hijri

