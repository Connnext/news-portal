import { ThemeMode } from "@features/ThemeSwitcher/ThemeSwitcher.types"

export type MenuItemProps = {
  value: string
  Icon: React.ReactElement
  label: string
  bg?: string
  color?: string
}
export type LanguageMenuItemProps = MenuItemProps
export type ThemeMenuItemProps = MenuItemProps & {
  theme: ThemeMode
}
