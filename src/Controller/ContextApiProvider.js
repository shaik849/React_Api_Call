import { createContext, useState } from "react"

export const CounterContext = createContext(null);

export const CounterProvider = (props) =>{
     const [count, setCount] = useState(0);

  console.log(count)

  return (<CounterContext.Provider value={{count, setCount}} >
       {props.children}
    </CounterContext.Provider>
  )
}