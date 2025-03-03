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

export const ThemeSwitcher = () => {
  const { colorMode, setColorMode } = useColorMode()
  const { background, backgroundContent } = useThemeColors()
  const { t } = useTranslation()
  const systemTheme = useSystemTheme()

  const handleThemeChange = (e: { value: string }) => {
    const value = e.value
    if (value === "system") {
      setColorMode(systemTheme)
    } else {
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
          minW="10rem"
          position="absolute"
          top="110%"
          left="0"
          zIndex="10"
          bg={background}
          boxShadow="md"
          borderRadius="md"
        >
          <MenuRadioItemGroup
            value={colorMode}
            onValueChange={handleThemeChange}
          >
            <MenuRadioItem value="light">
              <LightThemeIcon /> {t("theme.light")}
            </MenuRadioItem>
            <MenuRadioItem value="dark">
              <DarkThemeIcon /> {t("theme.dark")}
            </MenuRadioItem>
            <MenuRadioItem value="system">
              {systemTheme === "dark" ? <DarkThemeIcon /> : <LightThemeIcon />}{" "}
              {t("theme.system")}
            </MenuRadioItem>
          </MenuRadioItemGroup>
        </MenuContent>
      </MenuRoot>
    </Box>
  )
}
