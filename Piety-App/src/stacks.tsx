import AuthScreen from "./screens/authentication-screen";
import { createStackNavigator} from '@react-navigation/stack'
import App from './index' 

const Stack = createStackNavigator()

const Stacks = ({ params }: any) => {
  <Stack.Navigator initialRouteName="Auth">
    <Stack.Screen 
      name="Pray"
      component={App}
      options={{
        headerShown: false,
      }}
      />
  </Stack.Navigator>
}
