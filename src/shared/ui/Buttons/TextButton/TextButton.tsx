import { Button } from "@chakra-ui/react"
import { useThemeColors } from "@shared/hooks/useThemeColor"
import { TextButtonProps } from "./TextButton.types"

export default function TextButton({ children, ...props }: TextButtonProps) {
  const { primary, primaryHover } = useThemeColors()
  return (
    <Button
      w={"full"}
      bg={primary}
      color={"white"}
      _hover={{
        bg: primaryHover,
      }}
      transition={"background 0.1s ease-in-out color 0.1s ease-in-out"}
      {...props}
    >
      {children}
    </Button>
  )
}
