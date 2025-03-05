import { useNavigate } from "react-router"
import { useThemeColors } from "@shared/hooks/useThemeColor"
import { BackIcon } from "@shared/ui/assets/icons"
import { Button } from "@chakra-ui/react"

export default function BackButton() {
  const navigate = useNavigate()
  const { background, mainHover } = useThemeColors()

  const handleBack = () => {
    navigate(-1)
  }
  return (
    <Button
      aria-label="Back"
      variant="ghost"
      size="md"
      bg={background}
      _hover={{ bg: mainHover }}
      _focusVisible={{ outline: "none" }}
      onClick={handleBack}
    >
      <BackIcon />
    </Button>
  )
}
