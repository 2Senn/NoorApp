import React, { useCallback, useState } from "react"
import { View, Text, Image, useColorModeValue, HStack, VStack, Input } from 'native-base'
import { StyleSheet, Dimensions, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native'
import { BlurView } from "expo-blur"
import AnimatedColorBox from "../components/animated-color-box"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../../firebase-config'
import { useNavigation } from "@react-navigation/native"
import LoadingIndicator from "../components/moti-loading"
import { 
  CinzelDecorative_400Regular,
  CinzelDecorative_700Bold,
  CinzelDecorative_900Black,
  useFonts
} from '@expo-google-fonts/cinzel-decorative'
import NeoButton, { neostyles } from "../components/neo-button"

export const AuthScreen = () => {

  let [fontsLoaded] = useFonts({
    CinzelDecorative_900Black,
    CinzelDecorative_700Bold,
    CinzelDecorative_400Regular
  }) 

  const [isPressedIn, setIsPressedIn] = useState(false)
  const handlePressIn = useCallback(() => {
    setIsPressedIn(!isPressedIn)
  }, [isPressedIn])

 const handlePressOut = useCallback(() => {
    setIsPressedIn(false)
  }, [isPressedIn])
  const _lightArray = isPressedIn ? ["#f1b5a3", "#cb9889"] : ["#cb9889", "#f1b5a3"]
  

  const navigation = useNavigation<any>()

  //use states
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState('')

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  const handleCreateUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        Alert.alert("User Registered!")
        const user = userCredential.user 
        console.log(user)
      })
    .catch(error => {
        console.log(error)
        Alert.alert(error.message)
      })
  }

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log('signed in')
        const user = userCredential.user
        console.log(user)
        navigation.navigate("Pray")
      })
    .catch(error => {
        console.log(error)
        Alert.alert(error.message)
      })
  }


  const bg = useColorModeValue("primary.350", "blueGray.900")

  return(
   
    <AnimatedColorBox w="full" h="full" bg={bg}>
      {fontsLoaded ? 

      <View style={{
        width: "100%",
        height: "100%",
        }} 
      >
          <View style={styles.header} alignItems={'center'} justifyContent={'center'} padding={10}>
            <View style={styles.inner} flexDir='row'>
              <Image 
                alt="logo"
                source={require("../assets/noor-alpha.png")} 
                resizeMode={'contain'} 
                width={300}
                height={300}
                />
            </View>
          </View>
          <View style={styles.login}>
            <View >
              <Text style={styles.title}>Al Salamu Alaikum</Text>
            </View>
            <View>
              <View >
                <Input 
                  style={[styles.input]} 
                  borderColor={"primary.350"}
                  borderLeftColor={"primary.400"}
                  onChangeText={(text) => setEmail(text)} 
                  placeholder="type your email here!"
                  placeholderTextColor="black"
                  fontFamily={"CinzelDecorative_400Regular"}
                  />
              </View>
            </View>
            <View>
              <Input 
                style={styles.input}
                borderColor={"primary.350"}
                borderLeftColor={"primary.400"}
                onChangeText={(text) => setPassword(text)} 
                placeholder="password" 
                fontFamily={"CinzelDecorative_400Regular"}
                placeholderTextColor="black"
                secureTextEntry={true} />
            </View>
            <TouchableOpacity onPress={handleLogin} style={[styles.button]}>
              <NeoButton 
                w={"full"} 
                h={"full"} 
                br={30}
                backgroundColor={"#e1a998"}
                shadowColor={"#ad8275"}
                shadowColor2={"#ffd0bb"}
              >
                <Text style={styles.text}>Login</Text> 
              </NeoButton>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCreateUser} style={[styles.button]}>
              <NeoButton 
                w={"full"} 
                h={"full"} 
                br={30}
                backgroundColor={"#e1a998"}
                shadowColor={"#ad8275"}
                shadowColor2={"#ffd0bb"}
              >
                <Text style={styles.text}>Create Account</Text> 
              </NeoButton>
            </TouchableOpacity>
          </View>
      </View>
      : <View alignItems='center' justifyContent='center' width="full" height="full">
          <LoadingIndicator size={150}/> 
        </View>
      }
    </AnimatedColorBox>
  )
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "20%",
    padding: 5,
    
  },
  login: {
    width: "100%",
    height: "90%",
    padding: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    
  },
  input: {
    width: 250,
    height: 40,
    borderLeftWidth: 3,
    padding: 10,
    marginBottom: 20,
    marginVertical: 10,
  },
  inner: {
    flex: 1
  },
  blur: {
    width: "80%",
    height: "80%",
  },
  text: {
    fontSize: 17, 
    padding: 10,
    fontFamily: 'CinzelDecorative_400Regular',
    fontWeight: '400', 
  },
  title: {
    fontSize: 25, 
    fontFamily: 'CinzelDecorative_700Bold',
    paddingTop: 20
  },
  button: {
    width: 250,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,

  }
})

export default AuthScreen

