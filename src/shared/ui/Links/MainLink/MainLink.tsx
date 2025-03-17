import { Link as RouterLink } from "react-router"
import { Link as ChakraLink } from "@chakra-ui/react"
import { MainLinkProps } from "./MainLink.types"

export default function MainLink({ route, children, ...props }: MainLinkProps) {
  return (
    <RouterLink to={route} {...props}>
      <ChakraLink variant="underline" as={"p"}>
        {children}
      </ChakraLink>
    </RouterLink>
  )
}
