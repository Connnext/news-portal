import { ThemeMode } from "@features/ThemeSwitcher/ThemeSwitcher.types"

export type ThemeMenuItemProps = {
  value: ThemeMode
  Icon: React.ReactElement
  label: string
  theme: string
}
