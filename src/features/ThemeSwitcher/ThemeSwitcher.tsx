import { Box, MenuRoot, MenuTrigger } from "@chakra-ui/react"

import { LightThemeIcon, DarkThemeIcon } from "@shared/ui/assets/icons"
import { useColorMode } from "@shared/ui/components/color-mode"

import IconButton from "@shared/ui/Buttons/IconButton"
import ThemeMenu from "./ui"

export default function ThemeSwitcher() {
  const { colorMode } = useColorMode()
  return (
    <Box position="relative">
      <MenuRoot>
        <MenuTrigger asChild>
          <IconButton ariaLabel="Toggle Theme">
            {colorMode === "light" ? <DarkThemeIcon /> : <LightThemeIcon />}
          </IconButton>
        </MenuTrigger>
        <ThemeMenu />
      </MenuRoot>
    </Box>
  )
}
