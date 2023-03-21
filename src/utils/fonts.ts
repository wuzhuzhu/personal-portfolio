import { Hepta_Slab, PT_Sans } from "@next/font/google"

// If loading a variable font, you don't need to specify the font weight
const heptaSlab = Hepta_Slab({ subsets: ["latin"] })
const ptSans = PT_Sans({ subsets: ["latin"], weight: ['400'] })

const fonts = {
  heptaSlab,
  ptSans
}

export default fonts
