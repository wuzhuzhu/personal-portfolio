import { BlitzPage } from "@blitzjs/auth"
import { Container, Text } from "@chakra-ui/react"
import Layout from "src/components/layout"

const Home: BlitzPage = () => {
  return <Text>Hello, world!</Text>
}

Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home
