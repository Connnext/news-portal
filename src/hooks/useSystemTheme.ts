import { useState, useEffect } from "react"

const useSystemTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">(
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    setTheme(mediaQuery.matches ? "dark" : "light")
  }, [])

  return theme
}

export default useSystemTheme
