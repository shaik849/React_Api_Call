import React, { useContext } from 'react'
import { CounterContext } from './ContextApiProvider'

function Counter() {
  const counterIncrease = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => counterIncrease.setCount(counterIncrease.count + 1)}>Increment</button>
      <button onClick={() => counterIncrease.setCount(counterIncrease.count - 1)}>Decrement</button>
    </div>
  )
}

export default Counter