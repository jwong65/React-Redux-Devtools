import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    items:[]
}
export const todoReducer =createSlice({
    name: 'todo',
    initialState,


})

export default todoReducer.reducer