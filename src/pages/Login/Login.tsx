import { Box } from "@chakra-ui/react"
import LoginForm from "@features/Auth/login/ui/LoginForm"
import AuthLayout from "@widgets/AuthLayout"

const Login = () => {
  return (
    <Box
      // bgGradient="to-tr"
      // gradientFrom="yellow.800"
      // gradientTo="pink.300"
      overflow="hidden"
      h="100vh"
    >
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
    </Box>
  )
}

export default Login
