import { render as rtlRender } from "@testing-library/react"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./../theme"

export function render(ui: React.ReactNode) {
  return rtlRender(<>{ui}</>, {
    wrapper: (props: React.PropsWithChildren) => (
      <ChakraProvider value={theme}>{props.children}</ChakraProvider>
    ),
  })
}
