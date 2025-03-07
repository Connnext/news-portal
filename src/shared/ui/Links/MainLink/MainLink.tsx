import { Link } from "react-router"
import { Link as ChakraLink } from "@chakra-ui/react"
import { MainLinkProps } from "./MainLink.types"

export default function MainLink({ route, children, ...props }: MainLinkProps) {
  return (
    <ChakraLink variant="underline" {...props}>
      <Link to={route}>{children}</Link>
    </ChakraLink>
  )
}
