import { useThemeColors } from "@shared/hooks/useThemeColor"
import { MenuRadioItem } from "@chakra-ui/react"
import { ThemeMenuItemProps } from "./ThemeMenuItem.types"

export default function ThemeMenuItem({
  value,
  theme,
  Icon,
  label,
}: ThemeMenuItemProps) {
  const { primary, mainHover } = useThemeColors()
  return (
    <MenuRadioItem
      key={value}
      value={value}
      closeOnSelect={false}
      bg={theme === value ? mainHover : "inherit"}
      color={theme === value ? primary : "inherit"}
      _hover={{ bg: mainHover }}
      borderRadius="lg"
      cursor={"pointer"}
    >
      {Icon} {label}
    </MenuRadioItem>
  )
}
