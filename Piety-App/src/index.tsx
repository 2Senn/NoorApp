import 'react-native-gesture-handler'   
import React from 'react' 
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer'
import DefaultScreen from './screens/Default-Screen'
import AboutScreen from './screens/about'
import TaskScreen from  './screens/to-do'
import Sidebar from './components/sidebar'
import QuranScreen from './screens/quran-screen'
import HadithCheck from './screens/hadith-check'
import Library from './screens/Library'
import DetailScreen from './screens/detail-screen'
import MushafScreen from './screens/mushaf-screen'
import TestScreen from './screens/test-screen'

const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <Drawer.Navigator 
    initialRouteName = "Home"
    drawerContent={props => <Sidebar {...props} />}
    screenOptions={{
      headerShown: false,
      drawerType: 'back',
      drawerActiveBackgroundColor: "#FEDBD0"
      }}>
      <Drawer.Screen name="Pray" component={DefaultScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Tasks" component={TaskScreen} />
      <Drawer.Screen name="Quran" component={QuranScreen} />
      <Drawer.Screen name="Hadith Checker" component={HadithCheck} />
      <Drawer.Screen name="Library" component={Library} />
      <Drawer.Screen name="Detail" component={DetailScreen} />
      <Drawer.Screen name="Mushaf" component={MushafScreen} />
      <Drawer.Screen name="Test" component={TestScreen} />
    </Drawer.Navigator>
  )
}

export default App
