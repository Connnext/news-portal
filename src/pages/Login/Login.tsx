import { Box } from "@chakra-ui/react"
import LoginForm from "@features/Auth/login/ui/LoginForm"
import LoginLayout from "@widgets/LoginLayout"

const Login = () => {
  return (
    <Box overflow="hidden" h="100vh">
      <LoginLayout>
        <LoginForm />
      </LoginLayout>
    </Box>
  )
}

export default Login
