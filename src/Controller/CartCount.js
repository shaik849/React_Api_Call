import React, {useContext} from 'react'
import { CartContext } from './CartProvide'

function CartCount(props) {
    const cart = useContext(CartContext);
  return (
    <div>
        <h1>{props.name}</h1>
        <p>$ {props.price}</p>
        <button onClick ={() => cart.setItems([...cart.items, {
            name: props.name,
            price: props.price
        }])}>Add to Cart</button>
    </div>
  )
}

export default CartCount