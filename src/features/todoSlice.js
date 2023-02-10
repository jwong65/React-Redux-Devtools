import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    items:[]
}
export const todoReducer =createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo:(state)=>{
            return{items: [...state.items]}
        }

    }


})
export const {addTodo} = todoReducer.actions
export default todoReducer.reducer