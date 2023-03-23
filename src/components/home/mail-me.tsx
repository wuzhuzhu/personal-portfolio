import { Heading, HStack, Image, VStack, Text } from "@chakra-ui/react"
import React from "react"

const MailMe = () => {
  return (
    <HStack w="full" py="100px" borderRadius="full" bg="purple.100">
      <VStack flex="1">
        <Heading>title</Heading>
        <Text>content</Text>
      </VStack>
      <Image src="/images/hero-bg.png" alt="mail me image"></Image>
    </HStack>
  )
}

export default MailMe
