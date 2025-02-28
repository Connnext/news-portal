import { Box, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react"
import { Button } from "@components/ui/button"
import { Checkbox } from "@components/ui/checkbox"
import { Field } from "@components/ui/field"
import { useThemeColors } from "@hooks/useThemeColor"
import { useForm, SubmitHandler } from "react-hook-form"
import { Link } from "react-router"
import { ROUTES } from "@shared/constants/routes"

type FormValues = {
  email: string
  password: string
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const {
    primary,
    primaryHover,
    background,
    backgroundContent,
    textPrimary,
    textSecondary,
    textSecondaryHover,
  } = useThemeColors()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Submitted data:", data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        color={textPrimary}
        bg={background}
      >
        <Stack mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"} mb={2}>
            <Heading fontSize={"4xl"} color={textPrimary}>
              Log in to your account
            </Heading>
            <Text fontSize={"lg"} color={textSecondary}>
              to enjoy all of our cool{" "}
              <Text as="span" color={textSecondaryHover}>
                <Link to={"https://www.youtube.com/"}>features ✌️</Link>
              </Text>
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            color={textPrimary}
            bg={backgroundContent}
            boxShadow={"lg"}
            p={8}
          >
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
              Don&apos;t have an account?{" "}
              <Link
                to={ROUTES.REGISTRATION}
                style={{ fontWeight: "bold", color: textSecondaryHover }}
              >
                Sign up here
              </Link>
            </Text>
          </Box>
        </Stack>
      </Flex>
    </form>
  )
}

export default Login
