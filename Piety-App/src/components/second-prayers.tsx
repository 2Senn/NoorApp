import React from "react"
import {View, Text, FlatList} from 'native-base'
import { TouchableOpacity } from "react-native"

const Prayerss = (data) => {
  const listEmptyComponent=() =>{
    return( 
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  const salah = ({item}) => {
    console.log('item', item)

    return(
      <TouchableOpacity>
        <Text>Prayers</Text>
      </TouchableOpacity>
    )
  }

  return(

    <FlatList 
      renderItem={salah} 
      data={[data]}
      keyExtractor={(item)=>String(item.timings)}
      ListEmptyComponent={listEmptyComponent}
    />  

  )
}

export default Prayerss
