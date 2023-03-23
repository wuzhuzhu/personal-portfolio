import fonts from "@/utils/fonts"
import { usePageParallax } from "@/utils/hooks"
import { chakra, Box, HStack, Text, Center } from "@chakra-ui/react"
import { motion } from "framer-motion"
import React from "react"
import Marquee from "react-fast-marquee"
import { SKILLS } from "@/utils/constants"

const CMarquee = chakra(Marquee)

export const RibbonItem = ({ text }: { text: String }) => {
  return (
    <Center flex={1} whiteSpace="nowrap" px="6" py="3" bg="purple.100" mr="2" borderRadius="full">
      <Text fontSize="2xl" className={fonts.ptSans.className}>
        {text}
      </Text>
    </Center>
  )
}

const Ribbon = () => {
  const y = usePageParallax(-300)
  return (
    <HStack
      w="94vw"
      spacing="1"
      overflowX="hidden"
      as={motion.div}
      style={{
        y,
        // @ts-ignore
        rotate: -3,
      }}
    >
      <CMarquee pauseOnHover gradientColor={[244, 247, 238]}>
        {SKILLS.map((skill, i) => (
          <RibbonItem text={skill} key={`r-i-${i}`} />
        ))}
      </CMarquee>
    </HStack>
  )
}

export default Ribbon
