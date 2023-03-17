import { BlitzPage } from "@blitzjs/auth"
import { Box, Container, HStack, Text, VStack, Image } from "@chakra-ui/react"
import Layout from "src/components/layout"
import Hero from "src/pages/home/components/hero"
import FullCards from "./home/components/full-cards"
import ImmersionScroll from "./home/components/immersion-scroll"
import Ribbon from "./home/components/ribbon"

const Home: BlitzPage = () => {
  return (
    <VStack w="full" spacing="100px">
      <Hero />
      <Ribbon />
      <FullCards />
      <ImmersionScroll />
    </VStack>
  )
}

Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home
