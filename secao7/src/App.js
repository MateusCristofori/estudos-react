import './App.css'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const url = 'http://localhost:3000/products'

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  // 1 - resgatando dados.
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url)
      const data = await res.json()

      setProducts(data)
    }

    fetchData()
  }, [])

  // 2 - adição de produtos

  const handleSubmit = async evento => {
    evento.preventDefault()

    const product = {
      name: name,
      price: price
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(product)
    })
  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - R$: {product.price}
          </li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={evento => setName(evento.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={evento => setPrice(evento.target.value)}
            />
          </label>
          <input type="submit" value="enviar" />
        </form>
      </div>
    </div>
  )
}

export default App
