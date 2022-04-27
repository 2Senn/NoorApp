import React from 'react' 
import { Text, View} from 'native-base'
import { StyleSheet, Animated } from 'react-native'

export default class AnimatedText extends React.Component<any, any> {
  animeValues = []
  constructor(props: any){
    super(props)
    
    const arrText = props.content.trim().split(' ')

    arrText.forEach((_: any, i: any) => {
      this.animeValues[i] = new Animated.Value(0) //for each word we start at value 0 
    })
    this.arrText = arrText
  }

  componentDidMount() {
    this.animated()
  }
  
  animated = (toValue = 1) => {
    const animes = this.arrText.map((_: any, i: any) => {
      return Animated.timing(this.animeValues[i], {
        toValue,
        duration: this.props.duration,
        useNativeDriver: true,
      })
    })

    Animated.stagger(this.props.duration / 5, animes).start(() => {
      if(this.props.onFinish) {
        this.props.onFinish()
      }
    })
  }

  render(){
    return(
      <View style={[this.props.style, styles.wrap]}>
        { this.arrText.map((word: string, index: any) => {
          return(
            <Animated.Text 
              style={[this.props.textStyle, {
                opacity: this.animeValues[index],
                transform: [{
                  translateY: Animated.multiply(
                    this.animeValues[index],
                    new Animated.Value(-5)
                  )
                }]
              }
              ]}
              key={`${word}=${index}`}
            >
              {word}
              { `${index < this.arrText.length ? ' ' : ''}`}
            </Animated.Text>
          )
        })}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
})
