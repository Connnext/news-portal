import React from "react"
import {} from "react-icons/gi"
import { Box, Flex, Text } from "@chakra-ui/react"
import { LinkItemProps, SidebarProps } from "./Sidebar.types"
import { CloseButton } from "@components/ui/close-button"
import NavItem from "./NavItem/NavItem"
import { ROUTES } from "@shared/constants/routes"
import { GrHomeRounded } from "react-icons/gr" // Для Home
import { GrUserSettings } from "react-icons/gr" // Для Account
import { GrChat } from "react-icons/gr" // Для Messages
import { GrLike } from "react-icons/gr" // Для Likes
import { GrGroup } from "react-icons/gr" // Для Friends
import { useThemeColors } from "@hooks/useThemeColor"
import { useTranslation } from "react-i18next"

const Sidebar = ({ onClose }: SidebarProps) => {
  const { background, textPrimary } = useThemeColors()
  const { t } = useTranslation()

  const LinkItems: Array<LinkItemProps> = [
    {
      id: "1",
      name: t("navigation.home"),
      icon: <GrHomeRounded />,
      route: ROUTES.HOME,
    },
    {
      id: "2",
      name: t("navigation.friends"),
      icon: <GrGroup />,
      route: ROUTES.FRIENDS,
    },
    {
      id: "3",
      name: t("navigation.messages"),
      icon: <GrChat />,
      route: ROUTES.MESSAGES,
    },
    {
      id: "4",
      name: t("navigation.likes"),
      icon: <GrLike />,
      route: ROUTES.LIKES,
    },
    {
      id: "5",
      name: t("navigation.account"),
      icon: <GrUserSettings />,
      route: ROUTES.ACCOUNT,
    },
  ]

  return (
    <Box
      display={"block"}
      minH="100vh"
      color={textPrimary}
      bg={background}
      borderRight="1px"
      w={{ base: "full", md: "60" }}
      pos="sticky"
      top="0"
      h="fit-content"
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          whiteSpace="nowrap"
        >
          Strict Sudo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.id} icon={link.icon} route={link.route}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

export default Sidebar
