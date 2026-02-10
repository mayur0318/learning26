import React, { useState } from 'react'

export const UseStateDemo1 = () => {
    const [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount(count+1)
    }
  return (
    <div>
        <h1>Use State Demo 1</h1>
        <h1>Count = {count}</h1>
        <button onClick={increaseCount}>+</button>
    </div>
  )
}
