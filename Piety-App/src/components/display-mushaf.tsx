import React, { useState } from "react"
import { View, Image, FlatList } from 'native-base'
import Mushaf from "./mushaf"
import { Dimensions } from "react-native"

const DisplayMushaf = () => {

  const [images, setimages] = useState([
    require('../assets/mushafs/kingFahad/page001.png'),
    require('../assets/mushafs/kingFahad/page002.png'),
    require('../assets/mushafs/kingFahad/page003.png'),
    require('../assets/mushafs/kingFahad/page004.png'),
    require('../assets/mushafs/kingFahad/page005.png'),
  ])
  
 
  const {width, height} = Dimensions.get('screen')
return (
  <FlatList
    horizontal={true} 
    showsHorizontalScrollIndicator={false} 
    data={images}
    renderItem={ ({ item, index }) => (
      <Image source={item} /* Use item to set the image source */
        key={index} /* Important to set a key for list items,
                       but it's wrong to use indexes as keys, see below */
        style={{
          width: width,
          height: height,
          borderWidth:2,
          borderColor:'#d35647',
          resizeMode:'contain',
          margin:2
        }}
      />
    )}
  />
);

}

export default DisplayMushaf
