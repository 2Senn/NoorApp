import 'react-native-gesture-handler'
import React from 'react' 
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer'
import DefaultScreen from './screens/Default-Screen'
import AboutScreen from './screens/about'
import {useColorModeValue} from 'native-base'
import ToggleTheme from './components/toggle-theme'

const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <Drawer.Navigator 
    initialRouteName = "Home"
    screenOptions={{
    headerShown: false,
    drawerType: 'back',
    drawerActiveBackgroundColor: "#FEDBD0"}}>
      <Drawer.Screen name="Home" component={DefaultScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  )
}

export default App
