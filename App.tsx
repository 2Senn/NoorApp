import React, {useState, useEffect} from 'react';
import { ActivityIndicator, FlatList, SafeAreaView } from 'react-native';
import AppContainer from './src/components/app-container';
import Main from './src/screens/main-screen'
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>HOME</Text>
  </Layout>
);

export default () => (
    <AppContainer>
      <Main />
    </AppContainer>   
)


/*
export default function App() {
   
  return );
}
*/


