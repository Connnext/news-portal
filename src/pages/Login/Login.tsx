import { Box, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react"
import { Button } from "@components/ui/button"
import { Checkbox } from "@components/ui/checkbox"
import { Field } from "@components/ui/field"
import { useThemeColors } from "@hooks/useThemeColor"
import { useForm, SubmitHandler } from "react-hook-form"
import { Link } from "react-router"
import { ROUTES } from "@utils/constants/routes"

type FormValues = {
  email: string
  password: string
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>() // Инициализация useForm

  const { primary, background, text } = useThemeColors()

  // Обработчик отправки формы
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Submittedw data:", data)
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
          <Stack align={"center"} mb={2}>
            <Heading fontSize={"4xl"}>Log in to your account</Heading>
            <Text fontSize={"lg"} color={text}>
              to enjoy all of our cool{" "}
              <Text color={primary}>
                <Link to={"https://www.youtube.com/"}>features ✌️</Link>{" "}
              </Text>
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            color={text}
            bg={background}
            boxShadow={"lg"}
            p={8}
          >
            <Stack gap={"4"} align={"center"} maxW={"sm"} w={"full"}>
              {/* Поле для email */}
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

              {/* Поле для password */}
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
                  <Checkbox>Remember me</Checkbox>
                  <Text fontSize={"14px"} color={primary}>
                    <Link to={ROUTES.FORGOT_PASSWORD}>Forgot password?</Link>
                  </Text>
                </Flex>

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
                  Login
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
            <Text fontSize="sm" color={primary}>
              Don&apos;t have an account?{" "}
              <Link to={ROUTES.REGISTRATION} style={{ fontWeight: "bold" }}>
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
