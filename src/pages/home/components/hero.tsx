import React, { memo } from "react"
import { Hepta_Slab } from "next/font/google"
import { Icon, Button, HStack, Text, VStack } from "@chakra-ui/react"
import { GrApple, GrAndroid } from "react-icons/gr"
import { motion } from "framer-motion"

import { staggerChildVariants, staggerParentVariants } from "@/utils/framer-variants"

// If loading a variable font, you don't need to specify the font weight
const heptaSlab = Hepta_Slab({ subsets: ["latin"] })

const HeroBtn = ({ icon, text }) => {
  return (
    <Button
      leftIcon={<Icon h="8" w="8" as={icon} />}
      size="2xl"
      py="6"
      px="12"
      borderRadius="full"
      bg="cucumber.150"
      color="steelGray.800"
      _hover={{
        color: "steelGray.50",
        backgroundColor: "steelGray.700",
      }}
    >
      <VStack justify="center" spacing={0} align="start" ml="2">
        <Text color="steelGray.300" fontSize="sm">
          Get on The
        </Text>
        <Text>{text}</Text>
      </VStack>
    </Button>
  )
}

const Hero = () => {
  return (
    <VStack
      as={motion.div}
      display="flex"
      flexDir="column"
      align="flex-start"
      flex="1"
      spacing={8}
      initial="hidden"
      animate="visible"
      variants={staggerParentVariants}
      // @ts-ignore no problem in operation, although type error appears.
      // transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
    >
      <Text
        as={motion.p}
        variants={staggerChildVariants}
        fontSize="5xl"
        className={heptaSlab.className}
      >
        More ways to grow your money
      </Text>
      <Text as={motion.p} variants={staggerChildVariants} fontSize="xl">
        Want to expand your reach? Get access to American and crypto markets with a multi-currency
        account
      </Text>
      <HStack as={motion.div} variants={staggerChildVariants} spacing={4}>
        <HeroBtn icon={GrApple} text="App Store"></HeroBtn>
        <HeroBtn icon={GrAndroid} text="Google Play"></HeroBtn>
      </HStack>
    </VStack>
  )
}

export default memo(Hero)
