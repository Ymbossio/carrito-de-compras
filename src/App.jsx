import { useContext, useState } from 'react'
import {products as initialProducts} from '../data.json'
import Products from './components/Products'
import Filter from './components/Filter'
import Footer from './components/Footer'
import {FilterContext} from './context.Filters.jsx'
import './App.css'

const UseFilter = () =>{
  
  const {filters, setFilters}  = useContext(FilterContext);

  const filterProducts = (prod) =>{
    return prod.filter(i => {
      return ( 
        i.price >= filters.minPrice && 
        ( filters.category === 'all' || i.category === filters.category ) 
      )
    })
  }
  return {filterProducts, setFilters}

}

function App() {
  const [products] = useState(initialProducts);
  const {filterProducts, setFilters} = UseFilter();
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
