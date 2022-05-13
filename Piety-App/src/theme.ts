import { extendTheme } from 'native-base'

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light'
}

const colors = {
  primary: {
    100:"#a0d0c6",
    200:"#20626f",
    300:"#0e6767",
    400:"#f0d5cc",
    500:"#976368",
    600:'#e1a998'
  }
}

export default extendTheme({ config, colors })
