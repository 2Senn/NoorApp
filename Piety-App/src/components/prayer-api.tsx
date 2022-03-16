import {View, StyleSheet, Platform, TouchableOpacity, Pressable, ListView, FlatList} from 'react-native'
import React, { useState } from "react";
import { Box, HStack, VStack, Text, useColorModeValue } from 'native-base'

export default class FetchPrayer extends React.Component {

  state = {
    loading: true,
    prayer: null,
  };

  async componentDidMount() {
    const url = "https://api.aladhan.com/v1/timingsByCity?city=plymouth&country=United%20Kingdom&method=2";
    const response = await fetch(url);
    const data = await response.json();
    console.log(JSON.stringify(data.data.timings))
    this.setState({ prayer: (data.data.timings), loading: false });
  }


  render() {
    if (this.state.loading) {
      return <Text>loading...</Text>;
    }

    return(

      <View style={styles.container}>
      <FlatList 
        data={[
          {key:  <Text isTruncated maxW="100" w="80%">Fajr   {this.state.prayer.Fajr}</Text>},
          {key:  <Text>Sunrise  {this.state.prayer.Sunrise}</Text>},
          {key:  <Text>Dhuhr    {this.state.prayer.Dhuhr}</Text>},
          {key:  <Text>Asr    {this.state.prayer.Asr}</Text>},
          {key:  <Text>Maghrib    {this.state.prayer.Maghrib}</Text>},
          {key:  <Text>Isha   {this.state.prayer.Isha}</Text>},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
    )
    
  }
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   alignItems: "center" 
  },
  item: {
    fontSize: 20,
    height: 40, 
  },
});
  
const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkbox: {
    width: 64,
    height: 64
  }
})


