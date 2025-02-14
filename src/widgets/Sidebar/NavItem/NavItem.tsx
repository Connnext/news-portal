import { NavItemProps } from "../Sidebar.types"
import { Box, Flex } from "@chakra-ui/react"
import { Link } from "react-router"
import { useThemeColors } from "@hooks/useThemeColor"

const NavItem = ({ icon, children, route }: NavItemProps) => {
  const { secondary, textPrimary } = useThemeColors()
  return (
    <Link to={route}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        color={textPrimary}
        _hover={{
          bg: secondary,
          color: textPrimary,
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
