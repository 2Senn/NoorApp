import { useNavigation } from "@react-navigation/native"
import { Text } from "native-base"
import { StyleSheet, View } from "react-native"

export const MainComponents = ({ navigation }: any) => {
  
  return(
    <View>
      <Text>...</Text>
    </View>
  )

}
 




const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      padding: 10,
      top: 10,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    header: {
      width: '100%',
      height: '10%',
    },
    box1: {
      width: '100%',
      height: '20%',
      padding: 5,
    },
    box2: {
      width: '100%',
      height: '40%',
      padding: 5,
    },
    box3: {
      width: "100%",
      height: "5%",
      padding: 5,
    },
    inner: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }, 
    minibox: {
      width: '50%',
      height: '15%',
      padding: 10,
    },
    miniInner: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 19,
      fontWeight: "700"
    },
})

export default MainComponents
