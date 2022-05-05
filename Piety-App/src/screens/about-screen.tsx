import React from 'react'
import {
    Image,
    ScrollView,
  Text, useColorModeValue, View, VStack,
} from 'native-base'
import AnimatedColorBox from '../components/animated-color-box'
import { StatusBar, StyleSheet } from 'react-native'
import Masthead from '../components/masthead'
import BarNav from '../components/navbar'
import AnimatedText from '../components/text-animator'

const AboutScreen = () => {

  const bg= useColorModeValue('#C1ABA0', "blueGray.900")

  return (
    <AnimatedColorBox
      width="full"
      flex={1}
      bg={bg}
    >
      <StatusBar hidden />
      <View width={"100%"} height={"20%"}>
        <Masthead 
          title="About This App"
          image={require('../assets/olive.png')}
        >
          <BarNav />
        </Masthead>
      </View>
      <View width="100%" height={"80%"} >
        <ScrollView
          borderTopRadius={30}
          bg={useColorModeValue("#E1C5C0", 'blue.900')}
          p={3}
          >
          <VStack space={6} p={5} alignItems="center" justifyContent="center" >
            <Image alt="man" source={require("../assets/man.png")} resizeMode="contain" width={75} height={75} />
            <AnimatedText
              content="This is an app aimed towards every muslim who wants all their daily needs in one place without worrying about ads or payments."
              duration={300} 
              textStyle={styles.text} 
            />
            <AnimatedText
              content="More importantly, increasing the love of hadith in people's hearts and pulling people towards authentic narrations"
              duration={300} 
              textStyle={styles.text} 
            />
            <AnimatedText 
              content="-Solely Developed by your muslim brother"
              duration={500}
              textStyle={styles.text2}
              style={styles.container}
              />
          </VStack>
        </ScrollView>
      </View>
    </AnimatedColorBox>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20

  },
  text: {
    fontSize: 18,
    marginHorizontal: 10
  },
  text2: {
    fontSize: 16,
    color: "rgba(0,0,0,0.5)"
  }
})

export default AboutScreen
