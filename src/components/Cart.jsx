import {CartIcon, ClearCartIcon} from './Icons.jsx'
import { useId }  from 'react'
import 'Cart.css'

export default function Cart(){
    const cartCheckboxId = useId()
  return (
    <>
        <label className="cart-button" htmlFor={cartCheckboxId}>
            <CartIcon />
        </label>
        <input id={cartCheckboxId} type="checkbox" hidden />

        <aside className='cart'>
            <ul>
                <li> 
                    <img src='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' alt='men'/>
                    <div> <strong>Mens Casual Premium Slim Fit T-Shirts</strong> -1499</div>
                    <footer>
                        <small>Qty: 1</small>
                        <button>+</button>
                    </footer>
                </li>
            </ul>
            <button><ClearCartIcon /> </button>
        </aside>

    </>
  )
}

