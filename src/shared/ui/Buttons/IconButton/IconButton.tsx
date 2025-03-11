import { Button } from "@chakra-ui/react"
import { useThemeColors } from "@shared/hooks/useThemeColor"
import { IconButtonProps } from "./IconButton.types"

export default function IconButton({
  ariaLabel,
  children,
  ...props
}: IconButtonProps) {
  const { mainHover } = useThemeColors()

  return (
    <Button
      aria-label={ariaLabel}
      variant="ghost"
      size="md"
      bg="transparent"
      _hover={{ bg: mainHover }}
      _focusVisible={{ outline: "none" }}
      {...props}
    >
      {children}
    </Button>
  )
}
