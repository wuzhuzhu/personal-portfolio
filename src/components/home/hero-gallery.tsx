import { usePageParallax, useParallax } from "@/utils/hooks"
import { Box, Flex, HStack } from "@chakra-ui/react"
import { motion, useScroll } from "framer-motion"
import { type } from "os"
import { memo } from "react"
import Frame from "./frame"
import Image from "next/image"
import hero1 from "~/images/frames/hero1.png"
import { CImage } from "../shared/chakra-wrapped"

const HeroGallery = () => {
  const y1 = usePageParallax(-500)
  const y2 = usePageParallax(-800)
  return (
    <HStack spacing="-4" flex={1} justify="center">
      <motion.div style={{ y: y1 }}>
        <Frame
          y={-20}
          shadow="xl"
          w={{ base: "150px", lg: "200px" }}
          h={{ base: "240px", lg: "320px" }}
        >
          <CImage
            fill="contain"
            src={hero1}
            alt="A portrait handsome guy with glasses, background with concept of AI, coin, web, Monochromatic, Watercolor Painting, pencil, Children’s Drawing, Outlined, style of Ushio Shinohara"
          ></CImage>
        </Frame>
      </motion.div>

      <motion.div style={{ y: y2 }}>
        <Frame
          y={60}
          shadow="3xl"
          w={{ base: "150px", lg: "200px" }}
          h={{ base: "240px", lg: "320px" }}
        ></Frame>
      </motion.div>
    </HStack>
  )
}

export default HeroGallery
