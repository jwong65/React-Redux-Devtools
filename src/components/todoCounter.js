import React from 'react'
import { useSelector } from 'react-redux'

export default function todoCounter() {
  return (
    <form>
        <input type='text'></input>
        <button type='submit'>Submit ToDo</button>
    </form>
  )
}
