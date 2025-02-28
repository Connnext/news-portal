import { Box, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react"

import { Field } from "@components/ui/field"
import { useThemeColors } from "@hooks/useThemeColor"
import { useForm, SubmitHandler } from "react-hook-form"
import { Link } from "react-router"
import { ROUTES } from "@shared/constants/routes"
import { Button } from "@components/ui/button"

interface FormValues {
  email: string
  emailConfirm: string
  password: string
}

const Registration = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>()
  const { primary, background, text } = useThemeColors()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data: ", data)
    // Обработка данных, например, отправка на сервер
  }

  // Проверка на совпадение email и confirmEmail
  const validateEmailMatch = (value: string) => {
    return value === watch("email") || "Emails do not match"
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        color={text}
        bg={background}
      >
        <Stack mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack mb={3} align={"center"}>
            <Heading fontSize={"4xl"}>Sign up for your account</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            color={text}
            bg={background}
            boxShadow={"lg"}
            p={8}
          >
            <Stack gap={"4"} align={"center"} maxW={"sm"} w={"full"}>
              {/* Email */}
              <Field
                label="Email"
                required
                invalid={!!errors.email}
                errorText={errors.email?.message}
              >
                <Input
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
              </Field>

              {/* Confirm Email */}
              <Field
                label="Confirm Email"
                required
                invalid={!!errors.emailConfirm}
                errorText={errors.emailConfirm?.message}
              >
                <Input
                  placeholder="Confirm your email"
                  {...register("emailConfirm", {
                    required: "Confirmation email is required",
                    validate: validateEmailMatch,
                  })}
                />
              </Field>

              {/* Password */}
              <Field
                label="Password"
                required
                invalid={!!errors.password}
                errorText={errors.password?.message}
              >
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                />
              </Field>

              <Stack gap={3} w={"full"}>
                {/* Submit Button */}
                <Button
                  colorPalette={"cyan"}
                  type="submit"
                  variant="outline"
                  w={"full"}
                  color={text}
                  bg={background}
                  _hover={{
                    bg: primary,
                    color: "white",
                  }}
                >
                  Sign up
                </Button>
                <Text
                  color={primary}
                  fontSize={"sm"}
                  textAlign={"left"}
                  cursor={"pointer"}
                >
                  <Link to={ROUTES.HOME}>Back</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
          <Box
            boxShadow={"lg"}
            mt={2}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            bg={background}
            textAlign="center"
          >
            <Flex gap={"1.5"} justify={"center"} fontSize="sm" color={primary}>
              Already have an account?{" "}
              <Link to={ROUTES.LOGIN}>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  fontWeight="bold"
                >
                  Log in here
                </Text>
              </Link>
            </Flex>
          </Box>
        </Stack>
      </Flex>
    </form>
  )
}

export default Registration
