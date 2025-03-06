import { ButtonProps } from "@chakra-ui/react"
import React from "react"

export type IconButtonProps = ButtonProps & {
  ariaLabel: string
  children: React.ReactNode
  hoverBg?: string
}
