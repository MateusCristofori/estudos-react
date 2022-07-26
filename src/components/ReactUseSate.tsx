import { useState } from 'react'

const ReactUseSate = () => {
  let userName = 'Mateus'

  const [nome, setNome] = useState('João')

  const handleEvent = () => {
    userName = 'Mateus Gomes'

    setNome('João da Silva')
  }

  const [age, setAge] = useState(18)

  const handleSubmit = (e: any) => {
    e.preventDefault()

    // envio dos dados para uma API
    console.log(age)
  }

  return (
    <div>
      <p>Variável: {userName}</p>
      <p>State: {nome}</p>
      <button onClick={handleEvent}>Mudar nome.</button>

      {/* 2 - useState e input */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={evento => setAge(evento.target.value)}
        />
        <input type="submit" value="enviar" />
      </form>
      <p>Você tem: {age} anos!</p>
    </div>
  )
}

export default ReactUseSate
