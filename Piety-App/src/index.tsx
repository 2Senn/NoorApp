import 'react-native-gesture-handler'   
import React, { useState } from 'react' 
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import DefaultScreen from './screens/main-screen'
import Sidebar from './components/sidebar'
import QuranScreen from './screens/quran-screen'
import DetailScreen from './screens/quran-detail'
import MushafScreen from './screens/mushaf-screen'
import HadithScreen from './screens/hadith'
import HadithDetail from './screens/hadith-detail'
import AboutScreen from './screens/about-screen'
import TaskScreen from './screens/task-screen'
import AuthScreen from './screens/authentication-screen'
import Animated from 'react-native-reanimated'
import { View } from 'native-base'
import CoolSwipe from './components/cool-swipe'

const Drawer = createDrawerNavigator()



export default function App(){
  
  
  return (
    <View flex={1}>
      <Drawer.Navigator 
        initialRouteName = "Home"
        
        drawerContent={(props) => {
          return(
            <Sidebar {...props} />
          )
        }}
        screenOptions={{
          drawerType: 'slide',
          headerShown: false,
          overlayColor: 'transparent',
          drawerStyle: {
            flex: 1,
            backgroundColor: 'transparent'
          },
          sceneContainerStyle: {
            backgroundColor: 'transparent'
          },
        }}
      >
        <Drawer.Screen name="Login" component={AuthScreen} />
        <Drawer.Screen name="Pray" component={DefaultScreen} />
        <Drawer.Screen name="Quran" component={QuranScreen} />
        <Drawer.Screen name="Detail" component={DetailScreen} />
        <Drawer.Screen name="Mushaf" component={MushafScreen} />
        <Drawer.Screen name="Hadith" component={HadithScreen} />
        <Drawer.Screen name="HDetail" component={HadithDetail} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Tasks"  component={TaskScreen} />
        <Drawer.Screen name="test" component={CoolSwipe} />
      </Drawer.Navigator>
    </View>
  )
}


