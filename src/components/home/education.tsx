import fonts from "../../utils/fonts"
import {
  Box,
  VStack,
  Text,
  Center,
  Container,
  Image,
  HStack,
  Tag,
  useBreakpointValue,
} from "@chakra-ui/react"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import React from "react"
import Frame, { TinyFrame } from "./frame"
import { usePageParallax, useParallax } from "@/utils/hooks"
import { H1, H2, H3 } from "@/core/components/typography"
import { SKILLS } from "@/utils/constants"
import { pagePaddingW } from "@/core/theme"

const baseVariant = {
  rocketScale: 2,
}

const mdVariant = {
  rocketScale: 1,
}

const Education = () => {
  const educationRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: educationRef, offset: ["0 1", "1 0"] })
  /*   useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest)
  }) */

  const variants = useBreakpointValue({ base: baseVariant, md: mdVariant })

  const y1 = useParallax(scrollYProgress, -100)
  const y2 = useParallax(scrollYProgress, -300)
  const y3 = useParallax(scrollYProgress, -500)
  const y4 = useParallax(scrollYProgress, -600)
  const y5 = useParallax(scrollYProgress, -700)
  return (
    <VStack width="100%" spacing={[16, null, 24, 32]} justify="center" px={pagePaddingW}>
      <VStack width="100%" align="flex-end" spacing={[8, null, 12, 20]} ref={educationRef}>
        <Box>
          <Container textAlign="right">
            <H3>Educational Background</H3>
            <Text fontSize={["lg", null, "xl", "2xl"]} mt={[4, null, 6, 8]}>
              {` A strong foundation in software engineering and engineering mechanics, honed at two of
              China's most prestigious universities.`}
            </Text>
          </Container>
        </Box>
        <Center bg="purple.100" borderRadius="80" width="100%" height="600px" position="relative">
          {/* floating tiny frames */}
          <motion.div style={{ position: "absolute", top: "40%", left: "12%", translateY: y3 }}>
            <TinyFrame></TinyFrame>
          </motion.div>
          <motion.div style={{ position: "absolute", top: "55%", left: "75%", translateY: y4 }}>
            <TinyFrame></TinyFrame>
          </motion.div>
          <motion.div style={{ position: "absolute", top: "120%", left: "20%", translateY: y5 }}>
            <TinyFrame></TinyFrame>
          </motion.div>
          <motion.div style={{ position: "absolute", top: "90%", left: "60%", translateY: y2 }}>
            <TinyFrame></TinyFrame>
          </motion.div>
          <motion.div style={{ position: "absolute", bottom: "-50%", left: "90%", translateY: y5 }}>
            <TinyFrame></TinyFrame>
          </motion.div>
        </Center>
      </VStack>
      <Center
        bg="cucumber.50"
        borderRadius="40"
        w={["100%", "100%", "900px", "1100px"]}
        height="600px"
        position="relative"
        bgImg="/images/edu-bg.png"
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        alignItems="flex-start"
      >
        <HStack width="100%" justify="space-between">
          <motion.img
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              translateX: "-50%",
              translateY: "-50%",
              scale: variants?.rocketScale,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [-1, 1, -1],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            src="/images/rocket.png"
          ></motion.img>
          <Box boxSize="sm">
            {SKILLS.map((skill, i) => {
              return (
                <Tag key={i} size="lg" m="2">
                  {skill}
                </Tag>
              )
            })}
          </Box>
        </HStack>
        <Box boxSize="2xs" shadow="md" borderRadius="2xl"></Box>
      </Center>
      <VStack textAlign="center" spacing="4">
        <H3>
          Partner of your <br />
          upcoming business
        </H3>
        <Text fontSize={["lg", null, "xl", "2xl"]}>
          Bring a wealth of experience and a keen eye for cutting-edge technologies. <br />
          Consistently deliver trustworthy and innovative solutions. <br />
          Looking forward to contributing my expertise to our joint success.
        </Text>
      </VStack>
    </VStack>
  )
}

export default Education
