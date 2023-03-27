import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react"
import { menuTheme } from "./components/menu"

// default breakpoints
const breakpoints = {
  sm: "30em", // 480px
  md: "48em", // 768px
  lg: "62em", // 992px
  xl: "80em", // 1280px
  "2xl": "96em", // 1536px
}

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  steelGray: {
    "50": "#F0EFF5",
    "100": "#D6D3E3",
    "200": "#BCB7D2",
    "300": "#A29BC0",
    "400": "#887FAE",
    "500": "#6D639C",
    "600": "#574F7D",
    "700": "#423B5E",
    "800": "#2C283E",
    "900": "#16141F",
  },
  saltpan: {
    "50": "#EFF6EE",
    "100": "#D3E7CF",
    "200": "#B6D8B1",
    "300": "#9AC992",
    "400": "#7EB974",
    "500": "#61AA55",
    "600": "#4E8844",
    "700": "#3A6633",
    "800": "#274422",
    "900": "#132211",
  },
  cucumber: {
    "50": "#F4F7EE",
    "100": "#E1E7CF",
    "150": "#eff1e5", // hero btn bg
    "200": "#CED8B0",
    "300": "#BBC992",
    "400": "#A8BA73",
    "500": "#95AB54",
    "600": "#778943",
    "700": "#596633",
    "800": "#3C4422",
    "900": "#1E2211",
  },
  purple: {
    "50": "#F0EEF6",
    "100": "#e7e7fd", // skill btn bg
    "200": "#BCB2D7",
    "300": "#A293C7",
    "400": "#8875B8",
    "500": "#6D57A8",
    "600": "#574686",
    "700": "#423465",
    "800": "#2C2343",
    "900": "#161122",
  },
}

// custom components, example
const components = {
  Button: {
    baseStyle: {
      fontWeight: "semibold", // defaults to "semibold", not changing
    },
  },
  Menu: menuTheme,
}

// 3. extend the theme
const theme = extendTheme(
  {
    colors,
    components,
  },
  withDefaultColorScheme({
    colorScheme: "cucumber",
    components: ["Button", "IconButton"],
  }),
  withDefaultColorScheme({
    colorScheme: "steelGray",
    components: ["Heading", "Text"],
  })
)

export default theme
