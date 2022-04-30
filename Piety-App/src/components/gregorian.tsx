import React, { useEffect, useState } from "react"
import {Text, View} from 'react-native'

export const Gregorian = () => {
    

  const [date, setDate] = useState('')

  useEffect(() => {
    var year = new Date().getFullYear()
    var month = new Date().getUTCMonth() + 1
    var day = new Date().getDate()
    
    setDate(
      day + "-" + month + "-" + year
    )
  }, [Date])

  return(
    date
  )


}

export default Gregorian
