import { useEffect, useState } from 'react'

const HookUseEffect = () => {
  // 1 - useEffect sem dependências

  useEffect(() => {
    console.log('Estou sendo executado.')
  })

  const [number, setNumber] = useState(1)

  const changeSomething = () => {
    setNumber(number + 1)
  }

  // 2 - Array de dependências vazio

  useEffect(() => {
    console.log('Serei executado apenas uma vez.')
  }, [])

  return (
    <div>
      <h2>useEffect</h2>

      <p>Número: {number}</p>
      <button onClick={changeSomething}>Clique para mudar o número.</button>

      <hr />
    </div>
  )
}

export default HookUseEffect
