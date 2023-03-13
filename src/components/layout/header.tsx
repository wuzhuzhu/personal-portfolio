import { Box, Button, Center, HStack, Image } from "@chakra-ui/react"
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons"

const Header = () => {
  return (
    <HStack w="full" justify="space-between" px="6">
      <HStack spacing="8">
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
