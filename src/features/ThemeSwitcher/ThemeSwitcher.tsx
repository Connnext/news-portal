import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useThemeColors } from "@shared/hooks/useThemeColor"
import useSystemTheme from "@shared/hooks/useSystemTheme"
import {
  Box,
  MenuContent,
  MenuRadioItemGroup,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react"

import { LightThemeIcon, DarkThemeIcon } from "@shared/ui/assets/icons"
import { ColorMode, useColorMode } from "@shared/ui/components/color-mode"
import { ThemeMode } from "./ThemeSwitcher.types"

import IconButton from "@shared/ui/Buttons/IconButton"
import MenuItem from "@shared/ui/MenuItem"

export const ThemeSwitcher: React.FC = () => {
  const { colorMode, setColorMode } = useColorMode()
  const { background, mainHover, primary } = useThemeColors()
  const { t } = useTranslation()
  const systemTheme = useSystemTheme()
  const [theme, setTheme] = useState<ThemeMode>(colorMode)

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
    <Box position="relative">
      <MenuRoot>
        <MenuTrigger asChild>
          <IconButton ariaLabel="Toggle Theme">
            {colorMode === "light" ? <DarkThemeIcon /> : <LightThemeIcon />}
          </IconButton>
        </MenuTrigger>
        <MenuContent
          minW="10rem"
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
              Icon={
                systemTheme === "dark" ? <DarkThemeIcon /> : <LightThemeIcon />
              }
              label={t("theme.system")}
              bg={theme === "system" ? mainHover : "inherit"}
              color={theme === "system" ? primary : "inherit"}
            />
          </MenuRadioItemGroup>
        </MenuContent>
      </MenuRoot>
    </Box>
  )
}
