import { Text } from "@chakra-ui/react"

import fonts from "@/utils/fonts"

export const H1 = ({ children, ...rest }) => (
  <Text className={fonts.heptaSlab.className} fontSize={["4xl", "8xl"]}>
    {children}
  </Text>
)

export const H2 = ({ children, ...rest }) => (
  <Text className={fonts.heptaSlab.className} fontSize="6xl">
    {children}
  </Text>
)

export const H3 = ({ children, ...rest }) => (
  <Text className={fonts.heptaSlab.className} fontSize={["3xl", null, "4xl", "5xl", "6xl"]}>
    {children}
  </Text>
)

export const H5 = ({ children, ...rest }) => (
  <Text
    className={fonts.heptaSlab.className}
    fontSize={["xl", null, "2xl", "2xl", "3xl"]}
    fontWeight="semibold"
  >
    {children}
  </Text>
)

export const H6 = ({ children, ...rest }) => (
  <Text
    className={fonts.heptaSlab.className}
    fontSize={["sm", null, "md", "lg", "lg"]}
    fontWeight="semibold"
  >
    {children}
  </Text>
)
