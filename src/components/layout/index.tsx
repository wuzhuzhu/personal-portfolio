import Head from "next/head"
import React, { FC } from "react"
import { Box, Container, Flex, VStack } from "@chakra-ui/react"
import { BlitzLayout } from "@blitzjs/next"

import Header from "./header"
interface LayoutProps {
  title?: string
  children?: React.ReactNode
}
const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "Walter Wu | Fullstack|Frontend|Engineering Management"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box bg="cucumber.50">
        <Header />
        <Container minH="full" w="full" maxW="container.xl">
          <VStack backgroundColor="cucumber.50" h="full" w="full" spacing={20} py={8}>
            {children}
          </VStack>
        </Container>
      </Box>
    </>
  )
}

export default Layout
