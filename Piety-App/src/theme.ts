import { extendTheme } from 'native-base'

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light'
}

const colors = {
  primary: {
    50: '#FEDBD0',
    100: '#E1D6C0',
    200: '#E1C0CC',
    300: '#E1C5C0',
    400: '#6B5A44',
    500: '#5578AA',
    600: '#446088',
    700: '#334866',
    800: '#223044',
    900: '#111822'
  }
}

export default extendTheme({ config, colors })
