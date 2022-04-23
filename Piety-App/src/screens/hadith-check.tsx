import React, { useCallback, useEffect, useState } from 'react'
import { 
  Text, Box, VStack, 
  useColorModeValue, Image, View, Divider, Heading, Input, Icon, Button, FlatList } from 'native-base'
import { ImageBackground, StyleSheet, Dimensions } from 'react-native'
import AnimatedColorBox from '../components/animate-theme-shift'
import BarNav from '../components/navbar'
import { Feather } from '@expo/vector-icons'

interface searchProps{
  navigation: any,
  route: any,

}

export default function HadithCheck(props: searchProps){
  
  const i_search = "نيات "
  const handleSearch = useCallback(() => {
    props.navigation.navigate("Hadith", i_search)
  }, [props.navigation])

  const [hadithJSON, setHadithJSON] = useState([])
  const [hadith, setHadith] = useState([])
  const [narrator, setNarrator] = useState([])
  const [grade, setGrade] = useState([])

  const sb = useColorModeValue("rgba(0,0,0,0.6)", "darkBlue.800")
  const url = `https://dorar-hadith-api.herokuapp.com/api/search?value=${i_search}`


  const getHadith = useCallback(async() => {
    try{
      let response = await fetch(url)
      let json = await response.json()
      setHadithJSON(json)
      setHadith(json.hadith)
      setNarrator(json.el_rawi)
      setGrade(json.grade)

    } catch(error){
        console.log(error)
    }  
  }, [])

  useEffect(() => {
    getHadith()
  }, [getHadith])


  return(
    <AnimatedColorBox
      flex={1}
      width="full"
      bg={useColorModeValue("#FEDBD0", "blueGray.800")}
    >
      <View flex={1} flexDir={"row"} style={styles.container}>
        <BarNav />
      </View>
      <VStack 
        my="4"
        padding={10}
        flex={1}
        top={10}
        space={10} 
        w="100%" 
        maxW="300px" 
        divider=
          {<Box px="2">
            <Divider />
          </Box>}>
        <VStack w="100%" space={5} flex={1} alignSelf="center">
          <Heading fontSize="lg">Al salamu alaikum</Heading>
          <Input 
            placeholder="Search" 
            variant="filled" 
            width="100%" 
            borderRadius="10" 
            backgroundColor={sb}
            py="1" 
            px="2" 
            borderWidth="0" 
            InputLeftElement=
            {<Icon ml="2" size="4" color="white" as={<Feather name="feather" />} />} />
        </VStack>
      </VStack>
      <View flex={1} p={50} position="absolute" top={200}>
        <Button zIndex={1} onPress={handleSearch} backgroundColor={"rgba(0,0,0,0.5)"} >
          Search
        </Button>
      </View>      <View>
        <Image source={require("../assets/sakuraa.png")} position={"absolute"} resizeMode={"cover"} alt="sakura"/>
      </View>
    </AnimatedColorBox> 
  )



}

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    height: height / 10,
    width: width
  }
})

