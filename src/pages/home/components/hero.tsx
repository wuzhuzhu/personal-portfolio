import React, { memo } from "react"
import { Hepta_Slab } from "next/font/google"

import { Icon, Button, HStack, Text, VStack } from "@chakra-ui/react"
import { GrApple, GrAndroid } from "react-icons/gr"

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
    <VStack align="flex-start" flex="1" maxW="50%" spacing="8">
      <Text fontSize="5xl" className={heptaSlab.className}>
        More ways to grow your money
      </Text>
      <Text fontSize="xl">
        Want to expand your reach? Get access to American and crypto markets with a multi-currency
        account
      </Text>
      <HStack spacing={4}>
        <HeroBtn icon={GrApple} text="App Store"></HeroBtn>
        <HeroBtn icon={GrAndroid} text="Google Play"></HeroBtn>
      </HStack>
    </VStack>
  )
}

export default memo(Hero)
