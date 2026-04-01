import { createContext , useContext } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  
   const values = {}
  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext) 