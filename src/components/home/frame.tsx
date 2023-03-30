import { usePageParallax, useParallax } from "@/utils/hooks"
import { Box, BoxProps, Center, CenterProps, Flex } from "@chakra-ui/react"
import { motion, MotionValue, useScroll } from "framer-motion"
import mePic from "~/images/frames/me.png"
import { CImage } from "../shared/chakra-wrapped"

type FrameProps = CenterProps & {
  parallaxDistance?: number
  children?: React.ReactNode
  y?: number
  scrollYProgress?: MotionValue<number>
  ref?: React.RefObject<HTMLDivElement>
}

const Frame = ({
  bg = "steelGray.800",
  y = 0,
  shadow = "none",
  // h = "80",
  // w = "200px",
  parallaxDistance,
  scrollYProgress,
  children,
  ref,
  ...rest
}: FrameProps) => {
  return (
    <Flex
      as={motion.div}
      display="inline-flex"
      transform={`translateY(${y}px)`}
      bg={bg}
      boxShadow={shadow}
      borderRadius="full"
      overflow="hidden"
      {...rest}
      // @ts-ignore
      style={{ y }}
      justify="center"
      align="center"
    >
      <Center>{children}</Center>
    </Flex>
  )
}

type TinyFrameProps = Partial<FrameProps>

export const TinyFrame = (props: TinyFrameProps) => {
  const { children, bg = "white", ...rest } = props
  return (
    <Frame w={["3rem", null, "4rem"]} h={["4.5rem", null, "6rem"]} shadow="lg" bg={bg} {...rest}>
      {children}
    </Frame>
  )
}

export const ShadowFrame = (props: TinyFrameProps) => {
  const { children, bg = "cucumber.50", ...rest } = props
  return (
    <Frame
      w={["2rem", null, "4rem", "4.5rem"]}
      h={["3rem", null, "5rem", "6rem"]}
      shadow="none"
      border="1px solid"
      borderColor="cucumber.200"
      bg={bg}
      {...rest}
    >
      {children}
    </Frame>
  )
}

export default Frame
