import {
  Button,
  Center,
  HStack,
  Image,
  Text,
  Flex,
  Menu,
  MenuButton,
  shouldForwardProp,
} from "@chakra-ui/react"
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { headerButtonVariants, scrollHeaderVariants } from "@/utils/framer-variants"
import { Suspense, useEffect, useState } from "react"
import { useHeaderHidden } from "@/utils/hooks"
import fonts from "@/utils/fonts"
import { useCurrentUser } from "@/users/hooks/useCurrentUser"
import { useMutation } from "@blitzjs/rpc"
import logout from "@/auth/mutations/logout"
import { useSession } from "@blitzjs/auth"
import dynamic from "next/dynamic"

import UserInfo from "../user-info"

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
      py="10"
      px="16"
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
          Blog
        </Button>
        <Button variant="ghost" colorScheme="steelGray" color="steelGray.800">
          Contact
        </Button>
        <Suspense fallback="Loading">
          <UserInfo />
        </Suspense>
        <Button variant="ghost" colorScheme="steelGray" color="steelGray.800">
          En
          <ChevronDownIcon />
        </Button>
      </HStack>
      <Center w="150px" h="55" role="group" position="relative">
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
        <Text fontSize="lg" className={fonts.ptSans.className}>
          Hire Me
        </Text>
      </Center>
    </HStack>
  )
}

export default Header
