import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

import {addTodo} from '../features/todoSlice'

export default function TodoCounter() {
    const items = useSelector((state)=>state.todos.items)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const toDoSubmitted =(e)=>{
        e.preventDefault()
        dispatch(addTodo)
    }
  return (
    <div>    
        <form>
            <input type='text'></input>
            <button type='submit'>Submit ToDo</button>
        </form>
    </div>

  )
}
