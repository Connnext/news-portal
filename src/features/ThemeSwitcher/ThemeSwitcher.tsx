import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useThemeColors } from "@shared/hooks/useThemeColor"
import useSystemTheme from "@shared/hooks/useSystemTheme"
import {
  Box,
  Button,
  MenuContent,
  MenuRadioItemGroup,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react"

import { LightThemeIcon, DarkThemeIcon } from "@shared/ui/assets/icons"
import { ColorMode, useColorMode } from "@shared/ui/components/color-mode"
import { ThemeMode } from "./ThemeSwitcher.types"
import ThemeMenuItem from "@shared/ui/MenuItem/ThemeMenuItem"

export const ThemeSwitcher: React.FC = () => {
  const { colorMode, setColorMode } = useColorMode()
  const { background, mainHover } = useThemeColors()
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
          <Button
            aria-label="Toggle Theme"
            variant="ghost"
            size="md"
            bg={"transparent"}
            _hover={{ bg: mainHover }}
            _focusVisible={{ outline: "none" }}
          >
            {colorMode === "light" ? <DarkThemeIcon /> : <LightThemeIcon />}
          </Button>
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
            <ThemeMenuItem
              value="light"
              Icon={<LightThemeIcon />}
              label={t("theme.light")}
              theme={theme}
            />
            <ThemeMenuItem
              value="dark"
              Icon={<LightThemeIcon />}
              label={t("theme.dark")}
              theme={theme}
            />
            <ThemeMenuItem
              value="system"
              Icon={
                systemTheme === "dark" ? <DarkThemeIcon /> : <LightThemeIcon />
              }
              label={t("theme.system")}
              theme={theme}
            />
          </MenuRadioItemGroup>
        </MenuContent>
      </MenuRoot>
    </Box>
  )
}
