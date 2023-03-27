import Layout from "@/components/layout"
import { BlitzPage } from "@blitzjs/auth"
import { Box, Text } from "@chakra-ui/react"
import React from "react"

const Legal: BlitzPage = () => {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME
  return (
    <Box pt="12">
      <Text lineHeight="tall" color="steelGray.500">
        Intellectual Property Rights: All content on this website, including but not limited to
        text, images, graphics, logos, and design elements, is the property of {siteName}
        or its content suppliers and protected by international copyright laws. Reproduction,
        distribution, or transmission of any content on this site is strictly prohibited without the
        express written consent of {siteName}. <br />
        External Links: This website may contain links to external sites. {siteName} is not
        responsible for the content, privacy policies, or practices of any third-party websites.
        Users are encouraged to read the privacy policies of any external sites they visit.
        <br />
        Disclaimer: The information provided on this website is for general informational purposes
        only. While
        {siteName} strives to keep the information up to date and accurate, {siteName} makes no
        representations or warranties of any kind, express or implied, about the completeness,
        accuracy, reliability, suitability, or availability of the information, products, or
        services contained on the website. Any reliance placed on such information is strictly at
        the user`&apos;`s own risk. <br />
        Limitation of Liability: In no event shall {siteName} be liable for any loss or damage,
        including without limitation, indirect or consequential loss or damage, arising out of or in
        connection with the use of this website. <br />
        Governing Law: The use of this website and any disputes arising out of such use are subject
        to the laws of China.
      </Text>
      <Text mt="8" color="steelGray.500">
        © Copyright 2023, {siteName}. All rights reserved.
      </Text>
    </Box>
  )
}

Legal.getLayout = (page) => <Layout>{page}</Layout>

export default Legal
