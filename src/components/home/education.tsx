import fonts from "../../utils/fonts"
import { Box, VStack, Text, Center, Container, Image, HStack, Tag } from "@chakra-ui/react"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import React from "react"
import Frame, { TinyFrame } from "./frame"
import { usePageParallax, useParallax } from "@/utils/hooks"
import { H1, H2 } from "@/core/components/typography"
import { SKILLS } from "@/utils/constants"

const Education = () => {
  const educationRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: educationRef, offset: ["0 1", "1 0"] })
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest)
  })

  const y1 = useParallax(scrollYProgress, -500)
  const y2 = useParallax(scrollYProgress, -700)
  return (
    <VStack width="100%" spacing="32" justify="center">
      <VStack width="100%" align="flex-end" spacing="20" ref={educationRef}>
        <Box>
          <Container textAlign="right">
            <H2>Educational Background</H2>
            <Text fontSize="2xl" mt={8}>
              {` A strong foundation in software engineering and engineering mechanics, honed at two of
              China's most prestigious universities.`}
            </Text>
          </Container>
        </Box>
        <Center bg="purple.100" borderRadius="80" width="100%" height="600px" position="relative">
          {/* floating tiny frames */}
          <motion.div style={{ position: "absolute", top: "40%", left: "12%", translateY: y1 }}>
            <TinyFrame></TinyFrame>
          </motion.div>
          <motion.div style={{ position: "absolute", top: "55%", left: "75%", translateY: y2 }}>
            <TinyFrame></TinyFrame>
          </motion.div>
          <motion.div style={{ position: "absolute", top: "120%", left: "20%", translateY: y1 }}>
            <TinyFrame></TinyFrame>
          </motion.div>
          <motion.div style={{ position: "absolute", top: "90%", left: "60%", translateY: y2 }}>
            <TinyFrame></TinyFrame>
          </motion.div>
          <motion.div style={{ position: "absolute", bottom: "-50%", left: "90%", translateY: y2 }}>
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
        <H2>
          Partner of your <br />
          upcoming business
        </H2>
        <Text fontSize="xl">
          Bring a wealth of experience and a keen eye for cutting-edge technologies. <br />
          Consistently deliver trustworthy and innovative solutions. <br />
          Looking forward to contributing my expertise to our joint success.
        </Text>
      </VStack>
    </VStack>
  )
}

export default Education
