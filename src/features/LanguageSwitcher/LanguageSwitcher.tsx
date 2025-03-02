import { useTranslation } from "react-i18next"
import {
  Box,
  Button,
  MenuContent,
  MenuRadioItem,
  MenuRadioItemGroup,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react"
import { useThemeColors } from "@hooks/useThemeColor"
import { LanguageIcon, RusFlagIcon } from "@shared/ui/icons"

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const { background } = useThemeColors()

  const handleLanguageChange = (e: { value: string }) => {
    i18n.changeLanguage(e.value)
  }

  return (
    <Box position="relative">
      <MenuRoot>
        <MenuTrigger asChild>
          <Button
            aria-label="Toggle Language"
            variant="subtle"
            size="lg"
            bg={background}
          >
            <LanguageIcon />
          </Button>
        </MenuTrigger>
        <MenuContent
          minW="5rem"
          position="absolute"
          top="110%"
          left="0"
          zIndex="10"
          bg={background}
          boxShadow="md"
          borderRadius="md"
        >
          <MenuRadioItemGroup
            value={i18n.language}
            onValueChange={handleLanguageChange}
          >
            <MenuRadioItem value="en"> English</MenuRadioItem>
            <MenuRadioItem value="ru">
              {" "}
              <RusFlagIcon /> Русский
            </MenuRadioItem>
          </MenuRadioItemGroup>
        </MenuContent>
      </MenuRoot>
    </Box>
  )
}
