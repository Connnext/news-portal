import { AppRouter } from "./app/router/AppRouter"

import { ChakraProvider } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"

import useSystemTheme from "@shared/hooks/useSystemTheme"
import theme from "./theme"
import { Toaster } from "@shared/ui/components/toaster"

function App() {
  const systemTheme = useSystemTheme()
  return (
    <ChakraProvider value={theme}>
      <ThemeProvider defaultTheme={systemTheme} attribute="class">
        <AppRouter />
      </ThemeProvider>
      <Toaster />
    </ChakraProvider>
  )
}

export default App
