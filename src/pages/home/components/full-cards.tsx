import fonts from "@/utils/fonts"
import { Box, Center, VStack, Text, HStack } from "@chakra-ui/react"
import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion"
import React, { useRef } from "react"

import { Frame } from "./hero-gallery"

const cards = [
  {
    title: "Management Maestro",
    description:
      "Empowering teams with a decade of experience in tech team management. Demonstrated ability to lead, motivate, and expand development teams at renowned companies like Alibaba and Meituan. A proven track record in overseeing high-traffic projects with millions of daily active users.",
  },
  {
    title: "AI, Web3 & Fullstack Visionary",
    description:
      "Harnessing the power of cutting-edge technologies to create innovative solutions. Skilled in AI tools, Web3, Solidity, AWS, and GraphQL/Prisma, I seamlessly integrate multiple layers of technology to deliver seamless, high-performance web applications.",
  },
  {
    title: "Frontend Virtuoso & Design Connoisseur",
    description:
      "Crafting engaging user experiences by blending technical mastery and artistic flair. With expertise in cross-platform frontend engineering, React-native reanimated2, framer motion, and a keen eye for contemporary design, I create visually stunning, high-performance interfaces for various devices and platforms. My passion for animation and motion adds an extra layer of sophistication and dynamism to each project, delivering captivating experiences that delight users.",
  },
]

type CardProps = {
  title: string
  description: string
  i: number
}
const Card = ({ title, description, i }: CardProps) => {
  return (
    <Center
      as={motion.div}
      w="100vw"
      h="100vh"
      py="12"
      px="6"
      zIndex={i}
      // @ts-ignore
      sx={{ position: "-webkit-sticky", /* Safari */ position: "sticky", top: "0" }}
    >
      <HStack w="full" h="full" bg="purple.100" borderRadius="80" justify="center">
        <VStack flex={1} align="center">
          <Box>
            <Text
              className={fonts.heptaSlab.className}
              maxW="460px"
              fontSize="3xl"
              fontWeight="semibold"
            >
              {title}
            </Text>
            <Text maxW="460px" mt="4">
              {description}
            </Text>
          </Box>
        </VStack>
        <Center flex={1}>
          <Frame h="500px" w="350px"></Frame>
        </Center>
      </HStack>
    </Center>
  )
}

const FullCards = () => {
  const cardsRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: cardsRef })
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  return (
    <VStack as={motion.div} ref={cardsRef} position="relative">
      <Box
        as={motion.div}
        border="5px solid"
        borderColor="red"
        style={{ position: "fixed", left: 0, top: "50%", scaleY, zIndex: 10, width: 5 }}
      >
        123123
      </Box>
      {cards.map((card, i) => (
        <Card {...card} i={i} key={`card-${i}`} />
      ))}
    </VStack>
  )
}

export default FullCards
