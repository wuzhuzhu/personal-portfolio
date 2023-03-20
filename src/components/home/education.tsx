import fonts from "../../utils/fonts"
import { Box, VStack, Text, Center, Container } from "@chakra-ui/react"
import { motion, useScroll } from "framer-motion"
import React from "react"
import Frame from "./frame"

const Education = () => {
  return (
    <VStack as={motion.div} width="100%" align="flex-end" spacing="20">
      <Box>
        <Container textAlign="right">
          <Text fontSize="5xl" className={fonts.heptaSlab.className}>
            Educational Background
          </Text>
          <Text fontSize="2xl" mt={8}>
            {` A strong foundation in software engineering and engineering mechanics, honed at two of
            China's most prestigious universities.`}
          </Text>
        </Container>
      </Box>
      <Center bg="purple.100" borderRadius="80" width="100%" height="600px" position="relative">
        {/* floating tiny frames */}
        <Frame w="4em" h="6em" shadow="lg" bg="white" top="-2rem" left="25%"></Frame>
        <Frame w="4em" h="6em" shadow="lg" bg="white" top="15%" left="75%"></Frame>
        <Frame w="4em" h="6em" shadow="lg" bg="white" top="85%" left="20%"></Frame>
        <Frame w="4em" h="6em" shadow="lg" bg="white" top="70%" left="60%"></Frame>
      </Center>
    </VStack>
  )
}

export default Education
