import { useTranslation } from "react-i18next"
import {
  Box,
  MenuContent,
  MenuRadioItemGroup,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react"
import { useThemeColors } from "@shared/hooks/useThemeColor"

import { LanguageIcon, RusFlagIcon, USAFlagIcon } from "@shared/ui/assets/icons"
import IconButton from "@shared/ui/Buttons/IconButton"
import MenuItem from "@shared/ui/MenuItem"

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
          <IconButton ariaLabel="Toggle Language">
            <LanguageIcon />
          </IconButton>
        </MenuTrigger>
        <MenuContent
          minW="5rem"
          position="absolute"
          top="110%"
          left="0"
          bg={background}
          borderWidth="1px"
          borderRadius="xl"
          display="flex"
          flexDirection="column"
        >
          <MenuRadioItemGroup
            value={i18n.language}
            onValueChange={handleLanguageChange}
          >
            <MenuItem
              value="en"
              Icon={<USAFlagIcon />}
              label={"English"}
              bg={i18n.language === "en" ? mainHover : "inherit"}
              color={i18n.language === "en" ? primary : "inherit"}
            ></MenuItem>
            <MenuItem
              value="ru"
              Icon={<RusFlagIcon />}
              label={"Русский"}
              bg={i18n.language === "ru" ? mainHover : "inherit"}
              color={i18n.language === "en" ? primary : "inherit"}
            ></MenuItem>
          </MenuRadioItemGroup>
        </MenuContent>
      </MenuRoot>
    </Box>
  )
}
