import { BlitzPage } from "@blitzjs/auth";
import { Box, Container, HStack, Text, VStack, Image } from "@chakra-ui/react";
import Layout from "@/components/layout";
import Hero from "@/components/home/hero";
import FullCards from "@/components/home/full-cards";
import ImmersionScroll from "@/components/home/immersion-scroll";
import Ribbon from "@/components/home/ribbon";
import Education from "@/components/home/education";
import { gSP, gSSP } from "@/blitz-server";
import { Routes } from "@blitzjs/next";
import getCurrentUser from "@/users/queries/getCurrentUser";
import Footer from "@/components/home/footer";
import MailMe from "@/components/home/mail-me";
import Script from "next/script";

const Home: BlitzPage = () => {
	return (
		<VStack w="full" spacing={{ base: "60px", md: "80px", lg: "100px" }}>
			<Script
				async
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7213311370099570"
				crossorigin="anonymous"
			/>
			<Hero />
			<Ribbon />
			<FullCards />
			<ImmersionScroll />
			<Education />
			<MailMe />
			<Footer />
		</VStack>
	);
};

/*
// Authenticate user before page loads
// https://blitzjs.com/docs/blitzjs-next

type TCurrentUser = Awaited<ReturnType<typeof getCurrentUser>>

export const getServerSideProps = gSSP(async ({ ctx }) => {
  const currentUser = await getCurrentUser(null, ctx)

  if (currentUser) {
    return {
      props: {
        user: currentUser,
      },
    }
  } else {
    return {
      redirect: {
        destination: Routes.LoginPage(),
        permanent: false,
      },
    }
  }
})

// page type def:
const Page: BlitzPage<{ user: TCurrentUser }> = ({ user }) => {
  return (
    <Layout title="Page">
      <div className="container">
        <p>User Page</p>
        {user && <p>{user.email}</p>}
      </div>
    </Layout>
  )
}

*/

Home.getLayout = (page) => <Layout>{page}</Layout>;

export default Home;
