import { H1, H2, H6 } from "@/core/components/typography"
import { pagePaddingW } from "@/core/theme"
import fonts from "@/utils/fonts"
import {
  Heading,
  VStack,
  Text,
  Container,
  HStack,
  Image,
  Box,
  Center,
  Flex,
} from "@chakra-ui/react"
import React from "react"
import Frame, { ShadowFrame } from "./frame"
import styles from "../../styles/immersion-scroll.module.css"
import mePic from "~/images/frames/me.png"
import { CImage } from "../shared/chakra-wrapped"

const careerCards = [
  {
    title: "Teamstats - Founder/CTO",
    description:
      "Founded Teamstats, providing event services for non-official sports events. Developed on-site scoring systems, user-end interfaces, and live streaming capabilities.",
  },
  {
    title: "MI.com/ihealth - Fullstack Developer",
    description:
      "Key developer of intelligent medical hardware projects, leading technology transformation and exploration in health tech.",
  },
  {
    title: "8win - Frontend Director",
    description:
      "Led front-end architecture for 8win Sports Betting. Collaborated with JD, designed the main framework, and built an SSR framework based on Next.js.",
  },
  {
    title: "Meituan - Software Engineering Manager",
    description:
      "Developed 10+ internal cloud web apps, founded Meituan GraphQL club, and contributed to the Meituan Design system. Member of the Meituan Group Promotion Committee.",
  },
  {
    title: "Alibaba - Software Engineering Manager",
    description:
      "Led a 20-member front-end team, expanding it by 40% in one year. Developed cross-platform solutions for Eleme Native App, mini-apps, and web. Core player in Alibaba Basketball Team.",
  },
]

const ImmersionScroll = () => {
  return (
    <Box px={pagePaddingW} w="full">
      <H1>Passionate</H1>
      <HStack spacing="4" mt={[8, null, 12, 16]}>
        <ShadowFrame>
          <Image src="/images/waving.png" alt="waving"></Image>
        </ShadowFrame>
        <H1>Tech Expert</H1>
      </HStack>

      <Box
        display={["block", null, "flex"]}
        flexDir={["column", null, "row"]}
        style={{ alignItems: "flex-start" }}
        textAlign="center"
        mt={[8, null, 12, 16]}
      >
        <Box>
          <Frame
            w={["260px", null, "400px"]}
            h={["290px", null, "480px"]}
            flex={[0, 0, 1]}
            mr={[0, 0, 5, 10]}
            mb={[5, null, 0]}
          >
            <CImage
              w="85%"
              h="85%"
              src={mePic}
              alt="A portrait handsome guy with glasses, background with concept of AI, coin, web, Monochromatic, Watercolor Painting, pencil, Children’s Drawing, Outlined, style of Ushio Shinohara"
            ></CImage>
          </Frame>
        </Box>
        <Box>
          <Text fontSize="lg" textAlign="left">
            A talented professional with exceptional skills in team management, full-stack
            development, and frontend design. By embracing innovation and driving technological
            advancements, this individual has made significant contributions to leading companies in
            the tech industry.
          </Text>
        </Box>
      </Box>
      <Box maxW="100%" overflowX="auto" mt={[8, null, 12, 16]}>
        <CareerCards></CareerCards>
      </Box>
    </Box>
  )
}

const CareerCard = ({ title, description }) => {
  return (
    <VStack
      minW="250px"
      h="300px"
      bg="purple.50"
      borderRadius="10px"
      p="20px"
      scrollSnapAlign="start"
    >
      <H6>{title}</H6>
      <Text>{description}</Text>
    </VStack>
  )
}

const CareerCards = () => {
  return (
    <HStack
      overflowX="scroll"
      overflowY="hidden"
      scrollSnapType="x mandatory"
      className={styles.cards}
    >
      {careerCards.reverse().map((card, i) => (
        <CareerCard key={`c-card-${i}`} {...card}></CareerCard>
      ))}
    </HStack>
  )
}

export default ImmersionScroll
