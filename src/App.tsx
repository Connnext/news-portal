import { AppRouter } from "./app/router/AppRouter"

import { ChakraProvider } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"

import useSystemTheme from "@shared/hooks/useSystemTheme"
import theme from "./theme"

function App() {
  const systemTheme = useSystemTheme()
  return (
    <ChakraProvider value={theme}>
      <ThemeProvider defaultTheme={systemTheme} attribute="class">
        <AppRouter />
      </ThemeProvider>
    </ChakraProvider>
  )
}

export default App
