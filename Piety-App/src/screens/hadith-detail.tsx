import React, { useCallback, useEffect, useState } from "react"
import { View, Text, VStack, Image, FlatList, useColorModeValue, IconButton, Icon } from 'native-base'
import { AntDesign, Feather } from "@expo/vector-icons"
import { StyleSheet, Alert, ScrollView } from "react-native"
import { height, width, SPACING, ITEM_HEIGHT, detailsIcon } from "./hadith"
import AnimatedText from "../components/text-animator"
import { useNavigation, useRoute } from "@react-navigation/native"
import AnimatedColorBox from "../components/animated-color-box"


const HEADER_HEIGHT = height * 0.3



export default function HadithDetail(){
 
  const [screenHeight, setScreenHeight] = useState(0)

  const navigation = useNavigation<any>()

  const handleback = useCallback(() => {
    navigation.navigate("Hadith")
  }, [navigation])  
  

  const route = useRoute<any>()
  const {item} = route.params 

  const bg = useColorModeValue("#FEDBD0", "blueGray.900")

/* use Regex for word filtering
  var acceptedwords = /صحيح|حسن|جيد /;
  var regex = new RegExp(acceptedwords.map(function(w: string){ return '\\b'+w+'\\b' }).join('|'),'g');

  var str = 'عبد المجيد ';
  if (acceptedwords.test(str)) { // Contains the accepted word
    console.log("Contains accepted word: " + str);          
  } else {
    console.log("Does not contain accepted word: " + str);
  }
*/
  const checkBack = (item: string) => {
    if(item.indexOf("صحيح") !== -1 ){
      return "#285D34"
    }
    else if(((item.indexOf("حسن")) !== -1 )){
      return "#698E71"
    }
    else if(((item.indexOf("جيد" )) !== -1 )){
      return "#698E71"
    }
    else{
      return "rgba(179, 63, 64, 0.8)"
    }
  }

  const scrollEnabled = screenHeight > height
  const onSizeChange = (contentWidth: number, contentHeight: number) => {
    setScreenHeight(contentHeight) 
  }

  return(
    <AnimatedColorBox 
      flex= {1}
      width="full"
      bg={bg}
    >
      <IconButton
        onPress={handleback}
        variant={"ghost"} 
        position="absolute"
        style={{padding: 12}}
        top={5} 
        left={3}
        zIndex={1}            
        _icon={{
          as: Feather,
          name: "arrow-left",
          size: 30,
          color: useColorModeValue("#442C2E", "darkBlue.600")
      }}
      />
      <View 
        style={[StyleSheet.absoluteFillObject]} 
        backgroundColor={checkBack(item.hadiths.grade)}
        height={HEADER_HEIGHT + 32}
      />
      <ScrollView 
        onContentSizeChange={onSizeChange} 
        scrollEnabled={scrollEnabled} 
        contentContainerStyle={{ bottom: 150, height: "100%", width: "100%"}}
      >
        <View pl={20} right={5} >
          <Text numberOfLines={4} style={styles.hadith} lineHeight="3xl" adjustsFontSizeToFit>{item.hadiths.hadith}</Text> 
        </View>
      </ScrollView>
      <Image
        alt="what" 
        source={item.image} 
        style={styles.image}
      /> 
      <View style={styles.bg} backgroundColor={bg}>
        <VStack space={8} alignItems={"flex-end"} justifyContent={"space-evenly"}>
          {detailsIcon.map((detail, index) => {
            return(
              <View 
                key={`${detail.icon} - ${index}`} 
                backgroundColor={detail.color} 
                height={10} 
                width={10} 
                borderRadius={32}
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={Feather} name={detail.icon} size={5} color={'black'}/> 
              </View>
            )
          })}
        </VStack>
        <View>
          <Text 
            style={styles.sub} 
            bottom={ITEM_HEIGHT * 2 + SPACING} 
            pr={SPACING}
          >
            {item.hadiths.el_rawi}
          </Text>
          <Text 
            style={styles.sub} 
            bottom={ITEM_HEIGHT * 1.63 + SPACING} 
            pr={SPACING}
          >
            {item.hadiths.el_mohdith}
          </Text>
          <Text 
            style={styles.sub} 
            bottom={ITEM_HEIGHT * 1.315 + SPACING} 
            pr={SPACING}
          >
            {item.hadiths.source}
          </Text>
          <Text 
            style={styles.sub} 
            textAlign="right"
            bottom={ITEM_HEIGHT * 0.97 + SPACING} 
            pr={SPACING}
          >
            {item.hadiths.number_or_page}
          </Text>
          <Text 
            style={styles.sub} 
            bottom={ITEM_HEIGHT / 1.63 + SPACING} 
            pr={SPACING}
          >
            {item.hadiths.grade}
          </Text>
        </View>
      </View>    
    </AnimatedColorBox> 
  )
}
const styles = StyleSheet.create({
  image: {
    width: ITEM_HEIGHT * 0.8,
    height: ITEM_HEIGHT * 0.8,
    resizeMode: 'contain',
    position: 'absolute',
    top: HEADER_HEIGHT - ITEM_HEIGHT * 0.8, //header height decremented by Item height
    right: width / 1.5,

  },
  hadith: {
    fontWeight: '700',
    fontSize: 24,
    padding: SPACING,
    paddingRight: SPACING,
    color: "black",
    top: HEADER_HEIGHT - SPACING * 4,
    left: SPACING,

  },
  grade: {
    fontSize: 19,
    color: "white",
  },
  bg: {
    position: 'absolute',
    width,
    height,
    transform: [{ translateY: HEADER_HEIGHT }],
    borderRadius: 32,
    padding: 32 + SPACING,
  },
  container: {
  },
  sub: {
    fontSize: 18,

  }


})

