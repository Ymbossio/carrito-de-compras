import React, { useId, useState } from 'react'
import './Filter.css'

const Filter = ({onChange}) => {

  const [minPrince, setMinPrice] = useState(0)
  const minPriceId =useId();
  const categotyId = useId();

  const HandleMinPrince = (e) =>{
    setMinPrice(e.target.value)
    onChange(prevState =>({
        ...prevState, minPrice: e.target.value
    }))
  }

  const HandleCategory = (e) =>{
     onChange( prevState =>({ ...prevState, category: e.target.value}))
  }

  return (
    <section className='filter'>
        <div>
            <label htmlFor={minPriceId}>Precio:</label>
            <span> ${minPrince} </span>
            <input  type='range' id={minPriceId} min={0} max={1000} onChange={HandleMinPrince}/>
        </div>

        <div>
            <label htmlFor={categotyId}>Categorías</label>
            <select id={categotyId} onChange={HandleCategory}>
                <option value='all'>Todos</option>
                <option value='electronics'>Electronicos</option>
                <option value='jewelery'>Joyas</option>

            </select>
        </div>
    </section>
  )
}

export default Filter