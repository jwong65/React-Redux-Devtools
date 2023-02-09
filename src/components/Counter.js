import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../features/counterSlice'

import { useState } from 'react'

export default function Counter() {
    const count = useSelector((state)=>state.value)
    const dispatch = useDispatch()
    const [ input, setInput ]= useState(0)

    const byAmountSubmitted =(e)=>{
        e.preventDefault()
        dispatch(incrementByAmount(Number(input)))
    }
  return (
    <div>
        <h1>
            {count}
        </h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrease</button> 
        <form onSubmit={(e)=> byAmountSubmitted(e)}>
            <input type='number' onChange={(e)=>setInput(e.target.value)}></input>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}
