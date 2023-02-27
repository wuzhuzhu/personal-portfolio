import { extendBaseTheme } from '@chakra-ui/react'
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import chakraTheme from '@chakra-ui/theme'

const { Button } = chakraTheme.components


// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: {
    100: '#e7e7fd', // pale blue bg
    500: '#0b1e5b', // deep blue text
  },
  secondary: {
    100: '#F7F8F2', // light green, for bg
    500: '#7fb6ob', // vivid green, for text
  },
}

const layerStyles = {
  tropicalIndigo:
  {
    50: '#ede6ff',
    100: '#c6b7fc',
    200: '#a088f7', // main
    300: '#7958f3',
    400: '#5429ef',
    500: '#3b10d5',
    600: '#2e0ca6',
    700: '#200877',
    800: '#12044a',
    900: '#06011d',
  },
  spaceCadet:
  {
    50: '#f0f0fa',
    100: '#d3d1e0',
    200: '#b5b3ca', // bg
    300: '#9894b5',
    400: '#7a769f',
    500: '#615d86',
    600: '#4b4768',
    700: '#36334b',
    800: '#201f2e', // main - text
    900: '#0b0913',
  },
  green:
  {
    50: '#f5fbe4',
    100: '#e2efc1',
    200: '#d0e49b', // tea green
    300: '#bdd974',
    400: '#abce4e',
    500: '#92b435', // apple green
    600: '#718c28',
    700: '#50641b',
    800: '#2f3c0d',
    900: '#0f1500',
  },
  appleGreen:

}


const theme = extendBaseTheme({
  components: {
    Button,
  },
  colors,
  layerStyles
})

export default theme
