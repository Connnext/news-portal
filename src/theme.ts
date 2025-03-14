import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const COLORS = {
  light: {
    primary: "#ea1646",
    primaryHover: "#c3183f",
    secondary: "#170420",
    secondaryHover: "#F7BA54",
    textPrimary: "#000000",
    textSecondary: "#818C99",
    textSecondaryHover: "#99A2AD",
    title: "#1D2A4A",
    border: "#DCDCDC",
    background: "#F4F6F9",
    backgroundContent: "#FFFFFF",
    mainHover: "#e4e4e7",
  },
  dark: {
    primary: "#3b46ff",
    primaryHover: "#2f38cc",
    secondary: "#ffd3fd",
    secondaryHover: "#dfb4dd",
    textPrimary: "#FFFFFF",
    textSecondary: "#939393",
    textSecondaryHover: "#B2B2B2",
    title: "#FFFFFF",
    border: "#3A3A3C",
    background: "#1C1C1E",
    backgroundContent: "#222222",
    mainHover: "#2a2a2a",
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
      cursor: {
        button: { value: "pointer" },
        option: { value: "pointer" },
      },
    },
  },
})

const theme = createSystem(defaultConfig, config)

export default theme
