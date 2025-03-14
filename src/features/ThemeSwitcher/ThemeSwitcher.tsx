import { useId } from "react"
import { useTranslation } from "react-i18next"
import { useOpenStore } from "@shared/store/openStore"
import { useColorMode } from "@shared/ui/components/color-mode"

import { Box, MenuRoot, MenuTrigger } from "@chakra-ui/react"
import { LightThemeIcon, DarkThemeIcon } from "@shared/ui/assets/icons"

import IconButton from "@shared/ui/Buttons/IconButton"
import ThemeMenu from "./ui"
import { Tooltip } from "@shared/ui/components/tooltip"

export default function ThemeSwitcher() {
  const triggerId = useId()
  const { t } = useTranslation()
  const { isOpen, toggleOpen } = useOpenStore()
  const { colorMode } = useColorMode()

  return (
    <Box position="relative">
      <MenuRoot
        onOpenChange={details => {
          if (isOpen !== details.open) toggleOpen()
        }}
        onInteractOutside={() => {
          if (isOpen) toggleOpen()
        }}
        ids={{ trigger: triggerId }}
      >
        <Tooltip
          disabled={!!isOpen}
          ids={{ trigger: triggerId }}
          openDelay={500}
          closeDelay={100}
          showArrow
          content={t("theme.change_theme")}
        >
          <MenuTrigger asChild>
            <IconButton ariaLabel="Toggle Theme">
              {colorMode === "light" ? <DarkThemeIcon /> : <LightThemeIcon />}
            </IconButton>
          </MenuTrigger>
        </Tooltip>
        <ThemeMenu />
      </MenuRoot>
    </Box>
  )
}
