import './App.css'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const url = 'http://localhost:3000/products'

  // 1 - resgatando dados.
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url)
      const data = await res.json()

      setProducts(data)
    }

    fetchData()
  }, [])

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App