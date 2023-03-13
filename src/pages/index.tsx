import { BlitzPage } from "@blitzjs/auth"
import { Container, HStack, Text, VStack } from "@chakra-ui/react"
import Layout from "src/components/layout"
import Hero from "src/pages/home/components/hero"

const Home: BlitzPage = () => {
  return (
    <HStack>
      <Hero />
    </HStack>
  )
}

Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home
