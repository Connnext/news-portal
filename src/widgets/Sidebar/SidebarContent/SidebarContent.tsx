// import { Box, Flex, Text } from "@chakra-ui/react"
// import React from "react"
// import { SidebarProps } from "../Sidebar.types"
// import { CloseButton } from "@/components/ui/close-button"
// import NavItem from "../NavItem/NavItem"

// const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
//   return (
//     <Box
//       bg={useColorModeValue("white", "gray.900")}
//       borderRight="1px"
//       borderRightColor={useColorModeValue("gray.200", "gray.700")}
//       w={{ base: "full", md: 60 }}
//       pos="fixed"
//       h="full"
//       {...rest}
//     >
//       <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
//         <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
//           Logo
//         </Text>
//         <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
//       </Flex>
//       {LinkItems.map((link) => (
//         <NavItem key={link.name} icon={link.icon}>
//           {link.name}
//         </NavItem>
//       ))}
//     </Box>
//   )
// }

// export default SidebarContent

import { Link } from "react-router"
import {
  Box,
  Container,
  Flex,
  // Heading,
  Image,
  // Stack,
  Text,
} from "@chakra-ui/react"
import { ROUTES } from "@shared/constants/routes"
import { useTranslation } from "react-i18next"
import { useThemeColors } from "@shared/hooks/useThemeColor"
import { ThemeSwitcher } from "@features/ThemeSwitcher/ThemeSwitcher"
import { LanguageSwitcher } from "@features/LanguageSwitcher/LanguageSwitcher"

import Moon from "@shared/ui/assets/images/moon.png"
import BackButton from "@shared/ui/Buttons/BackButton"

interface LoginLayoutProps {
  children: React.ReactNode
}

export default function LoginLayout({ children }: LoginLayoutProps) {
  const { backgroundContent, textSecondary, textSecondaryHover } =
    useThemeColors()
  const { t } = useTranslation()

  return (
    <Container maxW="100vw" p={0} h="100vh">
      {/* Верхние переключатели */}
      <Flex
        justifyContent="space-between"
        p={4}
        position="absolute"
        top={0}
        left={0}
        right={0}
      >
        <BackButton />
        <Flex gap={2}>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </Flex>
      </Flex>

      {/* Обертка для центрирования подложки */}
      <Flex minH="100vh" align="center" justify="center">
        {/* Подложка */}
        <Flex
          w="60%" // Ширина подложки
          maxW="900px" // Ограничение максимальной ширины
          h="500px" // Фиксированная высота
          bg={backgroundContent}
          borderRadius="xl"
          boxShadow="xl"
          overflow="hidden"
        >
          {/* Левая часть - изображение */}
          <Box w="50%" h="100%">
            <Image src={Moon} alt="Moon" objectFit="cover" w="100%" h="100%" />
          </Box>

          {/* Правая часть - форма */}
          <Flex
            w="50%"
            h="100%"
            align="center"
            justify="center"
            p={6}
            flexDirection="column"
          >
            {children}
          </Flex>
        </Flex>
      </Flex>

      {/* Подвал */}
      <Box textAlign="center" p={4} bg={backgroundContent}>
        <Text fontSize="sm" color={textSecondary}>
          {t("auth.dont_have_account")}{" "}
          <Link
            to={ROUTES.REGISTRATION}
            style={{ fontWeight: "bold", color: textSecondaryHover }}
          >
            {t("auth.sign_up_here")}
          </Link>
        </Text>
      </Box>
    </Container>
  )
}
