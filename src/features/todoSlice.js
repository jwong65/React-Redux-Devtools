import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    items:[]
}
export const todoReducer =createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo:(state)=>{
            return{value: state}
        }

    }


})

export default todoReducer.reducer