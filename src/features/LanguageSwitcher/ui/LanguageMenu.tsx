import { useTranslation } from "react-i18next"
import { useThemeColors } from "@shared/hooks/useThemeColor"

import { MenuRadioItemGroup } from "@chakra-ui/react"

import { RusFlagIcon, USAFlagIcon } from "@shared/ui/assets/icons"

import MenuItem from "@shared/ui/MenuItem"
import MenuList from "@shared/ui/MenuList"

export default function LanguageMenu() {
  const { i18n } = useTranslation()
  const { primary, mainHover } = useThemeColors()

  const handleLanguageChange = (e: { value: string }) => {
    i18n.changeLanguage(e.value)
  }
  return (
    <MenuList minW="5rem">
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
          color={i18n.language === "ru" ? primary : "inherit"}
        ></MenuItem>
      </MenuRadioItemGroup>
    </MenuList>
  )
}
