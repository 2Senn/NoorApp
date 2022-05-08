import React, { useState } from "react"
import { View, Text, Image, useColorModeValue, HStack, VStack } from 'native-base'
import { StyleSheet, Dimensions, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native'
import { BlurView } from "expo-blur"
import AnimatedColorBox from "../components/animated-color-box"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../../firebase-config'
import { useNavigation } from "@react-navigation/native"

export const AuthScreen = () => {

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


  const bg = useColorModeValue("#fedbd0", "blueGray.900")

  return(
    <AnimatedColorBox w="full" h="full" bg={bg}>
      <ScrollView contentContainerStyle={{
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        }} 
      >
        <BlurView intensity={100} style={styles.blur}>
          <View style={styles.login}>
            <Image 
              alt="logo" 
              source={require("../assets/logoICON.png")} 
              resizeMode="contain"
              maxHeight={"100"}
              maxW={"100"}
            />
            <View>
              <Text style={styles.text}>Email</Text>
              <TextInput style={styles.input} onChangeText={(text) => setEmail(text)} placeholder="your-email@something.com"/>
            </View>
            <View>
              <Text style={styles.text}>Password</Text>
              <TextInput style={styles.input} onChangeText={(text) => setPassword(text)} placeholder="password" secureTextEntry={true} />
            </View>
            <TouchableOpacity onPress={handleLogin} style={[styles.button, {backgroundColor: "rgba(68, 44, 46, 0.5)"}]}>
              <Text style={styles.text}>Login</Text> 
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCreateUser} style={[styles.button, {backgroundColor: "rgba(68, 44, 46, 0.5)" } ]}>
              <Text style={styles.text}>Create Account</Text> 
            </TouchableOpacity>
          </View>
        </BlurView>
      </ScrollView>
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
    borderColor: "#fff",
    padding: 20,
    borderWidth: 2,
    alignItems: 'center',
  },
  input: {
    width: 250,
    height: 40,
    borderColor: '#fff',
    borderWidth: 2,
    padding: 10,
    marginBottom: 20,
    marginVertical: 10,
    backgroundColor: '#ffffff90',
    borderRadius: 40
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
    fontWeight: '400', 
    color: '#000'
  },
  button: {
    width: 250,
    height: 40,
    borderRadius: 50,
    backgroundColor: "rgba(68, 44, 46, 0.5)",
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderColor: '#fff',
    borderWidth: 1

  }
})

export default AuthScreen

