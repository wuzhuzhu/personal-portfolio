import { Box, Flex, HStack } from "@chakra-ui/react"
import { type } from "os"

type FrameProps = {
  y?: number | string
  shadow?: number | string
  h?: number | string
  w?: string
}

export const Frame = ({ y = 0, shadow = "none", h = "80", w = "200px" }: FrameProps) => {
  return (
    <Box
      transform={`translateY(${y}px)`}
      bg="steelGray.800"
      boxShadow={shadow}
      h={h}
      w={w}
      borderRadius="full"
    >
      {/* hero-gallery */}
    </Box>
  )
}

const HeroGallery = () => {
  return (
    <HStack spacing="2" flex={1} justify="center">
      <Frame y="-50" shadow="xl"></Frame>
      <Frame y="20" shadow="5xl"></Frame>
    </HStack>
  )
}

export default HeroGallery
