import { Text } from "@chakra-ui/react"

import fonts from "@/utils/fonts"

export const H1 = ({ children, ...rest }) => (
  <Text className={fonts.heptaSlab.className} fontSize="8xl">
    {children}
  </Text>
)

export const H2 = ({ children, ...rest }) => (
  <Text className={fonts.heptaSlab.className} fontSize="6xl">
    {children}
  </Text>
)

export const H3 = ({ children, ...rest }) => (
  <Text className={fonts.heptaSlab.className} fontSize="5xl">
    {children}
  </Text>
)
