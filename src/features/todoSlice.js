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
export const {addTodo} = todoReducer.actions
export default todoReducer.reducer