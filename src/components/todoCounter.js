import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function TodoCounter() {
  return (
    <div>    
        <form>
            <input type='text'></input>
            <button type='submit'>Submit ToDo</button>
        </form>
    </div>

  )
}
