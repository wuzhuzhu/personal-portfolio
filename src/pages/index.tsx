import { BlitzPage } from "@blitzjs/auth"
import { Box, Container, HStack, Text, VStack, Image } from "@chakra-ui/react"
import Layout from "src/components/layout"
import Hero from "@/components/home/hero"
import FullCards from "@/components/home/full-cards"
import ImmersionScroll from "@/components/home/immersion-scroll"
import Ribbon from "@/components/home/ribbon"
import Education from "@/components/home/education"

const Home: BlitzPage = () => {
  return (
    <VStack w="full" spacing="100px">
      <Hero />
      <Ribbon />
      <FullCards />
      <ImmersionScroll />
      <Education></Education>
    </VStack>
  )
}

Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home
