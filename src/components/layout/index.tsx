import Head from "next/head"
import { Box, Container, Flex, VStack } from "@chakra-ui/react"
import Header from "./header"

interface LayoutProps {
  title?: string
}

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "interview-run"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack minH="100vh" bg="cucumber.50" spacing="8">
        <Header />
        <Container h="full" w="full" maxW="container.xl">
          <VStack backgroundColor="cucumber.50" h="full" w="full" spacing={20}>
            {children}
          </VStack>
        </Container>
      </VStack>
    </>
  )
}

export default Layout
