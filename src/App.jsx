import { useState } from 'react'
import {products as initialProducts} from '../data.json'
import Products from './components/Products'
import Filter from './components/Filter'
import Footer from './components/Footer'
import './App.css'

function App() {

  const [products] = useState(initialProducts);
  
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  });

  const filterProducts = (prod) =>{
    return prod.filter(i => {
      return ( 
        i.price >= filters.minPrice && 
        ( filters.category === 'all' || i.category === filters.category ) 
      )
    })
  }

  const ProductsFilter = filterProducts(products);

  return (
    <>
      <h1>🛒 Shopping cart</h1>
      <Filter onChange={setFilters}/>
     <Products products={ProductsFilter}/>
     <Footer />
    </>
  )
}

export default App
