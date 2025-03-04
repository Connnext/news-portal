import { Link } from "react-router"

import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import { ROUTES } from "@shared/constants/routes"
import { useTranslation } from "react-i18next"
import { useThemeColors } from "./../../shared/hooks/useThemeColor"
import { ThemeSwitcher } from "@features/ThemeSwitcher/ThemeSwitcher"
import { LanguageSwitcher } from "@features/LanguageSwitcher/LanguageSwitcher"

interface LoginLayoutProps {
  children: React.ReactNode
}
export default function LoginLayout({ children }: LoginLayoutProps) {
  const { backgroundContent, textPrimary, textSecondary, textSecondaryHover } =
    useThemeColors()

  const { t } = useTranslation()
  return (
    <Container maxW={"5xl"}>
      <Flex justifyContent={"flex-end"} pt={4} px={2} gap={1}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </Flex>
      <Flex direction="column" align="center" justify="center" minH="100vh">
        <Flex
          p={4}
          rounded={"2xl"}
          justifyContent={"center"}
          bg={backgroundContent}
          w={"100%"}
        >
          <Stack align="center" mb={2}>
            <Heading fontSize="4xl" color={textPrimary}>
              {t("auth.log_in_to_account")}
            </Heading>
            <Text fontSize="lg" color={textSecondary}>
              {t("auth.enjoy_features")}
              <Text as="span" color={textSecondaryHover}>
                <Link to="https://www.youtube.com/">✌️</Link>
              </Text>
            </Text>
          </Stack>
          {children}
        </Flex>
        <Box
          boxShadow="lg"
          mt={2}
          p={4}
          borderWidth="1px"
          borderRadius="md"
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
        </Box>
      </Flex>
    </Container>
  )
}
