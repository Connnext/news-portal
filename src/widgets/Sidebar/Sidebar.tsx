import React from "react"
import {} from "react-icons/gi"
import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { LinkItemProps, SidebarProps } from "./Sidebar.types"
import NavItem from "./NavItem/NavItem"
import { ROUTES } from "@shared/constants/routes"

import { useThemeColors } from "@shared/hooks/useThemeColor"
import { useTranslation } from "react-i18next"

import {
  AccountIcon,
  FriendsIcon,
  HomeIcon,
  LikesIcon,
  MessagesIcon,
} from "@shared/ui/assets/icons"

const Sidebar = ({ onClose }: SidebarProps) => {
  const { background, textPrimary } = useThemeColors()
  const { t } = useTranslation()

  const LinkItems: Array<LinkItemProps> = [
    {
      id: "1",
      name: t("navigation.home"),
      icon: <HomeIcon />,
      route: ROUTES.HOME,
    },
    {
      id: "2",
      name: t("navigation.friends"),
      icon: <FriendsIcon />,
      route: ROUTES.FRIENDS,
    },
    {
      id: "3",
      name: t("navigation.messages"),
      icon: <MessagesIcon />,
      route: ROUTES.MESSAGES,
    },
    {
      id: "4",
      name: t("navigation.likes"),
      icon: <LikesIcon />,
      route: ROUTES.LIKES,
    },
    {
      id: "5",
      name: t("navigation.account"),
      icon: <AccountIcon />,
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
        <Button display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map(link => (
        <NavItem key={link.id} icon={link.icon} route={link.route}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

export default Sidebar
