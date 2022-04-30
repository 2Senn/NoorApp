import { Image, Text } from "native-base"
import { Dimensions, StyleSheet, View } from "react-native"

const {width, height} = Dimensions.get('screen')

export const ButtonCarousel = (item: any) => {
  return(
    <View style={styles.card}>
      <Image style={styles.image}/>
      <View style={styles.text}>
        <Text style={styles.title}>Title</Text>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  card: {
    flex: 1,
    width: width - 20,
    height: height / 3,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
        width: 0.5,
        height: 0.5,
      },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5
  },
  text: {
      position: 'absolute',
      bottom: 10,
      margin: 10,
      left: 5,
  },
  image: {
    width: width - 20,
    height: height / 3,
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 22,
    shadowColor: '#000',
    shadowOffset: {
        width: 0.8,
        height: 0.8,
      },
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: 'bold',
    elevation: 5,
  },
  desciption: {
    color: 'white',
    fontSize: 12,
    shadowColor: '#000',
    shadowOffset: {
        width: 0.8,
        height: 0.8,
      },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
})
