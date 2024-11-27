import React from 'react'
import { useDispatch, useSlector } from 'react-redux'


function Home() {
  const dispatch = useDispatch()

  const { c } = useSlector(state => state.custom)
  const handleIncrement = () => {
    dispatch({ type: 'increment' })
  }

  const handledecrement = () => {
    dispatch({ type: 'decrement' })
  }
  const incbyvalue = () => {
    dispatch({ type: 'incrementByValue', payload: 25 })
  }


  return (
    <div>
      <h1>
        {c}
      </h1>
      
      <button onClick={handleIncrement}>increment</button>
      <button onClick={incbyvalue}>inc by value</button>
      <button onClick={handledecrement}>decrement</button>
    </div>
  )
}

export default Home