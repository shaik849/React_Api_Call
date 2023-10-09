import React, {useContext} from 'react'
import { CartContext } from './CartProvide'

function Cart(props) {
    const cart = useContext(CartContext);
    // console.log(cart)
    const total = cart.items.reduce((a,b) => a + b.price, 0);
  return (
    <div>
        <h1>Cart</h1>
        {cart && cart.items.map((item) => <li key={Math.random() * 1000}>{item.name} - {item.price}</li>)}
        <h1>Total Bill $ -{total}</h1>
    </div>
  )
}

export default Cart