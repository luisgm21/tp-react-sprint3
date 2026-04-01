import { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)

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

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)

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
    openCart,
    closeCart,
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
