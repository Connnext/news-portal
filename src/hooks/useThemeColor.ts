import { useColorModeValue } from "@components/ui/color-mode"

export const useThemeColors = () => {
  const primary = useColorModeValue("primary.light", "primary.dark")
  const secondary = useColorModeValue("secondary.light", "secondary.dark")
  const background = useColorModeValue("background.light", "background.dark")
  const text = useColorModeValue("text.light", "text.dark")
  const title = useColorModeValue("title.light", "title.dark")
  const gray = useColorModeValue("gray.light", "gray.dark")
  const switchColor = useColorModeValue("switchColor.light", "switchColor.dark")

  return {
    primary,
    secondary,
    background,
    text,
    title,
    gray,
    switchColor,
  }
}
