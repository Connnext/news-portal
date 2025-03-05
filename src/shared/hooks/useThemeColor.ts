import { useColorModeValue } from "@shared/ui/components/color-mode"

interface ThemeColors {
  primary?: string
  primaryHover?: string
  secondary?: string
  secondaryHover?: string
  background?: string
  backgroundContent?: string
  textPrimary?: string
  textSecondary?: string
  textSecondaryHover?: string
  title?: string
  border?: string
  mainHover?: string
}

export const useThemeColors = (): ThemeColors => {
  return {
    primary: useColorModeValue("primary.light", "primary.dark"),
    primaryHover: useColorModeValue("primaryHover.light", "primaryHover.dark"),
    secondary: useColorModeValue("secondary.light", "secondary.dark"),
    secondaryHover: useColorModeValue(
      "secondaryHover.light",
      "secondaryHover.dark",
    ),
    background: useColorModeValue("background.light", "background.dark"),
    backgroundContent: useColorModeValue(
      "backgroundContent.light",
      "backgroundContent.dark",
    ),
    textPrimary: useColorModeValue("textPrimary.light", "textPrimary.dark"),
    textSecondary: useColorModeValue(
      "textSecondary.light",
      "textSecondary.dark",
    ),
    textSecondaryHover: useColorModeValue(
      "textSecondaryHover.light",
      "textSecondaryHover.dark",
    ),
    title: useColorModeValue("title.light", "title.dark"),
    border: useColorModeValue("border.light", "border.dark"),
    mainHover: useColorModeValue("mainHover.light", "mainHover.dark"),
  }
}
