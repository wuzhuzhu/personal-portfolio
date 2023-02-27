import { Box } from "@chakra-ui/react"
import LandingHeader from "./landing-header"

const LandingLayout = ({ children }) => {
  return (
    <Box py={[4, 6, 8]} px={[8, 12, 16]} background='secondary.100'>
      <LandingHeader />
      {children}
    </Box >
  )
}

export default LandingLayout
