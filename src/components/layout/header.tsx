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
  useBoolean,
  Icon,
  Box,
  useBreakpointValue,
  Collapse,
  VStack,
} from "@chakra-ui/react"
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons"
import { FiX, FiMenu } from "react-icons/fi"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { headerButtonVariants, scrollHeaderVariants } from "@/utils/framer-variants"
import { Suspense, useEffect, useState } from "react"
import { useHeaderHidden } from "@/utils/hooks"
import fonts from "@/utils/fonts"

import HeaderItemLoading from "@/components/loading/header-item-loading"
import UserInfo from "../user-info"
import { pagePaddingW } from "@/core/theme"

const baseVariant = {
  navigation: "list",
  miniMenu: true,
  iconDisplay: "inline-block",
  hireDisplay: "none",
  wrapperPosition: "fixed",
  showLogin: false,
}
const mdVariant = {
  navigation: "menu",
  miniMenu: false,
  iconDisplay: "none",
  hireDisplay: "flex",
  wrapperPosition: "relative",
  showLogin: true,
}

export const Logo = () => {
  return (
    <Flex direction="row" mr="4">
      <Image
        src="/images/logo.svg"
        alt="logo"
        w={{ base: "28", sm: "32", md: "40" }}
        ml={{ base: "-5", md: "-7" }}
      />
    </Flex>
  )
}

export const MenuBtns = ({}) => {
  const variants = useBreakpointValue({ base: baseVariant, md: mdVariant })
  return (
    <Flex direction={["column", "row"]} justify="flex-start">
      {variants?.showLogin && (
        <Button variant="ghost" colorScheme="steelGray" color="steelGray.800" mr="8">
          En
          <ChevronDownIcon />
        </Button>
      )}
      <Button variant="ghost" colorScheme="steelGray" color="steelGray.800" mr="8">
        Blog
      </Button>
      <Button variant="ghost" colorScheme="steelGray" color="steelGray.800" mr="8">
        Contact
      </Button>
      {variants?.showLogin && (
        <Suspense fallback={<HeaderItemLoading />}>
          <UserInfo />
        </Suspense>
      )}
    </Flex>
  )
}

const Header = () => {
  const [hidden, scrollHeaderVariants] = useHeaderHidden()
  const [menuClosed, setMenuStatus] = useBoolean()
  const variants = useBreakpointValue({ base: baseVariant, md: mdVariant })
  return (
    <VStack
      bg="cucumber.50"
      display={["flex", "block"]}
      // h={["100vh", "auto"]}
      // position="fixed"
      left="0"
      right="0"
      top="0"
    >
      <HStack
        w="full"
        py={{ base: "5", md: "8" }}
        px={pagePaddingW}
        justify="space-between"
        as={motion.div}
        // @ts-ignore
        variants={scrollHeaderVariants}
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
      >
        <HStack spacing="8">
          <Logo />
          {!variants?.miniMenu && <MenuBtns />}
        </HStack>
        <Box onClick={setMenuStatus.toggle} display={variants?.iconDisplay}>
          <motion.div layout>
            <Icon boxSize={[6, 8]} as={menuClosed ? FiX : FiMenu}></Icon>
          </motion.div>
        </Box>
        <Center w="150px" h="55" role="group" position="relative" display={variants?.hireDisplay}>
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
    </VStack>
  )
}

export default Header
