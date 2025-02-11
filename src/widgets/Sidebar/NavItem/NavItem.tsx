import React from "react"
import { NavItemProps } from "../Sidebar.types"
import { Box, Flex } from "@chakra-ui/react"
import { Link } from "react-router"

const NavItem = ({ icon, children, route }: NavItemProps) => {
  return (
    <Link to={route}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#F76C6C",
          color: "white",
        }}
      >
        {icon ? (
          <Box mr="4" fontSize="16px">
            {icon} {/* Рендерим компонент иконки напрямую */}
          </Box>
        ) : null}
        {children}
      </Flex>
    </Link>
  )
}

export default NavItem
