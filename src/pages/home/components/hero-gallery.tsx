import { Box, Flex, HStack } from "@chakra-ui/react"

export const Frame = ({ y, shadow }) => {
  return (
    <Box
      transform={`translateY(${y}px)`}
      bg="steelGray.800"
      boxShadow={shadow}
      h="80"
      w="200px"
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
