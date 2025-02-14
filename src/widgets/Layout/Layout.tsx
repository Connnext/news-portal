import React from "react"
import Header from "../Header"
import Sidebar from "../Sidebar"
import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react"
import { Outlet } from "react-router"
import { useThemeColors } from "@hooks/useThemeColor"

const Layout: React.FC = () => {
  const { onOpen, onClose } = useDisclosure() // кастомный хук из Chakra UI, который помогает управлять состоянием открытости
  const { background, textPrimary, backgroundContent } = useThemeColors()
  return (
    <Box background={background} pb={"40px"}>
      <Container>
        <Flex minH={"100vh"} color={textPrimary} borderRadius={"20px"}>
          <Sidebar onClose={() => onClose} />
          <Box w={"full"}>
            <Header onOpen={onOpen} />
            <Box
              // ml={{ base: 0, md: 60 }}
              p="4"
              border={"red"}
              borderRadius={"2xl"}
              background={backgroundContent}
            >
              {/* Outlet отображает дочерние маршруты */}
              <Outlet />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Layout
