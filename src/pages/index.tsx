import { BlitzPage } from "@blitzjs/auth"
import { Box, Container, HStack, Text, VStack, Image } from "@chakra-ui/react"
import Layout from "src/components/layout"
import Hero from "src/pages/home/components/hero"
import HeroGallery from "./home/components/hero-gallery"

const Home: BlitzPage = () => {
  return (
    <Box>
      <Hero />
    </Box>
  )
}

Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home
