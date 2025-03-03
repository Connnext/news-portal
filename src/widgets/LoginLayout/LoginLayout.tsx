import { Link } from "react-router"

import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/react"
import { ROUTES } from "@shared/constants/routes"
import { useTranslation } from "react-i18next"
import { useThemeColors } from "./../../shared/hooks/useThemeColor"
import { Radio, RadioGroup } from "@components/ui/radio"

interface LoginLayoutProps {
  children: React.ReactNode
}
export default function LoginLayout({ children }: LoginLayoutProps) {
  const { backgroundContent, textPrimary, textSecondary, textSecondaryHover } =
    useThemeColors()

  const { t } = useTranslation()
  return (
    <>
      <Stack align={"center"} mb={2}>
        <Heading fontSize={"4xl"} color={textPrimary}>
          {t("auth.log_in_to_account")}
        </Heading>
        <Text fontSize={"lg"} color={textSecondary}>
          {t("auth.enjoy_features")}
          <Text as="span" color={textSecondaryHover}>
            <Link to={"https://www.youtube.com/"}>✌️</Link>
          </Text>
        </Text>
      </Stack>
      {children}
      <Box
        boxShadow={"lg"}
        mt={2}
        p={4}
        borderWidth="1px"
        borderRadius="md"
        bg={backgroundContent}
        textAlign="center"
      >
        <Text fontSize="sm" color={textSecondary}>
          {t("auth.dont_have_account")}
          <Link
            to={ROUTES.REGISTRATION}
            style={{ fontWeight: "bold", color: textSecondaryHover }}
          >
            {t("auth.sign_up_here")}
          </Link>
        </Text>
      </Box>
      <RadioGroup defaultValue="1">
        <HStack gap="6">
          <Radio value="1">Option 1</Radio>
          <Radio value="2">Option 2</Radio>
          <Radio value="3">Option 3</Radio>
        </HStack>
      </RadioGroup>
    </>
  )
}
