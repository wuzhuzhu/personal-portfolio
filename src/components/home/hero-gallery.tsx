import { usePageParallax, useParallax } from "@/utils/hooks"
import { Box, Flex, HStack } from "@chakra-ui/react"
import { motion, useScroll } from "framer-motion"
import { type } from "os"
import { memo } from "react"

type FrameProps = {
  y?: number | string
  shadow?: number | string
  h?: number | string
  w?: string
}

export const Frame = memo(({ y = 0, shadow = "none", h = "80", w = "200px" }: FrameProps) => {
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
})

const HeroGallery = () => {
  const y1 = usePageParallax(-300)
  const y2 = usePageParallax(-500)
  return (
    <HStack spacing="2" flex={1} justify="center">
      <motion.div style={{ y: y1 }}>
        <Frame y="-50" shadow="xl"></Frame>
      </motion.div>

      <motion.div style={{ y: y2 }}>
        <Frame y="20" shadow="5xl"></Frame>
      </motion.div>
    </HStack>
  )
}

export default HeroGallery
