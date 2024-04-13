import React from 'react'
import '../Products.css'

const Products = ({products}) => {
  return (
    <main className='products'>
        <ul>
            {products.map((item) =>(
                <li key={item.id}>
                    <img src={item.image} alt={item.title}/>
                    <div>
                        <strong>{item.title} ${item.price}</strong>
                    </div>
                    <div><button>🛒</button></div>
                </li>
            ))}
        </ul>
    </main>
  )
}

export default Products