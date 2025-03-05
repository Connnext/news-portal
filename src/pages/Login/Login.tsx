import { Box } from "@chakra-ui/react"
import LoginForm from "@features/Auth/login/ui/LoginForm"
import LoginLayout from "@widgets/LoginLayout"

const Login = () => {
  return (
    <Box
      // bgGradient="to-r"
      // gradientFrom="blue.900"
      // gradientTo="pink.300"
      overflow="hidden"
      h="100vh"
    >
      <LoginLayout>
        <LoginForm />
      </LoginLayout>
    </Box>
  )
}

export default Login
