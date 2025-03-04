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
import { useThemeColors } from "@shared/hooks/useThemeColor"

import { LanguageIcon, RusFlagIcon, USAFlagIcon } from "@shared/ui/icons"

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const { primary, background, mainHover } = useThemeColors()

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
            size="md"
            bg={background}
            _hover={{ bg: mainHover }}
            _focusVisible={{ outline: "none", bg: "transparent" }}
          >
            <LanguageIcon />
          </Button>
        </MenuTrigger>
        <MenuContent
          minW="5rem"
          position="absolute"
          top="110%"
          left="0"
          bg={background}
          borderRadius="xl"
          display="flex"
          flexDirection="column"
        >
          <MenuRadioItemGroup
            value={i18n.language}
            onValueChange={handleLanguageChange}
          >
            <MenuRadioItem
              closeOnSelect={false}
              value="en"
              bg={i18n.language === "en" ? mainHover : "inherit"}
              color={i18n.language === "en" ? primary : "inherit"}
              _hover={{ bg: mainHover }}
              borderRadius="lg"
              cursor={"pointer"}
            >
              {" "}
              <USAFlagIcon /> English
            </MenuRadioItem>
            <MenuRadioItem
              closeOnSelect={false}
              value="ru"
              bg={i18n.language === "ru" ? mainHover : "inherit"}
              color={i18n.language === "ru" ? primary : "inherit"}
              _hover={{ bg: mainHover }}
              borderRadius="lg"
              cursor={"pointer"}
            >
              {" "}
              <RusFlagIcon /> Русский
            </MenuRadioItem>
          </MenuRadioItemGroup>
        </MenuContent>
      </MenuRoot>
    </Box>
  )
}
