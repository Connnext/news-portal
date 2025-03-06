import { Link } from "react-router"

import { Box, Container, Flex, Image, Text } from "@chakra-ui/react"
import { ROUTES } from "@shared/constants/routes"
import { useTranslation } from "react-i18next"
import { useThemeColors } from "./../../shared/hooks/useThemeColor"
import { ThemeSwitcher } from "@features/ThemeSwitcher/ThemeSwitcher"
import { LanguageSwitcher } from "@features/LanguageSwitcher/LanguageSwitcher"

import MoonLight from "@shared/ui/assets/images/MoonLight.png"
import MoonDark from "@shared/ui/assets/images/MoonDark.png"
import BackButton from "@shared/ui/Buttons/BackButton"
import { useColorMode } from "@shared/ui/components/color-mode"

interface LoginLayoutProps {
  children: React.ReactNode
}
export default function LoginLayout({ children }: LoginLayoutProps) {
  const { backgroundContent, textSecondary, textSecondaryHover } =
    useThemeColors()
  const { colorMode } = useColorMode()
  const { t } = useTranslation()

  return (
    <Container maxW={"5xl"}>
      {/* <Container maxW="100vw" p={0} h="100vh"></Container> */}
      {/* Верхние переключатели */}
      <Flex justifyContent="space-between" pt={4} px={2}>
        <BackButton />
        <Link to={ROUTES.HOME}>
          <Text
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
            <Text mt={10} fontSize="sm" color={textSecondary}>
              {t("auth.dont_have_account")}{" "}
              <Link
                to={ROUTES.REGISTRATION}
                style={{ fontWeight: "bold", color: textSecondaryHover }}
              >
                {t("auth.sign_up_here")}
              </Link>
            </Text>
          </Flex>
        </Flex>

        {/* Подвал */}
        {/* <Box
          boxShadow="lg"
          mt={2}
          p={3}
          borderWidth="1px"
          borderRadius="lg"
          bg={backgroundContent}
          textAlign="center"
        >
          <Text fontSize="sm" color={textSecondary}>
            {t("auth.dont_have_account")}{" "}
            <Link
              to={ROUTES.REGISTRATION}
              style={{ fontWeight: "bold", color: textSecondaryHover }}
            >
              {t("auth.sign_up_here")}
            </Link>
          </Text>
        </Box> */}
      </Flex>
    </Container>
  )
}
