import { createContext, useState } from "react"

export const CounterContext = createContext(null);

export const CounterProvider = (props) =>{
     const [count, setCount] = useState(0);

<<<<<<< HEAD

=======
  console.log(count)
>>>>>>> parent of f47ee59 (trail)

  return (<CounterContext.Provider value={{count, setCount}} >
       {props.children}
    </CounterContext.Provider>
  )
}