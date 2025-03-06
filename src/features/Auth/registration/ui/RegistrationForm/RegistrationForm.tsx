import { Link } from "react-router"

import { useTranslation } from "react-i18next"
import { useThemeColors } from "@shared/hooks/useThemeColor"

import { SubmitHandler, useForm } from "react-hook-form"

import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import { ROUTES } from "@shared/constants/routes"
import { Checkbox } from "@shared/ui/components/checkbox"
import DynamicInput from "@shared/ui/Inputs/DynamicInput"
import { FormValues } from "@features/Auth/login/ui/LoginForm/LoginForm.types"

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
  const {
    primary,
    primaryHover,
    secondary,
    textSecondary,
    textPrimary,
    textSecondaryHover,
  } = useThemeColors()
  const { t } = useTranslation()
  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log("Submitted data:", data)
  }
  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Flex align={"center"} justify={"center"} color={textPrimary}>
        <Stack mx={"auto"} maxW={"lg"}>
          <Flex
            flexDirection={"column"}
            justifyContent={"space-between"}
            color={textPrimary}
            gap={4}
          >
            <Heading
              color={secondary}
              display={"flex"}
              justifyContent={"center"}
              size={"2xl"}
            >
              {t("navigation.login")}
            </Heading>
            <Stack gap={"5"} align={"center"} maxW={"sm"} w={"full"}>
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
                placeholder="Enter your password"
                error={errors.password?.message}
              />

              <Stack gap={3} w={"full"}>
                <Flex gap="10" w={"full"} justify={"space-between"}>
                  <Checkbox
                    color={secondary}
                    variant={"subtle"}
                    size={"md"}
                    colorScheme="blue"
                  >
                    {t("auth.remember_me")}
                  </Checkbox>
                  <Text fontSize={"14px"} color={textSecondaryHover}>
                    <Link to={ROUTES.FORGOT_PASSWORD}>
                      {t("auth.forgot_password")}
                    </Link>
                  </Text>
                </Flex>

                <Button
                  type="submit"
                  w={"full"}
                  bg={primary}
                  color={"white"}
                  _hover={{
                    bg: primaryHover,
                  }}
                >
                  {t("navigation.login")}
                </Button>
              </Stack>
              <Text mt={10} fontSize="sm" color={textSecondary}>
                {t("auth.dont_have_account")}{" "}
                <Link
                  to={ROUTES.REGISTRATION}
                  style={{ fontWeight: "bold", color: textSecondaryHover }}
                >
                  {t("auth.sign_up_here")}
                </Link>
              </Text>
            </Stack>
          </Flex>
        </Stack>
      </Flex>
    </form>
  )
}
