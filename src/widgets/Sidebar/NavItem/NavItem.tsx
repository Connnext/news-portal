import { Link } from "react-router"
import { useThemeColors } from "@shared/hooks/useThemeColor"
import { Box, Flex } from "@chakra-ui/react"
import { NavItemProps } from "../Sidebar.types"

const NavItem = ({ icon, children, route }: NavItemProps) => {
  const { textPrimary, backgroundContent } = useThemeColors()
  return (
    <Link to={route}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="xl"
        role="group"
        cursor="pointer"
        color={textPrimary}
        _hover={{
          bg: backgroundContent,
          color: textPrimary,
        }}
      >
        {icon ? (
          <Box mr="3" fontSize="16px">
            {icon}
          </Box>
        ) : null}
        {children}
      </Flex>
    </Link>
  )
}

export default NavItem
