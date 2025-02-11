import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const COLORS = {
  light: {
    primary: "#4A90E2",
    secondary: "#F5A623",
    background: "#F4F6F9",
    text: "#333333",
    title: "#1D2A4A",
    border: "#DCDCDC",
    gray: "#A9A9A9",
    switchColor: "#4A90E2",
  },
  dark: {
    primary: "#4A90E2",
    secondary: "#F5A623",
    background: "#1C1C1E",
    text: "#F0F0F0",
    title: "#FFFFFF",
    border: "#3A3A3C",
    gray: "#585858",
    switchColor: "#4A90E2",
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
        text: {
          light: { value: COLORS.light.text },
          dark: { value: COLORS.dark.text },
        },
        primary: {
          light: { value: COLORS.light.primary },
          dark: { value: COLORS.dark.primary },
        },
        secondary: {
          light: { value: COLORS.light.secondary },
          dark: { value: COLORS.dark.secondary },
        },
        title: {
          light: { value: COLORS.light.title },
          dark: { value: COLORS.dark.title },
        },
        gray: {
          light: { value: COLORS.light.gray },
          dark: { value: COLORS.dark.gray },
        },
        switchColor: {
          light: { value: COLORS.light.switchColor },
          dark: { value: COLORS.dark.switchColor },
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
