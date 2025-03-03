import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const COLORS = {
  light: {
    primary: "#2170cd",
    primaryHover: "#3281de",
    secondary: "#F5A623",
    secondaryHover: "#F7BA54",
    textPrimary: "#000000",
    textSecondary: "#818C99",
    textSecondaryHover: "#99A2AD",
    title: "#1D2A4A",
    border: "#DCDCDC",
    background: "#F4F6F9",
    backgroundContent: "#FFFFFF",
    mainHover: "#0000001f",
  },
  dark: {
    primary: "#2170cd",
    primaryHover: "#3281de",
    secondary: "#F5A623",
    secondaryHover: "#F7BA54",
    textPrimary: "#FFFFFF",
    textSecondary: "#939393",
    textSecondaryHover: "#B2B2B2",
    title: "#FFFFFF",
    border: "#3A3A3C",
    background: "#1C1C1E",
    backgroundContent: "#222222",
    mainHover: "#212121",
  },
}

const config = defineConfig({
  globalCss: {},
  theme: {
    tokens: {
      colors: {
        background: {
          light: { value: COLORS.light.background },
          dark: { value: COLORS.dark.background },
        },
        backgroundContent: {
          light: { value: COLORS.light.backgroundContent },
          dark: { value: COLORS.dark.backgroundContent },
        },
        textPrimary: {
          light: { value: COLORS.light.textPrimary },
          dark: { value: COLORS.dark.textPrimary },
        },
        textSecondary: {
          light: { value: COLORS.light.textSecondary },
          dark: { value: COLORS.dark.textSecondary },
        },
        textSecondaryHover: {
          light: { value: COLORS.light.textSecondaryHover },
          dark: { value: COLORS.dark.textSecondaryHover },
        },
        primary: {
          light: { value: COLORS.light.primary },
          dark: { value: COLORS.dark.primary },
        },
        primaryHover: {
          light: { value: COLORS.light.primaryHover },
          dark: { value: COLORS.dark.primaryHover },
        },
        secondary: {
          light: { value: COLORS.light.secondary },
          dark: { value: COLORS.dark.secondary },
        },
        secondaryHover: {
          light: { value: COLORS.light.secondaryHover },
          dark: { value: COLORS.dark.secondaryHover },
        },
        title: {
          light: { value: COLORS.light.title },
          dark: { value: COLORS.dark.title },
        },
        border: {
          light: { value: COLORS.light.border },
          dark: { value: COLORS.dark.border },
        },
        mainHover: {
          light: { value: COLORS.light.mainHover },
          dark: { value: COLORS.dark.mainHover },
        },
      },
      fonts: {
        heading: { value: `'Poppins', sans-serif` },
        body: { value: `'Roboto', sans-serif` },
      },
      cursor: {
        button: { value: "pointer" },
        option: { value: "pointer" },
      },
    },
  },
})

const theme = createSystem(defaultConfig, config)

export default theme
