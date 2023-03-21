import React, { memo } from "react"
import { Icon, Button, HStack, Text, VStack, Image, Box } from "@chakra-ui/react"
import { GrApple, GrAndroid } from "react-icons/gr"
import { motion, useScroll, useTransform } from "framer-motion"

import {
  showUpVariants,
  staggerChildVariants,
  staggerParentVariants,
} from "@/utils/framer-variants"
import HeroGallery from "./hero-gallery"
import { usePageParallax, useParallax } from "@/utils/hooks"
import fonts from "@/utils/fonts"
import { H3 } from "@/core/components/typography"

const MBox = motion(Box)
const HeroBtn = ({ icon, text }) => {
  return (
    <Button
      leftIcon={<Icon h="8" w="8" as={icon} />}
      size="2xl"
      py="6"
      px="12"
      borderRadius="full"
      bg="cucumber.150"
      color="steelGray.800"
      _hover={{
        color: "steelGray.50",
        backgroundColor: "steelGray.700",
      }}
    >
      <VStack justify="center" spacing={0} align="start" ml="2">
        <Text color="steelGray.300" fontSize="sm">
          Get on The
        </Text>
        <Text>{text}</Text>
      </VStack>
    </Button>
  )
}

const Hero = () => {
  const y = usePageParallax(500)

  return (
    <HStack position="relative">
      <VStack
        as={motion.div}
        display="flex"
        flexDir="column"
        align="flex-start"
        flex="1"
        spacing={8}
        initial="hidden"
        animate="visible"
        variants={staggerParentVariants}

        // @ts-ignore no problem in operation, although type error appears.
        // transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
      >
        <Image
          as={motion.img}
          position="absolute"
          bottom="-250"
          left="50%"
          transform="translateX(-50%)"
          src="/images/hero-bg.png"
          alt="bg"
          initial="hidden"
          animate="visible"
          variants={showUpVariants}
          // @ts-ignore no problem in operation, although type error appears.
          style={{ y: y }}
        />
        {/* A parallax indicator */}
        {/* <MBox bg="red" h="8" w="8" position="fixed" top="0" style={{ y }}></MBox> */}
        <H3 as={motion.p} variants={staggerChildVariants}>
          Empowering Frontend Teams, Scaling Success
        </H3>
        <Text as={motion.p} variants={staggerChildVariants} fontSize="xl">
          Leveraging AI and Web Innovations to Drive Success - Open to Full/Part-Time Positions
        </Text>
        <HStack as={motion.div} variants={staggerChildVariants} spacing={4}>
          <HeroBtn icon={GrApple} text="App Store"></HeroBtn>
          <HeroBtn icon={GrAndroid} text="Google Play"></HeroBtn>
        </HStack>
      </VStack>
      <HeroGallery />
    </HStack>
  )
}

export default memo(Hero)
