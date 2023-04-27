import { H3 } from "@/core/components/typography"
import {
  Box,
  HStack,
  VStack,
  Image,
  Text,
  IconButton,
  Wrap,
  Link,
  Flex,
  useBreakpointValue,
  Collapse,
  Button,
  Show,
  Hide,
} from "@chakra-ui/react"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import React from "react"
import { Logo } from "../layout/header"
import { pagePaddingW } from "@/core/theme"
import { BREAK_POINTS } from "@/utils/constants"
import { useRouter } from "next/router"

export const ExternalLink = () => {
  return (
    <VStack spacing="4" align="flex-start">
      <Text fontSize={["lg", null, "xl"]}>Category</Text>
      <Link fontSize={["md", null, "lg", "xl"]} color="steelGray.500">
        test
      </Link>
      <Link fontSize={["md", null, "lg", "xl"]} color="steelGray.500">
        test
      </Link>
      <Link fontSize={["md", null, "lg", "xl"]} color="steelGray.500">
        test
      </Link>
    </VStack>
  )
}

// todo: add icon button link
const Footer = () => {
  const variants = useBreakpointValue({
    ...BREAK_POINTS,
  })
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME
  const [show, setShow] = React.useState(false)

  const handleToggle = () => setShow(!show)

  return (
    <Box my="25" w="full" px={pagePaddingW}>
      <VStack spacing={[6, null, 8, 12]}>
        <HStack w="full">
          <Flex
            w="full"
            flexDir={["column", null, "row"]}
            justify="space-between"
            align="flex-start"
          >
            <Flex align="flex-start" flexDir={["row", null, "column"]}>
              <VStack align="flex-start">
                <H3>Walter Wu</H3>
                <Text fontSize={["md", null, "lg", "xl"]} color="steelGray.700">
                  Responsive: {variants?.name}
                </Text>
              </VStack>
              <HStack mt={[0, null, 6]} ml={[4, null, 0]} justify="center">
                <IconButton
                  bgColor="transparent"
                  color="steelGray.700"
                  variant="outline"
                  aria-label="Call Segun"
                  size="lg"
                  icon={<FaLinkedinIn />}
                  onClick={() => window.open("https://www.linkedin.com/in/walterfe/", "_blank")}
                />
                <IconButton
                  mt="4"
                  bgColor="transparent"
                  color="steelGray.700"
                  variant="outline"
                  aria-label="Call Segun"
                  size="lg"
                  icon={<FaGithub />}
                  onClick={() => window.open("https://github.com/wuzhuzhu", "_blank")}
                />
              </HStack>
            </Flex>

            <HStack
              w={["full", null, "auto"]}
              justify="space-between"
              spacing={[0, null, 12]}
              mt={[6, null, 0]}
            >
              <ExternalLink></ExternalLink>
              <ExternalLink></ExternalLink>
              <ExternalLink></ExternalLink>
            </HStack>
          </Flex>
        </HStack>

        <Box borderTop="1px solid" borderTopColor="steelGray.300" pt={[6, null, 8, 12]}>
          <Show below="md">
            <Collapse startingHeight={50} in={show}>
              <LegalStatementFooter siteName={siteName} />
            </Collapse>
            <Button variant="outline" size="sm" onClick={handleToggle} mt="1rem">
              Show {show ? "Less" : "More"}
            </Button>
          </Show>
          <Hide below="md">
            <LegalStatementFooter siteName={siteName} />
          </Hide>
          <Text mt={[4, null, 6, 8]}>© Copyright 2023, {siteName}. All rights reserved.</Text>
        </Box>
      </VStack>
    </Box>
  )
}

const LegalStatementFooter = ({ siteName }) => {
  return (
    <Text lineHeight="tall" color="steelGray.200">
      Intellectual Property Rights: All content on this website, including but not limited to text,
      images, graphics, logos, and design elements, is the property of {siteName}
      or its content suppliers and protected by international copyright laws. Reproduction,
      distribution, or transmission of any content on this site is strictly prohibited without the
      express written consent of {siteName}. <br />
      External Links: This website may contain links to external sites. {siteName} is not
      responsible for the content, privacy policies, or practices of any third-party websites. Users
      are encouraged to read the privacy policies of any external sites they visit.
      <br />
      Disclaimer: The information provided on this website is for general informational purposes
      only. While
      {siteName} strives to keep the information up to date and accurate, {siteName} makes no
      representations or warranties of any kind, express or implied, about the completeness,
      accuracy, reliability, suitability, or availability of the information, products, or services
      contained on the website. Any reliance placed on such information is strictly at the
      user`&apos;`s own risk. <br />
      Limitation of Liability: In no event shall {siteName} be liable for any loss or damage,
      including without limitation, indirect or consequential loss or damage, arising out of or in
      connection with the use of this website. <br />
      Governing Law: The use of this website and any disputes arising out of such use are subject to
      the laws of China.
    </Text>
  )
}

export default Footer
