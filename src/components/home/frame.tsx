import { usePageParallax, useParallax } from "@/utils/hooks"
import { Box, BoxProps } from "@chakra-ui/react"
import { motion, MotionValue, useScroll } from "framer-motion"
import { memo } from "react"

type FrameProps =
  | BoxProps
  | {
      parallaxDistance?: number
      children: React.ReactNode
      y?: number
      scrollYProgress: MotionValue<number>
      ref: React.RefObject<HTMLDivElement>
    }

const Frame = ({
  bg = "steelGray.800",
  y = 0,
  shadow = "none",
  h = "80",
  w = "200px",
  parallaxDistance,
  scrollYProgress = 0,
  children,
  ref,
  ...rest
}: FrameProps) => {
  const offset = 0
  return (
    <Box
      as={motion.div}
      transform={`translateY(${y}px)`}
      bg={bg}
      boxShadow={shadow}
      h={h}
      w={w}
      borderRadius="full"
      {...rest}
      style={{ y: offset }}
    >
      {children}
    </Box>
  )
}

type TinyFrameProps = Partial<BoxProps> | { parallaxDistance?: number; children: React.ReactNode }

export const TinyFrame = (props: TinyFrameProps) => {
  const { parallaxDistance = 0, children, rest } = props
  const y = usePageParallax(parallaxDistance)
  return (
    <Frame w="4rem" h="6rem" shadow="lg" bg="white" position="absolute" y={y} {...rest}>
      {children}
    </Frame>
  )
}

export default Frame
