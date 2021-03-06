import { extendTheme } from 'native-base'

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light'
}

const colors = {
  primary: {
    25:'#EAE5D9',
    50:'#e9f1fd',
    75:'#19437D',
    100:"#a0d0c6",
    150:"#DDBAB1",
    200:"#0e6767",
    250:"#f0d5cc",
    300:"#976368",
    350:'#e1a998',
    400:'#25283D',
    450:'#FFCB47',
    500:'#D8D2E1',
    550:'#F2913B',
    600:'#E4572E',
    650:'#11001C',
    700:'#161718',
  }
}

export default extendTheme({ config, colors })
