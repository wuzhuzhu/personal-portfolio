// @ts-ignore
import { menuAnatomy } from "@chakra-ui/anatomy"
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react"

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(menuAnatomy.keys)

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  list: {
    // this will style the MenuList component
    py: "2",
    borderRadius: "lg",
    border: "none",
    bg: "purple.50",
    w: "3",
  },
  item: {
    // this will style the MenuItem and MenuItemOption components
    color: "steelGray.800",
    bg: "purple.100",
    _hover: {
      bg: "purple.50",
    },
    _focus: {
      bg: "purple.50",
    },
  },
  command: {
    // this will style the text defined by the command
    // prop in the MenuItem and MenuItemOption components
    // opacity: "0.8",
    fontFamily: "mono",
    fontSize: "xl",
    letterSpacing: "tighter",
    pl: "4",
  },
  divider: {
    // this will style the MenuDivider component
    my: "40",
  },
})

// define custom styles
const lg = defineStyle({
  fontSize: "md",
  my: "1",
})

const xl = defineStyle({
  fontSize: "lg",
  px: "4",
  py: "2",
})

// define custom sizes
const sizes = {
  // apply custom styles to parts
  xl: definePartsStyle({
    button: xl,
    item: xl,
    groupTitle: lg,
    command: xl,
  }),
}

// define custom variants
const variants = {
  roundLeft: definePartsStyle({
    button: {
      borderLeftRadius: "full",
      pl: "6",
    },
  }),
  roundRight: definePartsStyle({
    button: {
      borderRightRadius: "full",
      pr: "6",
    },
  }),
}

// export the component theme
export const menuTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    // define which size is applied by default
    size: "xl",
  },
})
