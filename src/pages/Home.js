import ChangeCounter from './ChangeCounter'
// 4 - Usando o context hook
import useCounterContext from '../hooks/useCounterContext'
import { CounterContext } from '../context/CounterContext'
import { useTitleColorContext } from '../hooks/useTitleColorContext'
import { TitleColorContext } from '../context/TitleColorContext'

const Home = () => {
  // const { counter } = useContext(CounterContext)

  const { counter } = useCounterContext(CounterContext)

  // 5 - context mais complexo
  const { color } = useTitleColorContext()

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - Alterando valor contexto */}
      <ChangeCounter />
    </div>
  )
}

export default Home
