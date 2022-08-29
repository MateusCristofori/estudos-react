import { TitleColorContext } from '../context/TitleColorContext'

import React, { useContext } from 'react'

export const useTitleColorContext = () => {
  const context = useContext(TitleColorContext)
  if (!context) {
    console.log('contexto não encontrado')
  }

  return context
}
