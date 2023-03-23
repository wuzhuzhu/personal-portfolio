import { H3 } from "@/core/components/typography"
import { Box, HStack, VStack, Image, Text, IconButton, Wrap, Link } from "@chakra-ui/react"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import React from "react"
import { Logo } from "../layout/header"

export const ExternalLink = () => {
  return (
    <VStack spacing="4" align="flex-start">
      <Text fontSize="xl">slakdfjl</Text>
      <Link fontSize="xl" color="steelGray.500">
        test
      </Link>
      <Link fontSize="xl" color="steelGray.500">
        test
      </Link>
      <Link fontSize="xl" color="steelGray.500">
        test
      </Link>
    </VStack>
  )
}

// todo: add icon button link
const Footer = () => {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME
  return (
    <Box my="25" w="full">
      <VStack spacing="12">
        <HStack w="full">
          <HStack w="full" justify="space-between" align="flex-start">
            <VStack align="flex-start" spacing="8">
              <H3>Walter Wu</H3>
              <Wrap>
                <IconButton
                  bgColor="transparent"
                  color="steelGray.700"
                  variant="outline"
                  aria-label="Call Segun"
                  size="lg"
                  icon={<FaLinkedinIn />}
                />
                <IconButton
                  mt="4"
                  bgColor="transparent"
                  color="steelGray.700"
                  variant="outline"
                  aria-label="Call Segun"
                  size="lg"
                  icon={<FaGithub />}
                />
              </Wrap>
            </VStack>

            <HStack spacing="4">
              <ExternalLink></ExternalLink>
              <ExternalLink></ExternalLink>
              <ExternalLink></ExternalLink>
            </HStack>
          </HStack>
        </HStack>
        <Box borderTop="1px solid" borderTopColor="steelGray.300" pt="12">
          <Text lineHeight="tall" color="steelGray.500">
            Intellectual Property Rights: All content on this website, including but not limited to
            text, images, graphics, logos, and design elements, is the property of {siteName}
            or its content suppliers and protected by international copyright laws. Reproduction,
            distribution, or transmission of any content on this site is strictly prohibited without
            the express written consent of {siteName}. <br />
            External Links: This website may contain links to external sites. {siteName} is not
            responsible for the content, privacy policies, or practices of any third-party websites.
            Users are encouraged to read the privacy policies of any external sites they visit.
            <br />
            Disclaimer: The information provided on this website is for general informational
            purposes only. While
            {siteName} strives to keep the information up to date and accurate, {siteName} makes no
            representations or warranties of any kind, express or implied, about the completeness,
            accuracy, reliability, suitability, or availability of the information, products, or
            services contained on the website. Any reliance placed on such information is strictly
            at the user`&apos;`s own risk. <br />
            Limitation of Liability: In no event shall {siteName} be liable for any loss or damage,
            including without limitation, indirect or consequential loss or damage, arising out of
            or in connection with the use of this website. <br />
            Governing Law: The use of this website and any disputes arising out of such use are
            subject to the laws of China.
          </Text>
          <Text mt="8" color="steelGray.500">
            © Copyright 2023, {siteName}. All rights reserved.
          </Text>
        </Box>
      </VStack>
    </Box>
  )
}

export default Footer
