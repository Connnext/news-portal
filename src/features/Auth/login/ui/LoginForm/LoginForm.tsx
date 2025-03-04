import { Link } from "react-router"
import { Box, Button, Flex, Input, Stack, Text } from "@chakra-ui/react"

import { ROUTES } from "@shared/constants/routes"
import { useThemeColors } from "@shared/hooks/useThemeColor"
import { SubmitHandler, useForm } from "react-hook-form"
import { Field } from "@components/ui/field"
import { Checkbox } from "@components/ui/checkbox"

type FormValues = {
  email: string
  password: string
}
export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
  const { primary, primaryHover, textPrimary, textSecondaryHover } =
    useThemeColors()

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log("Submitted data:", data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex align={"center"} justify={"center"} color={textPrimary}>
        <Stack mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Box color={textPrimary} p={8}>
            <Stack gap={"4"} align={"center"} maxW={"sm"} w={"full"}>
              <Field
                label="Email"
                required
                invalid={!!errors.email}
                errorText={errors.email?.message}
              >
                <Input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                  placeholder="Enter your email"
                />
              </Field>

              <Field
                label="Password"
                required
                invalid={!!errors.password}
                errorText={errors.password?.message}
              >
                <Input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  placeholder="Enter your password"
                />
              </Field>

              <Stack gap={3} w={"full"}>
                <Flex gap="10" w={"full"} justify={"space-between"}>
                  <Checkbox colorScheme="blue">Remember me</Checkbox>
                  <Text fontSize={"14px"} color={textSecondaryHover}>
                    <Link to={ROUTES.FORGOT_PASSWORD}>Forgot password?</Link>
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
                  Login
                </Button>
                <Text fontSize={"sm"} color={textSecondaryHover}>
                  <Link to={ROUTES.HOME}>Back</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </form>
  )
}
