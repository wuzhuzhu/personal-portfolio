import { usePageParallax, useParallax } from "@/utils/hooks"
import { Box, BoxProps, Center, CenterProps } from "@chakra-ui/react"
import { motion, MotionValue, useScroll } from "framer-motion"
import { memo } from "react"

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
    <Center
      as={motion.div}
      transform={`translateY(${y}px)`}
      bg={bg}
      boxShadow={shadow}
      borderRadius="full"
      {...rest}
      // @ts-ignore
      style={{ y }}
    >
      {children}
    </Center>
  )
}

type TinyFrameProps = Partial<FrameProps>

export const TinyFrame = (props: TinyFrameProps) => {
  const { children, bg = "white", ...rest } = props
  return (
    <Frame w="4rem" h="6rem" shadow="lg" bg={bg} {...rest}>
      {children}
    </Frame>
  )
}

export const ShadowFrame = (props: TinyFrameProps) => {
  const { children, bg = "cucumber.50", ...rest } = props
  return (
    <Frame
      w="4.5rem"
      h="6rem"
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
