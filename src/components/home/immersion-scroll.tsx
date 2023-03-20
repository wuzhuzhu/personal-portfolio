import fonts from "@/utils/fonts"
import { Heading, VStack, Text, Container, HStack } from "@chakra-ui/react"
import React from "react"
import { Frame } from "./hero-gallery"

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
    title: "Meituan - Software Engineering Manager (FE)",
    description:
      "Developed 10+ internal cloud web apps, founded Meituan GraphQL club, and contributed to the Meituan Design system. Member of the Meituan Group Promotion Committee.",
  },
  {
    title: "Alibaba - Software Engineering Manager (FE)",
    description:
      "Led a 20-member front-end team, expanding it by 40% in one year. Developed cross-platform solutions for Eleme Native App, mini-apps, and web. Core player in Alibaba Basketball Team.",
  },
]

const ImmersionScroll = () => {
  return (
    <VStack align="flex-start" spacing="10">
      <Text className={fonts.heptaSlab.className} fontSize="85px" maxW="65%">
        Passionate Tech Expert
      </Text>
      <HStack maxW="80%" spacing="8" align="flex-start">
        <Frame w="260px"></Frame>
        <Container>
          <Text>
            A talented professional with exceptional skills in team management, full-stack
            development, and frontend design. By embracing innovation and driving technological
            advancements, this individual has made significant contributions to leading companies in
            the tech industry.
          </Text>
        </Container>
      </HStack>
      <CareerCards></CareerCards>
    </VStack>
  )
}

const CareerCard = ({ title, description }) => {
  return (
    <VStack w="300px" h="300px" bg="white" borderRadius="10px" p="20px" scrollSnapAlign="start">
      <Heading as="h3" size="md" className={fonts.heptaSlab.className}>
        {title}
      </Heading>
      <Text>{description}</Text>
    </VStack>
  )
}

const CareerCards = () => {
  return (
    <HStack w="600px" overflowX="scroll" overflowY="hidden" scrollSnapType="x mandatory">
      {careerCards.map((card, i) => (
        <CareerCard key={`c-card-${i}`} {...card}></CareerCard>
      ))}
    </HStack>
  )
}

export default ImmersionScroll