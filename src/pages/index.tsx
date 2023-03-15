import { BlitzPage } from "@blitzjs/auth"
import { Box, Container, HStack, Text, VStack } from "@chakra-ui/react"
import Layout from "src/components/layout"
import Hero from "src/pages/home/components/hero"
import HeroGallery from "./home/components/hero-gallery"

const Home: BlitzPage = () => {
  return (
    <Box>
      <HStack>
        <Hero />
        <HeroGallery></HeroGallery>
      </HStack>
    </Box>
  )
}

Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home
