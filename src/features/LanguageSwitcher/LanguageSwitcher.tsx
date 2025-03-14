import { useId } from "react"
import { useTranslation } from "react-i18next"

import { Box, MenuRoot, MenuTrigger } from "@chakra-ui/react"
import { LanguageIcon } from "@shared/ui/assets/icons"
import IconButton from "@shared/ui/Buttons/IconButton"
import { Tooltip } from "@shared/ui/components/tooltip"
import { useOpenStore } from "@shared/store/openStore"
import LanguageMenu from "./ui"

export default function LanguageSwitcher() {
  const triggerId = useId()
  const { t } = useTranslation()
  const { isOpen, toggleOpen } = useOpenStore()

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
          content={t("language.change_language")}
        >
          <MenuTrigger asChild>
            <IconButton ariaLabel="Toggle Language">
              <LanguageIcon />
            </IconButton>
          </MenuTrigger>
        </Tooltip>
        <LanguageMenu />
      </MenuRoot>
    </Box>
  )
}
