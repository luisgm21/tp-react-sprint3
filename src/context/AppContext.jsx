import { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme === 'dark') return true
      if (savedTheme === 'light') return false
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    } catch (error) {
      console.error('Error al leer tema de localStorage:', error)
      return false
    }
  })

  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cartItems')
      return savedCart ? JSON.parse(savedCart) : []
    } catch (error) {
      console.error('Error al leer carrito de localStorage:', error)
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
    } catch (error) {
      console.error('Error al guardar carrito en localStorage:', error)
    }
  }, [cartItems])

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', isDarkMode)

    try {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
    } catch (error) {
      console.error('Error al guardar tema en localStorage:', error)
    }
  }, [isDarkMode])

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)
  const toggleDarkMode = () => setIsDarkMode((current) => !current)

  const addToCart = (movie) => {
    setCartItems((currentItems) => [...currentItems, movie])
    setIsCartOpen(true)
  }

  const removeFromCart = (movieId) => {
    setCartItems((currentItems) => {
      const itemIndex = currentItems.findIndex((item) => item.id === movieId)
      if (itemIndex === -1) return currentItems
      return currentItems.filter((_, index) => index !== itemIndex)
    })
  }

  const values = {
    cartItems,
    isCartOpen,
    isDarkMode,
    openCart,
    closeCart,
    toggleDarkMode,
    addToCart,
    removeFromCart,
  }

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
