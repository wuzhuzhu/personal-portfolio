import { extendBaseTheme } from '@chakra-ui/react'
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import chakraTheme from '@chakra-ui/theme'

const { Button } = chakraTheme.components


// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    primary: '#0b1e5b', // deep blue text
    lavender: 'e7e7fd', // pale blue bg
    secondary: '#7fb6ob', // vivid green
    pearl: 'F7F8F2', // light green
  },
}


const theme = extendBaseTheme({
  components: {
    Button,
  },
})

export default theme
