import { MenuItemProps } from "./MenuItem.types"
import { useThemeColors } from "@shared/hooks/useThemeColor"
import { MenuRadioItem } from "@chakra-ui/react"

export default function MenuItem({
  value,
  Icon,
  label,
  bg,
  color,
  ...props
}: MenuItemProps) {
  const { mainHover } = useThemeColors()
  return (
    <MenuRadioItem
      key={value}
      value={value}
      closeOnSelect={false}
      bg={bg}
      color={color}
      _hover={{ bg: mainHover }}
      borderRadius="lg"
      cursor={"pointer"}
      {...props}
    >
      {Icon} {label}
    </MenuRadioItem>
  )
}
