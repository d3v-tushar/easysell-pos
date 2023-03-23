//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/Routes/Routes'
import { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext();
function App() {
  const [products, setProducts] = useState([]);
  const [darkmode, setDarkMode] = useState(true);
  const [checkout, setCheckOut] = useState([]);
  const value = {products, checkout, setCheckOut}
  useEffect(() =>{
      fetch(`products.json`)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  return (
    <ProductContext.Provider value={value}>
    <RouterProvider router={routes}/>
    </ProductContext.Provider>
  )
}

export default App
