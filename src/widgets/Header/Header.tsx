// components/Header/Header.tsx
import React, { useEffect, useState } from "react"
import {
  Box,
  Button,
  Flex,
  IconButton,
  MenuContent,
  MenuRadioItem,
  MenuRadioItemGroup,
  MenuRoot,
  MenuTrigger,
  Text,
} from "@chakra-ui/react"
import { MdLightMode, MdDarkMode } from "react-icons/md"
import { ColorMode, useColorMode } from "@components/ui/color-mode"
import { useThemeColors } from "@hooks/useThemeColor"
import { useTranslation } from "react-i18next"

interface HeaderProps {
  onOpen: () => void
}

const Header: React.FC<HeaderProps> = ({ onOpen }) => {
  const { colorMode, setColorMode } = useColorMode() // Управление темой
  const { background, text, switchColor } = useThemeColors()
  const { t } = useTranslation()
  const [systemTheme, setSystemTheme] = useState<ColorMode>("light")

  // const toggleLanguage = (lang: string) => {
  //   lang === "ru" ? i18n.changeLanguage("en") : i18n.changeLanguage("ru")
  // }

  // Определение предпочтений системной темы
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    setSystemTheme(mediaQuery.matches ? "dark" : "light")

    // Слушаем изменения предпочтений системы
    const listener = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light")
    }

    mediaQuery.addEventListener("change", listener)

    return () => {
      mediaQuery.removeEventListener("change", listener)
    }
  }, [])

  const handleThemeChange = (value: string) => {
    if (value === "system") {
      setColorMode(systemTheme) // Устанавливаем тему в зависимости от системных настроек
    } else {
      setColorMode(value as ColorMode) // Приводим значение к типу ColorMode
    }
  }

  return (
    <Flex
      width={"full"}
      px={"4"}
      position={"sticky"}
      top={"0"}
      height={"20"}
      alignItems={"center"}
      color={text}
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

      {/* Кнопка для переключения темы */}
      <Box position="relative">
        <MenuRoot>
          <MenuTrigger asChild>
            <Button
              aria-label="Toggle Theme"
              variant="subtle"
              size="lg"
              bg={background}
              transition={"0.6s"}
              _hover={{
                bg: switchColor,
              }}
            >
              {colorMode === "light" ? <MdDarkMode /> : <MdLightMode />}
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
            border="1px solid"
            borderColor={switchColor}
          >
            <MenuRadioItemGroup
              value={colorMode}
              onValueChange={(e) => handleThemeChange(e.value)} // Извлекаем значение из объекта
            >
              <MenuRadioItem
                _hover={{ bg: "transparent", cursor: "pointer" }}
                _checked={{
                  bg: switchColor,
                  color: text,
                  fontWeight: "bold",
                  _hover: {
                    bg: switchColor,
                  },
                }}
                value="light"
              >
                <MdLightMode /> {t("main.theme.light")}
              </MenuRadioItem>
              <MenuRadioItem
                _hover={{ bg: "transparent", cursor: "pointer" }}
                _checked={{
                  bg: switchColor,
                  color: text,
                  fontWeight: "bold",
                  _hover: {
                    bg: switchColor,
                  },
                }}
                value="dark"
              >
                <MdDarkMode /> {t("main.theme.dark")}
              </MenuRadioItem>
              <MenuRadioItem
                _hover={{ bg: "transparent", cursor: "pointer" }}
                _checked={{
                  bg: switchColor,
                  color: text,
                  fontWeight: "bold",
                  _hover: {
                    bg: switchColor,
                  },
                }}
                value="system"
              >
                {systemTheme === "dark" ? <MdDarkMode /> : <MdLightMode />}{" "}
                {t("main.theme.system")}
              </MenuRadioItem>
            </MenuRadioItemGroup>
          </MenuContent>
        </MenuRoot>
      </Box>

      {/* Кнопка для переключения языка */}
      <Box position="relative">
        <MenuRoot>
          <MenuTrigger asChild>
            <Button
              aria-label="Toggle Language"
              variant="subtle"
              size="lg"
              bg={background}
              transition={"0.6s"}
              _hover={{
                bg: switchColor,
              }}
            >
              {colorMode === "light" ? <MdDarkMode /> : <MdLightMode />}
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
            border="1px solid"
            borderColor={switchColor}
          >
            <MenuRadioItemGroup
              value={colorMode}
              onValueChange={(e) => handleThemeChange(e.value)} // Извлекаем значение из объекта
            >
              <MenuRadioItem
                _hover={{ bg: "transparent", cursor: "pointer" }}
                _checked={{
                  bg: switchColor,
                  color: text,
                  fontWeight: "bold",
                  _hover: {
                    bg: switchColor,
                  },
                }}
                value="light"
              >
                <MdLightMode /> {t("main.theme.light")}
              </MenuRadioItem>
              <MenuRadioItem
                _hover={{ bg: "transparent", cursor: "pointer" }}
                _checked={{
                  bg: switchColor,
                  color: text,
                  fontWeight: "bold",
                  _hover: {
                    bg: switchColor,
                  },
                }}
                value="dark"
              >
                <MdDarkMode /> {t("main.theme.dark")}
              </MenuRadioItem>
            </MenuRadioItemGroup>
          </MenuContent>
        </MenuRoot>
      </Box>
    </Flex>
  )
}

export default Header
