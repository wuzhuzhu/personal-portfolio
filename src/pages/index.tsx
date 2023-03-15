import { BlitzPage } from "@blitzjs/auth"
import { Container, HStack, Text, VStack } from "@chakra-ui/react"
import Layout from "src/components/layout"
import Hero from "src/pages/home/components/hero"
import HeroGallery from "./home/components/hero-gallery"

const Home: BlitzPage = () => {
  return (
    <HStack>
      <Hero />
      <HeroGallery></HeroGallery>
    </HStack>
  )
}

Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home
