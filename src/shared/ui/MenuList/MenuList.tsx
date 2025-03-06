import { MenuContent } from "@chakra-ui/react"
import { MenuListProps } from "./MenuList.types"
import { useThemeColors } from "@shared/hooks/useThemeColor"

export default function MenuList({ children, minW, ...props }: MenuListProps) {
  const { background } = useThemeColors()
  return (
    <MenuContent
      minW={minW}
      position="absolute"
      top="110%"
      left="0"
      bg={background}
      borderWidth="1px"
      borderRadius="xl"
      display="flex"
      flexDirection="column"
      {...props}
    >
      {children}
    </MenuContent>
  )
}
