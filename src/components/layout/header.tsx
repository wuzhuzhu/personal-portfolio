import {
  chakra,
  shouldForwardProp,
  Box,
  Button,
  Center,
  HStack,
  Image,
  VStack,
  Text,
  Flex,
  Heading,
} from "@chakra-ui/react"
import { motion, isValidMotionProp } from "framer-motion"
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons"

const ChakraImage = chakra(motion.image, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
})

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
        <ChakraImage
          as={motion.img}
          src="/images/btn-nav.svg"
          w="150px"
          height="55"
          // _hover={{
          // transform: "scale(1.05, 1)",
          // transition: "transform 0.2s ease",
          // }}
          whileHover={{ scaleX: 1.05 }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            duration: 0.2,
            bounce: 0.3,
            damping: 7,
            type: "spring",
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
