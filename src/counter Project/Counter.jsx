import { useState } from "react"
const Counter = () => {

const [count, setCount]= useState(0)

const countIncrement = () => setCount(count+1)

const countDecrement = () => setCount(count-1)


  return (
    <div>
        <h1>Your Count : {count}</h1>
        <button onClick={countIncrement}>Increment</button>
            <br />
            <br />
        <button onClick={countDecrement}> Decrement</button>
    </div>
  )
}

export default Counter