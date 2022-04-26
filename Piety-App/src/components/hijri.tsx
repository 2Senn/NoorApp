import React, { useCallback, useEffect, useState } from "react"
import { Text, View, FlatList, useColorModeValue, Box } from "native-base"
import { StyleSheet } from "react-native"


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
      console.log(hijriDate)
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
    console.log(date)
  })

  const data = [
    {
      id: 1,
      type: hijriDate,
      title: "Hijri date",
    },
    {
      id: 2,
      type: date,
      title: "Gregorian"
    }
  ]
  
  const tc = useColorModeValue("#442C2E", "white")

  useEffect(() => {
    fetchHijri()
  }, [fetchHijri])
  
  return(
    <View style={styles.container}>
      <FlatList 
        data={data}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        renderItem={({item}) => {
          return(
            <View style={{ justifyContent: 'center', alignItems: "center", padding: 100}}>
              <View style={styles.container}>
                <Text style={styles.item}>{item.title}</Text>
                <Text style={styles.item}>{item.type}</Text>
              </View>
            </View>
          )
        }}
        />
    </View>
  )

}


const styles = StyleSheet.create({
  item: {
    fontSize: 25,
    alignSelf: "center",
    justifyContent: "center",
    padding: 10,

  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Hijri

