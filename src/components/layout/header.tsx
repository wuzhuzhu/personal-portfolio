import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  VStack,
  Text,
  Flex,
  Heading,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react"
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { headerButtonVariants, scrollHeaderVariants } from "@/utils/framer-variants"
import { useEffect, useState } from "react"
import { useHeaderHidden } from "@/utils/hooks"

const Logo = () => {
  return (
    <Flex direction="row" mr="4">
      <Image src="/images/logo.svg" alt="logo" w="40" ml="-7" />
    </Flex>
  )
}

const Header = () => {
  const [hidden, scrollHeaderVariants] = useHeaderHidden()
  return (
    <HStack
      w="full"
      justify="space-between"
      as={motion.div}
      // @ts-ignore
      variants={scrollHeaderVariants}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
    >
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
        <Text>{hidden ? "hidden" : "show"}</Text>
      </HStack>
      <Center w="150px" h="55" role="group">
        <Image
          as={motion.img}
          src="/images/btn-nav.svg"
          w="150px"
          height="55"
          whileHover="hover"
          variants={headerButtonVariants}
          position="absolute"
          alt="button-frame"
        />
        Download
      </Center>
    </HStack>
  )
}

export default Header
