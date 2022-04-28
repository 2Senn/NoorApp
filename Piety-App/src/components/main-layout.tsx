import { useNavigation } from "@react-navigation/native"
import { Button, Icon, IconButton } from "native-base"
import React, { useCallback } from "react"
import { View, Text, StyleSheet, ImageBackground, FlatList } from 'react-native'
import Cards from "./card-component"
import Panel from "./navigation-panel"
import PrayTimes from "./prayers"
import { Feather } from "@expo/vector-icons"

export const MainLayout = () => {
  
  const navigation = useNavigation<any>()
  
  const seperator = () => {
      return(
        <View style={{width: 5}} />

      )
  }

    return(
      <View style={styles.container}> 
        <View style={styles.box1}>
          <View style={styles.inner}>
            <PrayTimes /> 
          </View>
        </View>
        <View style={styles.box1}>
          <View style={styles.inner}>
             <FlatList 
                data={Panel}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle=
                  {{
                    height: 50, 
                    alignSelf: "center", 
                    justifyContent: "center"
                  }}
                ItemSeparatorComponent={seperator}
                horizontal
                renderItem={({item}) => {
                    return(
                      <Button
                        borderRadius={75}
                        size="sm" 
                        bg={"black"}
                        onPress={() => navigation.navigate(item.title)}
                        _pressed={{
                          bg: "white"
                        }}
                        _text={{
                          color: "white"
                        }}
                        variant="solid"
                        leftIcon={<Icon as={Feather} name={item.icon} size="sm" opacity={0.5} />}
                      >
                      <Text style={{color: 'white'}}>{item.title}</Text>
                      </Button>
                    )
                }}
              />
          </View>
        </View>
        <View style={styles.box2}>
          <View style={styles.inner}>
            <Cards />  
          </View>
        </View>
      </View>

    )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '85%',
      padding: 10,
      top: 10,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    box1: {
      width: '100%',
      height: '20%',
      padding: 5,
    },
    box2: {
      width: '100%',
      height: '45%',
      padding: 5,
    },
    inner: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
})

export default MainLayout
