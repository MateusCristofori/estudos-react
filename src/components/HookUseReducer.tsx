import { type } from 'os'
import { useReducer, useState } from 'react'

const HookUseReducer = () => {
  // 1 - começando com useReducer

  const [number, dispath] = useReducer((state, action) => {
    return Math.round(Math.random(state) * 10)
  })

  // 2 - avançando no useReducer

  const initialTaks = [
    { id: 1, texto: 'Fazer alguma coisa' },
    { id: 2, texto: 'Fazer outra coisa' }
  ]

  const tasksReducer = (state: any, action: any) => {
    switch (action.type) {
      case 'ADD':
        const newTask = {
          id: Math.round(Math.random() * 100),
          texto: taskText
        }
        setTaskText('')
        return [...state, newTask]
      case 'DELETE':
        return state.filter((task: any) => task.id !== action.id)
      default:
        return state
    }
  }

  const [taskText, setTaskText] = useState('')
  const [tasks, dispathTasks] = useReducer(tasksReducer, initialTaks)

  const handleSubmit = (evento: any) => {
    evento.preventDefault()

    dispathTasks({ type: 'ADD' })
  }

  const deleteTask = (id: any) => {
    dispathTasks({ type: 'DELETE', id: id })
  }

  return (
    <div>
      <h2>useReducer</h2>

      <p>O valor atual é: {number}</p>
      <button onClick={dispath}>Clique para mudar o valor.</button>

      <h3>Tarefas:</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskText}
          onChange={evento => setTaskText(evento.target.value)}
        />
        <input type="submit" value="enviar" />
      </form>
      {tasks.map((tasks: any) => (
        <li key={tasks.id} onDoubleClick={() => deleteTask(tasks.id)}>
          {tasks.texto}
        </li>
      ))}

      <hr />
    </div>
  )
}

export default HookUseReducer
