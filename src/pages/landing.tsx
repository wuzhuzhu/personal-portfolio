import LandingLayout from "src/components/layout/landing-layout"

const LandingPage = () => {
  return (
    <div>Landing Page</div>
  )
}

LandingPage.getLayout = (page) => <LandingLayout>page</LandingLayout>

export default LandingPage
