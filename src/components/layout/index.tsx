import { Box, Container, Flex, VStack } from "@chakra-ui/react"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <Box h="100vh" bg="cucumber.50">
      <Container h="full" w="full" maxW="container.xl" p={0}>
        <Flex py={8} h="full" w="full">
          <VStack backgroundColor="cucumber.50" h="full" w="full">
            <Header />
            {children}
          </VStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Layout
