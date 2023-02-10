import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

import {addTodo} from '../features/todoSlice'

export default function TodoCounter() {
    const items = useSelector((state)=>state.items)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const toDoSubmitted =(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
    }
  return (
    <div>    
        {items}
        <form onSubmit={(e)=> toDoSubmitted(e)} >
            <input type='text' onChange={(e)=>setInput(e.target.items)}></input>
            <button type='submit'>Submit ToDo</button>
        </form>
    </div>

  )
}
