import { extendTheme } from 'native-base'

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light'
}

const redColors = {

  100: "#FCDCCC",
  200: "#F9B39A",
  300: "#EF7D66",
  400: "#DF4D3F",
  500: "#CB0909",
  600: "#AE0615",
  700: "#92041D",
  800: "#750220",
  900: "#610122",
}

export default extendTheme({ config, redColors})
