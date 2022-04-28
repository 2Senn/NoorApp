import React, { useCallback, useEffect, useState } from "react"
import { View, Text } from 'native-base'

const RandomHadith = () => {
  
  const [hadith, setHadith] = useState<any>([])
  const [single, setSingle] = useState("")

  const names = ['bukhari', 'muslim']
  var name = names[Math.floor(Math.random()*names.length)]; 
  
  const url = `https://api.hadith.sutanlab.id/books/${names[1]}?range=1-299` 

  const fetchHadith = useCallback(async() => {
    try{
      let response = await fetch(url)
      let json = await response.json()
      setHadith(json)
    }catch(error){
        console.log(error)
      }
    }, [])

  useEffect(() => {
      fetchHadith()
      console.log(hadith)
      const getRandom = Math.floor(Math.random() * hadith.data.hadiths.length)
      setSingle(hadith.data.hadiths[getRandom].arab)
    }, [fetchHadith]) 

    return(
      <View>
        <Text>{single}</Text>
      </View>
  )


}

 export default RandomHadith


