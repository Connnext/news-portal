import { Link } from "react-router"

import { useTranslation } from "react-i18next"
import { useThemeColors } from "@shared/hooks/useThemeColor"

import { SubmitHandler, useForm } from "react-hook-form"

import { Flex, Heading, Stack, Text } from "@chakra-ui/react"
import { ROUTES } from "@shared/constants/routes"
import { Checkbox } from "@shared/ui/components/checkbox"
import DynamicInput from "@shared/ui/Inputs/DynamicInput"
import { FormValues } from "./LoginForm.types"
import TextButton from "@shared/ui/Buttons/TextButton"
import MainLink from "@shared/ui/Links/MainLink"

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
  const { secondary, textSecondary, textPrimary, textSecondaryHover } =
    useThemeColors()

  const { t } = useTranslation()

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log("Submitted data:", data)
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Flex align={"center"} justify={"center"} color={textPrimary}>
        <Stack mx={"auto"} maxW={"lg"}>
          {/* maxW={"xl"} width="100%" */}
          <Flex
            flexDirection={"column"}
            justifyContent={"space-between"}
            color={textPrimary}
            gap={6}
          >
            <Heading
              color={secondary}
              display={"flex"}
              justifyContent={"center"}
              size={"3xl"}
              transition={"background 0.1s ease-in-out color 0.1s ease-in-out"}
            >
              {t("navigation.login")}
            </Heading>
            <Stack gap={"5"} align={"center"} maxW={"xl"} w={"full"}>
              <DynamicInput
                label={t("auth.email")}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
                error={errors.email?.message}
              />
              <DynamicInput
                label={t("auth.password")}
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                error={errors.password?.message}
              />

              <Stack gap={3} w={"full"}>
                <Flex gap="10" w={"full"} justify={"space-between"}>
                  <Checkbox
                    color={secondary}
                    variant={"subtle"}
                    size={"md"}
                    colorScheme="blue"
                    transition={
                      "background 0.1s ease-in-out color 0.1s ease-in-out"
                    }
                  >
                    {t("auth.remember_me")}
                  </Checkbox>
                  <Text
                    transition={
                      "background 0.1s ease-in-out color 0.1s ease-in-out"
                    }
                    fontSize={"14px"}
                    color={textSecondaryHover}
                  >
                    <Link to={ROUTES.FORGOT_PASSWORD}>
                      {t("auth.forgot_password")}
                    </Link>
                  </Text>
                </Flex>

                <TextButton>{t("navigation.login")}</TextButton>
              </Stack>
              <Text mt={10} fontSize="xs" color={textSecondary}>
                {t("auth.dont_have_account")}{" "}
                <MainLink route={ROUTES.REGISTRATION}>
                  {t("auth.sign_up_here")}
                </MainLink>
              </Text>
            </Stack>
          </Flex>
        </Stack>
      </Flex>
    </form>
  )
}
