import { useState, createContext } from 'react'

export const CounterContext = createContext()

// 2 - criando Provider (provedor)

export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(5)

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  )
}