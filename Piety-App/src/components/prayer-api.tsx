import {View, StyleSheet, Platform, TouchableOpacity, Pressable, ListView, FlatList, Dimensions} from 'react-native'
import React, { memo, useState } from "react";
import { Box, HStack, VStack, Text, useColorModeValue } from 'native-base'
import Task from './tasks';


export default class FetchPrayer extends React.Component {

  state = {
    loading: true,
    prayer: null,
  };

  async componentDidMount() {
    const url = "https://api.aladhan.com/v1/timingsByCity?city=plymouth&country=United%20Kingdom&method=2";
    const response = await fetch(url);
    const pData = await response.json();
    console.log(JSON.stringify(pData.data.timings))
    this.setState({ prayer: (pData.data.timings), loading: false });
  }


  render() {
    if (this.state.loading) {
      return <Text>loading...</Text>;
    }

    return(
      <HStack  style={styles.container}>
      <FlatList 
        horizontal={true}
        data={[
          {key:  <Text isTruncated maxW="500" w="100%">{this.state.prayer.Fajr}</Text>},
          {key:  <Text>{this.state.prayer.Sunrise}</Text>},
          {key:  <Text>{this.state.prayer.Dhuhr}</Text>},
          {key:  <Text>{this.state.prayer.Asr}</Text>},
          {key:  <Text>{this.state.prayer.Maghrib}</Text>},
          {key:  <Text>{this.state.prayer.Isha}</Text>},
        ]}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item}) => <Text flex={1} style={styles.item}>{item.key}</Text>}
      />
    </HStack>   
    )
  }
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: "space-between", 
    

  
  },
  item: {
    flex: 1,
    justifyContent: "space-between",
    width: 50,
    fontSize: 18,
    paddingTop: 10,
  },
});
  


