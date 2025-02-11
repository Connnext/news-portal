import { ChakraProvider } from "@chakra-ui/react"
import { AppRouter } from "./app/router/AppRouter"
import { ThemeProvider } from "next-themes"
import theme from "./theme"

function App() {
  return (
    <ChakraProvider value={theme}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <AppRouter />
      </ThemeProvider>
    </ChakraProvider>
  )
}

export default App
