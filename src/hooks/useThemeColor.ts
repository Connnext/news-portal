import { useColorModeValue } from "@components/ui/color-mode"

export const useThemeColors = () => {
  const primary = useColorModeValue("primary.light", "primary.dark")
  const primaryHover = useColorModeValue(
    "primaryHover.light",
    "primaryHover.dark",
  )
  const secondary = useColorModeValue("secondary.light", "secondary.dark")
  const secondaryHover = useColorModeValue(
    "secondaryHover.light",
    "secondaryHover.dark",
  )
  const background = useColorModeValue("background.light", "background.dark")
  const backgroundContent = useColorModeValue(
    "backgroundContent.light",
    "backgroundContent.dark",
  )
  const textPrimary = useColorModeValue("textPrimary.light", "textPrimary.dark")
  const textSecondary = useColorModeValue(
    "textSecondary.light",
    "textSecondary.dark",
  )
  const textSecondaryHover = useColorModeValue(
    "textSecondaryHover.light",
    "textSecondaryHover.dark",
  )
  const title = useColorModeValue("title.light", "title.dark")
  const border = useColorModeValue("border.light", "border.dark")

  return {
    primary,
    primaryHover,
    secondary,
    secondaryHover,
    background,
    backgroundContent,
    textPrimary,
    textSecondary,
    textSecondaryHover,
    title,
    border,
  }
}
