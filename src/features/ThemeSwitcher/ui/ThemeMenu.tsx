import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useThemeColors } from "@shared/hooks/useThemeColor"
import useSystemTheme from "@shared/hooks/useSystemTheme"
import { MenuRadioItemGroup } from "@chakra-ui/react"

import { LightThemeIcon, DarkThemeIcon } from "@shared/ui/assets/icons"
import { ColorMode, useColorMode } from "@shared/ui/components/color-mode"

import MenuItem from "@shared/ui/MenuItem"
import MenuList from "@shared/ui/MenuList"

import { ThemeMode } from "../ThemeSwitcher.types"

export default function ThemeMenu() {
  const { colorMode, setColorMode } = useColorMode()
  const [theme, setTheme] = useState<ThemeMode>(colorMode)
  const { mainHover, primary } = useThemeColors()
  const { t } = useTranslation()
  const systemTheme = useSystemTheme()

  const handleThemeChange = (e: { value: string }) => {
    const value = e.value as ThemeMode
    if (value === "system") {
      setTheme(value)
      setColorMode(systemTheme)
    } else {
      setTheme(value)
      setColorMode(value as ColorMode)
    }
  }
  return (
    <MenuList minW="11rem">
      <MenuRadioItemGroup
        display={"flex"}
        flexDirection={"column"}
        gap={1}
        value={colorMode}
        onValueChange={handleThemeChange}
      >
        <MenuItem
          value="light"
          Icon={<LightThemeIcon />}
          label={t("theme.light")}
          bg={theme === "light" ? mainHover : "inherit"}
          color={theme === "light" ? primary : "inherit"}
        />
        <MenuItem
          value="dark"
          Icon={<DarkThemeIcon />}
          label={t("theme.dark")}
          bg={theme === "dark" ? mainHover : "inherit"}
          color={theme === "dark" ? primary : "inherit"}
        />
        <MenuItem
          value="system"
          Icon={systemTheme === "dark" ? <DarkThemeIcon /> : <LightThemeIcon />}
          label={t("theme.system")}
          bg={theme === "system" ? mainHover : "inherit"}
          color={theme === "system" ? primary : "inherit"}
        />
      </MenuRadioItemGroup>
    </MenuList>
  )
}
