import React from "react"
import { Flex, IconButton, Text } from "@chakra-ui/react"
import { useThemeColors } from "@shared/hooks/useThemeColor"
import { HeaderProps } from "./Header.types"
import { ThemeSwitcher } from "@features/ThemeSwitcher/ThemeSwitcher"
import { LanguageSwitcher } from "@features/LanguageSwitcher/LanguageSwitcher"

const Header: React.FC<HeaderProps> = ({ onOpen }) => {
  const { background, textPrimary } = useThemeColors()

  return (
    <Flex
      width={"full"}
      px={"4"}
      position={"sticky"}
      top={"0"}
      height={"20"}
      alignItems={"center"}
      color={textPrimary}
      bg={background}
      justifyContent={{ base: "space-between", md: "flex-end" }}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant={"outline"}
        aria-label="open menu"
      />
      <Text
        display={{ base: "flex", md: "none" }}
        fontSize={"2xl"}
        fontFamily={"monospace"}
        fontWeight={"bold"}
      >
        Logo
      </Text>

      <Flex gap={1} justifyContent={"flex-end"}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </Flex>
    </Flex>
  )
}

export default Header
