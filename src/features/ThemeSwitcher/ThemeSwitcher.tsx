import { useTranslation } from "react-i18next"

import { useThemeColors } from "@shared/hooks/useThemeColor"
import useSystemTheme from "@shared/hooks/useSystemTheme"

import {
  Box,
  Button,
  MenuContent,
  MenuRadioItem,
  MenuRadioItemGroup,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react"
import { ColorMode, useColorMode } from "@components/ui/color-mode"
import { LightThemeIcon, DarkThemeIcon } from "@shared/ui/icons"
import { FaCheck } from "react-icons/fa"
import { useState } from "react"

export const ThemeSwitcher = () => {
  type ThemeMode = "light" | "dark" | "system"

  const { colorMode, setColorMode } = useColorMode()
  const { background, backgroundContent } = useThemeColors()
  const { t } = useTranslation()
  const systemTheme = useSystemTheme()
  const [theme, setTheme] = useState<"light" | "dark" | "system">(systemTheme)

  const handleThemeChange = (e: { value: string }) => {
    const value = e.value
    if (value === "system") {
      setTheme(systemTheme)
      setColorMode(systemTheme)
    } else {
      setTheme(value as ThemeMode)
      setColorMode(value as ColorMode)
    }
  }

  return (
    <Box position="relative">
      <MenuRoot>
        <MenuTrigger asChild>
          <Button
            aria-label="Toggle Theme"
            variant="subtle"
            size="lg"
            bg={background}
            _hover={{
              bg: backgroundContent,
            }}
            _focusVisible={{ outline: "none", bg: backgroundContent }}
          >
            {colorMode === "light" ? <DarkThemeIcon /> : <LightThemeIcon />}
          </Button>
        </MenuTrigger>
        <MenuContent
          minW="11rem"
          position="absolute"
          top="110%"
          left="0"
          zIndex="10"
          bg={background}
          boxShadow="md"
          borderRadius="md"
          display="flex"
          flexDirection="column" // Убедитесь, что элементы расположены вертикально
        >
          <MenuRadioItemGroup
            value={colorMode}
            onValueChange={handleThemeChange}
          >
            <MenuRadioItem closeOnSelect={false} key={"light"} value="light">
              <LightThemeIcon /> {t("theme.light")}{" "}
              {theme === "light" && <FaCheck style={{ paddingLeft: "2px" }} />}
            </MenuRadioItem>
            <MenuRadioItem closeOnSelect={false} key={"dark"} value="dark">
              <DarkThemeIcon /> {t("theme.dark")}{" "}
              {theme === "dark" && <FaCheck style={{ paddingLeft: "2px" }} />}
            </MenuRadioItem>
            <MenuRadioItem closeOnSelect={false} key={"system"} value="system">
              {systemTheme === "dark" ? <DarkThemeIcon /> : <LightThemeIcon />}{" "}
              {t("theme.system")}{" "}
              {theme === "system" && <FaCheck style={{ paddingLeft: "2px" }} />}
            </MenuRadioItem>
          </MenuRadioItemGroup>
        </MenuContent>
      </MenuRoot>
    </Box>
  )
}
