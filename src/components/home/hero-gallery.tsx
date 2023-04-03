import { usePageParallax, useParallax } from "@/utils/hooks"
import { Box, Flex, HStack } from "@chakra-ui/react"
import { motion, useScroll } from "framer-motion"
import { type } from "os"
import { memo } from "react"
import { CImage } from "../shared/chakra-wrapped"
import Frame from "./frame"
import hero1Pic from "~/images/frames/hero1.png"
import hero2Pic from "~/images/frames/hero2.png"
import {
  showUpVariants,
  staggerChildVariants,
  staggerParentVariants,
} from "@/utils/framer-variants"

const HeroGallery = () => {
  const y1 = usePageParallax(-400)
  const y2 = usePageParallax(-800)
  return (
    <HStack
      spacing="-4"
      flex={1}
      justify="center"
      as={motion.div}
      initial="hidden"
      animate="visible"
      variants={staggerParentVariants}
    >
      <motion.div style={{ y: y1 }} variants={showUpVariants}>
        <Frame
          y={-20}
          shadow="xl"
          w={{ base: "150px", lg: "200px" }}
          h={{ base: "240px", lg: "320px" }}
        >
          <CImage
            w={{ base: "150px", lg: "200px" }}
            h={{ base: "240px", lg: "320px" }}
            alt="A portrait handsome guy with glasses, background with concept of AI, coin, web, Monochromatic, Watercolor Painting, pencil, Children’s Drawing, Outlined, style of Ushio Shinohara"
            src={hero1Pic}
          ></CImage>
        </Frame>
      </motion.div>

      <motion.div style={{ y: y2 }} variants={showUpVariants}>
        <Frame
          y={60}
          shadow="2xl"
          w={{ base: "150px", lg: "200px" }}
          h={{ base: "240px", lg: "320px" }}
        >
          <CImage
            w={{ base: "150px", lg: "200px" }}
            h={{ base: "240px", lg: "320px" }}
            alt="Todo"
            src={hero2Pic}
          ></CImage>
        </Frame>
      </motion.div>
    </HStack>
  )
}

export default HeroGallery
