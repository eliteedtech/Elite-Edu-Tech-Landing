import { createContext, useContext, useState, useEffect } from "react"

// Create context
const ThemeContext = createContext()

// Theme provider component
export function ThemeProvider({ children }) {
  // Check if user has a theme preference in localStorage or prefers dark mode
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      return savedTheme === "dark"
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  })

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev)
  }

  // Update document class and localStorage when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])

  // Context value
  const value = {
    darkMode,
    toggleDarkMode,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

// Custom hook to use theme context
export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}