import { Box, MenuRoot, MenuTrigger } from "@chakra-ui/react"
import { LanguageIcon } from "@shared/ui/assets/icons"
import LanguageMenu from "./ui"
import IconButton from "@shared/ui/Buttons/IconButton"

export default function LanguageSwitcher() {
  return (
    <Box position="relative">
      <MenuRoot>
        <MenuTrigger asChild>
          <IconButton ariaLabel="Toggle Language">
            <LanguageIcon />
          </IconButton>
        </MenuTrigger>
        <LanguageMenu />
      </MenuRoot>
    </Box>
  )
}
