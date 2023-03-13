import { Box, Button, Center, HStack, Image, VStack, Text, Flex, Heading } from "@chakra-ui/react"
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons"

const Logo = () => {
  return (
    <Flex direction="row" mr="4">
      <Image src="/images/logo.svg" alt="logo" w="40" ml="-7" />
    </Flex>
  )
}

const Header = () => {
  return (
    <HStack w="full" justify="space-between">
      <HStack spacing="8">
        <Logo />
        <Button variant="ghost" colorScheme="steelGray" color="steelGray.800">
          About
        </Button>
        <Button variant="ghost" colorScheme="steelGray" color="steelGray.800">
          Contact
        </Button>
        <Button variant="ghost" colorScheme="steelGray" color="steelGray.800">
          En
          <ChevronDownIcon />
        </Button>
      </HStack>
      <Center w="150px" h="55" role="group">
        <Image
          src="/images/btn-nav.svg"
          w="150px"
          height="55"
          _groupHover={{
            transform: "scale(1.05, 1)",
            transition: "transform 0.2s ease",
          }}
          position="absolute"
          alt="button-frame"
        />
        Download
      </Center>
    </HStack>
  )
}

export default Header
