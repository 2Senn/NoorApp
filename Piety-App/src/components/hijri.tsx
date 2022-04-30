import React, { useCallback, useEffect, useRef, useState } from "react"


export const Hijri = () => {


  const [date, setDate] = useState('')
  const [hijri, setHijri] = useState([])
  const [hijriDate, setHijriDate] = useState("")
  
  useEffect(() => {
    var year = new Date().getFullYear()
    var month = new Date().getMonth()
    var day = new Date().getDate()
    
    setDate(
      day + "-" + month + "-" + year
    )
  }, [Date])

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
    fetchHijri()
  }, [fetchHijri])
  
  return(

    hijriDate
  )  
}

export default Hijri

