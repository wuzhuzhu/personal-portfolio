import { H3 } from "@/core/components/typography"
import { TbBrandWechat, TbMail } from "react-icons/tb"
import { Heading, HStack, Image, VStack, Text, Button, Box } from "@chakra-ui/react"
import Link from "next/link"
import React from "react"
import { pagePaddingW } from "@/core/theme"

const MailMe = () => {
  return (
    <Box px={pagePaddingW}>
      <HStack
        w="full"
        py={[4, 6, 10]}
        px={[8, null, "100px", "150px"]}
        borderRadius={[20, null, "full"]}
        bg="purple.100"
        position={["relative", null, "static"]}
      >
        <VStack flex="1" align="flex-start" spacing="4">
          <H3>Any questions?</H3>
          <Text fontSize={["md", null, "lg", "xl"]}>
            Potential partner or employer interested in exploring collaboration opportunities, I
            would be delighted to discuss how we can work together.
          </Text>
          <HStack spacing="4" mt="8">
            <Link href="mailto:'buaaer@gmail.com'" target="_blank">
              <Button leftIcon={<TbMail />} colorScheme="cucumber" variant="outline">
                Email
              </Button>
            </Link>
            <Button leftIcon={<TbBrandWechat />} colorScheme="cucumber" variant="outline">
              229220329
            </Button>
          </HStack>
        </VStack>
        <Image
          src="/images/hero-bg.png"
          alt="mail me image"
          w={["40vw", null, "auto"]}
          position={["absolute", null, "static"]}
          right={[0, null, "auto"]}
          bottom={[0, null, "auto"]}
          opacity={[0.4, null, 1]}
        ></Image>
      </HStack>
    </Box>
  )
}

export default MailMe
