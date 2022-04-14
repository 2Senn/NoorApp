import { extendTheme } from 'native-base'

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light'
}

const colors = {

  100: "#FCDCCC",
  150: "#FEDBD0",
  200: "#442C2E",
  250: "#442C2E",
  300: "#EF7D66",
  400: "#DF4D3F",
  500: "#CB0909",
  600: "#AE0615",
  700: "#92041D",
  800: "#750220",
  900: "#263238",
}

export default extendTheme({ config, colors})
