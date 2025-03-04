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
import { useState } from "react"

export const ThemeSwitcher = () => {
  type ThemeMode = "light" | "dark" | "system"

  const { colorMode, setColorMode } = useColorMode()
  const { primary, background, mainHover } = useThemeColors()
  const { t } = useTranslation()
  const systemTheme = useSystemTheme()
  const [theme, setTheme] = useState<ThemeMode>(systemTheme)

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

  const renderMenuItem = (
    value: ThemeMode,
    Icon: React.ReactElement,
    label: string,
  ) => (
    <MenuRadioItem
      key={value}
      value={value}
      closeOnSelect={false}
      bg={theme === value ? mainHover : "inherit"}
      color={theme === value ? primary : "inherit"}
      _hover={{ bg: mainHover }}
      borderRadius="lg"
      cursor={"pointer"}
    >
      {Icon} {label}
    </MenuRadioItem>
  )

  return (
    <Box position="relative">
      <MenuRoot>
        <MenuTrigger asChild>
          <Button
            aria-label="Toggle Theme"
            variant="ghost"
            size="md"
            bg={background}
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
          borderRadius="xl"
          display="flex"
          flexDirection="column"
        >
          <MenuRadioItemGroup
            value={colorMode}
            onValueChange={handleThemeChange}
          >
            {renderMenuItem("light", <LightThemeIcon />, t("theme.light"))}
            {renderMenuItem("dark", <DarkThemeIcon />, t("theme.dark"))}
            {renderMenuItem(
              "system",
              systemTheme === "dark" ? <DarkThemeIcon /> : <LightThemeIcon />,
              t("theme.system"),
            )}
          </MenuRadioItemGroup>
        </MenuContent>
      </MenuRoot>
    </Box>
  )
}
