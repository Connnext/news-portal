import { Link } from "react-router"

import { useColorMode } from "@shared/ui/components/color-mode"
import { useThemeColors } from "@shared/hooks/useThemeColor"

import MoonLight from "@shared/ui/assets/images/MoonLight.png"
import MoonDark from "@shared/ui/assets/images/MoonDark.png"

import { Box, Container, Flex, Image, Text } from "@chakra-ui/react"
import { ROUTES } from "@shared/constants/routes"
import { LoginLayoutProps } from "./AuthLayout.types"
import GoBack from "@features/GoBack"
import ThemeSwitcher from "@features/ThemeSwitcher"
import LanguageSwitcher from "@features/LanguageSwitcher"

export default function AuthLayout({ children }: LoginLayoutProps) {
  const { backgroundContent, secondary } = useThemeColors()
  const { colorMode } = useColorMode()

  return (
    <Container maxW={"5xl"}>
      {/* <Container maxW="100vw" p={0} h="100vh"></Container> */}
      {/* Верхние переключатели */}
      <Flex justifyContent="space-between" pt={4} px={2}>
        <GoBack />
        <Link to={ROUTES.HOME}>
          <Text
            color={secondary}
            fontSize="2xl"
            fontFamily="monospace"
            fontWeight="bold"
            whiteSpace="nowrap"
          >
            Strict Sudo
          </Text>
        </Link>

        <Flex gap={1}>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </Flex>
      </Flex>

      {/* Основной контейнер */}
      <Flex direction="column" align="center" justify="center" minH="90vh">
        <Flex
          rounded={"2xl"}
          justifyContent={"center"}
          alignItems={"center"}
          bg={backgroundContent}
          boxShadow="lg"
          overflow="hidden"
          h="500px"
        >
          {/* Левая часть - изображение */}
          <Box w="50%" h="100%">
            <Image
              src={colorMode === "light" ? MoonDark : MoonLight}
              alt="Moon"
              objectFit="cover"
              w="100%"
              h="100%"
            />
          </Box>

          {/* Правая часть - форма */}
          <Flex
            w="50%"
            h="100%"
            align="center"
            justify="center"
            p={2}
            flexDirection="column"
          >
            {children}
          </Flex>
        </Flex>
      </Flex>
    </Container>
  )
}
