import { ReactNode } from "react"
import { BoxProps, FlexProps } from "@chakra-ui/react"

export interface LinkItemProps {
  name: string /** Название пункта меню */
  icon: ReactNode /** Иконка из react-icons или JSX-элемент */
  route: string
}

export interface NavItemProps extends FlexProps {
  icon?: ReactNode /** Иконка для элемента навигации */
  children: string /** Вложенный текст или элементы */
  route: string
}

export interface MobileProps extends FlexProps {
  onOpen: () => void /** Колбэк для открытия мобильного меню */
}

export interface SidebarProps extends BoxProps {
  onClose: () => void /** Колбэк для закрытия сайдбара */
}
