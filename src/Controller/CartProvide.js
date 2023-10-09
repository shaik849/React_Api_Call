import {createContext, useState} from 'react'

export const CartContext = createContext(null);

export const CartProvide = (props) =>{ 
    const [items, setItems] = useState([]);
  return (
  <div>
   <CartContext.Provider value = {{items, setItems}}>
     {props.children}
   </CartContext.Provider>
  </div>
  )
}

