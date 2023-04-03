import { H2, H3, H5 } from "@/core/components/typography"
import { pagePaddingW } from "@/core/theme"
import fonts from "@/utils/fonts"
import {
  Box,
  Center,
  VStack,
  Text,
  HStack,
  useBreakpointValue,
  Flex,
  Container,
  // types
  LayoutProps,
} from "@chakra-ui/react"
import { motion, MotionValue, useInView, useScroll, useSpring, useTransform } from "framer-motion"
import React, { useRef } from "react"
import { CImage } from "../shared/chakra-wrapped"
import { StaticImageData } from "next/image"
import Frame from "./frame"

import visionPic from "~/images/frames/vision.png"
import managementPic from "~/images/frames/crew.png"
import deskPic from "~/images/frames/desk.png"
import Blank from "../shared/spacer"

const cards = [
  {
    title: "Management Maestro",
    description:
      "A decade of experience leading and expanding tech teams at renowned companies. Expertise in managing high-traffic projects with millions of daily users.",
    imgSrc: managementPic,
    w: ["200px", "300px", "350px", "450px", null, "600px"],
    h: ["150px", "225px", "260px", "340px", null, "450px"],
    alt: "A portrait handsome guy with glasses, background with concept of AI, coin, web, Monochromatic, Watercolor Painting, pencil, Children’s Drawing, Outlined, style of Ushio Shinohara",
  },
  {
    title: "AI, Web3 & Fullstack Visionary",
    description:
      "Proficient in AI tools, Web3, Solidity, AWS, and GraphQL/Prisma. Delivering seamless, high-performance web applications with cutting-edge technologies.",
    imgSrc: visionPic,
    h: ["200px", "300px", "400px", "500px"],
    w: ["150px", "225px", "300px", "350px"],
    alt: "A sketch of world famous web designer desk on a studio, Monochromatic, Watercolor Painting, pencil, Children’s Drawing, Outlined, soft ink stroke, style of Ushio Shinohara, --no detail child spaceship",
  },
  {
    title: "Frontend Virtuoso & Design Connoisseur",
    description:
      "Expert in frontend technologies, crafting engaging user experiences. Mastering cross-platform engineering, React-native reanimated2, and framer motion for visually stunning interfaces.",
    imgSrc: deskPic,
    w: ["200px", "300px", "350px", "450px", null, "600px"],
    h: ["150px", "225px", "260px", "340px", null, "450px"],
    alt: "A simple sketch of world famous web designer desk on a studio, Monochromatic, Watercolor Painting, Children’s Drawing, Outlined, soft ink wide stroke, style of Ushio Shinohara",
  },
]

const baseVariant = {
  navigation: "list",
  miniMenu: true,
  iconDisplay: "inline-block",
  hireDisplay: "none",
  wrapperPosition: "fixed",
  showLogin: false,
}
const mdVariant = {
  navigation: "menu",
  miniMenu: false,
  iconDisplay: "none",
  hireDisplay: "flex",
  wrapperPosition: "relative",
  showLogin: true,
}

type CardProps = {
  title: string
  description: string
  i: number
  imgSrc: StaticImageData
  scrollYProgress: MotionValue<number>
  h: LayoutProps["h"]
  w: LayoutProps["w"]
  alt: string
}
const Card = ({ title, description, i, scrollYProgress, imgSrc, h, w, alt }: CardProps) => {
  const yInputOffset = [(i + 1) * (1 / 3), (i + 3) * (1 / 3)]
  const yInput = [i * (1 / 3), (i + 1) * (1 / 3)]
  const scale = useTransform(scrollYProgress, yInputOffset, [1, 0.9])
  const opacity = useTransform(scrollYProgress, yInputOffset, [1, 0.5])
  const y = useTransform(scrollYProgress, yInput, [0, 20 * i])
  /*   const background = useTransform(scrollYProgress, yInputOffset, [
    "var(--chakra-colors-purple-100)",
    "var(--chakra-colors-purple-50)",
  ]) */
  const variants = useBreakpointValue({ base: baseVariant, md: mdVariant })
  return (
    <Center
      mt={[-20, null, 0]}
      as={motion.div}
      w="full"
      h={["70vh", null, "100vh"]}
      py={[10, null, 16]}
      zIndex={i}
      // @ts-ignore mixed type
      style={{ scale, transformOrigin: "top center" }}
      // @ts-ignore mixed type
      sx={{ position: "-webkit-sticky", /* Safari */ position: "sticky", top: "0" }}
    >
      <Flex
        align="center"
        direction={["column-reverse", null, "row"]}
        justify="space-around"
        as={motion.div}
        w="full"
        h="full"
        style={{
          // @ts-ignore mixed type
          opacity,
          y,
          // background,
        }}
        bg="purple.100"
        borderRadius={[20, null, "60", "80"]}
        shadow="md"
        overflow="hidden"
      >
        <Blank />
        <VStack flex={[0, null, 1]} align="center" px={[4, null, 4, 6]}>
          <Container mt={[6, null, 0]}>
            {/* <motion.p>{scrollYProgress}</motion.p> */}
            <H5
              className={fonts.heptaSlab.className}
              maxW={["100%", null, null, "80%"]}
              fontSize="3xl"
              fontWeight="semibold"
            >
              {title}
            </H5>
            <Text maxW={["100%", null, null, "80%"]} mt={[2, null, 4]}>
              {description}
            </Text>
          </Container>
        </VStack>
        <Center flex={[0, null, 1]}>
          <Frame h={h} w={w} mb={[4, null, 0]}>
            <CImage
              h={h}
              w={w}
              // todo: add all pics alt
              alt={alt}
              src={imgSrc}
            ></CImage>
          </Frame>
        </Center>
        <Blank />
      </Flex>
    </Center>
  )
}

const FullCards = () => {
  const cardsRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: cardsRef, offset: ["start end", "end"] })
  return (
    <VStack
      as={motion.div}
      ref={cardsRef}
      position="relative"
      mx="-4"
      w="full"
      py={[4, null, 6, 8, 10, 12]}
      px={pagePaddingW}
    >
      {cards.map((card, i) => (
        <Card {...card} i={i} key={`card-${i}`} scrollYProgress={scrollYProgress} />
      ))}
    </VStack>
  )
}

export default FullCards
