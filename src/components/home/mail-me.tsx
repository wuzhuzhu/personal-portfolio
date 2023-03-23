import { H3 } from "@/core/components/typography"
import { TbBrandWechat, TbMail } from "react-icons/tb"
import { Heading, HStack, Image, VStack, Text, Button } from "@chakra-ui/react"
import Link from "next/link"
import React from "react"

const MailMe = () => {
  return (
    <HStack w="full" py="40px" px="150px" borderRadius="full" bg="purple.100">
      <VStack flex="1" align="flex-start" spacing="4">
        <H3>Any questions?</H3>
        <Text fontSize="xl">
          Potential partner or employer interested in exploring collaboration opportunities, I would
          be delighted to discuss how we can work together.
        </Text>
        <HStack spacing="4" mt="8">
          <Link href="mailto:'buaaer@gmail.com'" target="_blank">
            <Button leftIcon={<TbMail />} color="cucumber.500" variant="outline">
              Email
            </Button>
          </Link>
          <Button leftIcon={<TbBrandWechat />} color="cucumber.500" variant="outline">
            229220329
          </Button>
        </HStack>
      </VStack>
      <Image src="/images/hero-bg.png" alt="mail me image"></Image>
    </HStack>
  )
}

export default MailMe
