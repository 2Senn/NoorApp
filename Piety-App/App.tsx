import React from 'react'
import AppContainer from './src/components/app-container'
import Navigator from './src/'
import * as firebase from '@react-native-firebase/app'
import { initializeApp } from 'firebase/app';

export default function App() {
  return (
    <AppContainer>
      <Navigator />
    </AppContainer>
  )
}

const firebaseConfig = {
  apiKey: "AIzaSyAbaycYdbSmccNfI9ac6eV00b_QfJq81cY",
  authDomain: "noor-620e6.firebaseapp.com",
  projectId: "noor-620e6",
  storageBucket: "noor-620e6.appspot.com",
  messagingSenderId: "352731035682",
  appId: "1:352731035682:web:fb887f42b529497b3e327b"
};

initializeApp(firebaseConfig)
