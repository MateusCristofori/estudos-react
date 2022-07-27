import './App.css'
import HookUseEffect from './components/HookUseEffect'
import HookUseReducer from './components/HookUseReducer'
import ReactUseSate from './components/ReactUseSate'

function App() {
  return (
    <div className="App">
      <ReactUseSate />
      <HookUseReducer />
      <HookUseEffect />
    </div>
  )
}

export default App
