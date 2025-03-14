import React from "react"
import { Outlet } from "react-router"

import { useThemeColors } from "@shared/hooks/useThemeColor"

import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react"

import Sidebar from "@widgets/Sidebar"
import Header from "@widgets/Header"

const Layout: React.FC = () => {
  const { onOpen, onClose } = useDisclosure() // кастомный хук из Chakra UI, который помогает управлять состоянием открытости
  const { background, textPrimary } = useThemeColors()
  return (
    <Box background={background} pb={"40px"}>
      <Container maxW={"5xl"}>
        <Flex minH={"100vh"} color={textPrimary} borderRadius={"20px"}>
          <Sidebar onClose={() => onClose} />
          <Box w={"full"}>
            <Header onOpen={onOpen} />
            <Outlet />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Layout
