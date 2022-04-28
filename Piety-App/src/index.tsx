import 'react-native-gesture-handler'   
import React from 'react' 
import { createDrawerNavigator } from '@react-navigation/drawer'
import DefaultScreen from './screens/main-screen'
import Sidebar from './components/sidebar'
import QuranScreen from './screens/quran-screen'
import DetailScreen from './screens/quran-detail'
import MushafScreen from './screens/mushaf-screen'
import HadithScreen from './screens/hadith'
import HadithDetail from './screens/hadith-detail'
import AboutScreen from './screens/about-screen'
import TaskScreen from './screens/task-screen'

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
      <Drawer.Screen name="Quran" component={QuranScreen} />
      <Drawer.Screen name="Detail" component={DetailScreen} />
      <Drawer.Screen name="Mushaf" component={MushafScreen} />
      <Drawer.Screen name="Hadith" component={HadithScreen} />
      <Drawer.Screen name="HDetail" component={HadithDetail} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Tasks"  component={TaskScreen} />
    </Drawer.Navigator>
  )
}

export default App

