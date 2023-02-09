import React from 'react'
import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './features/counterSlice'


export const store = configureStore({
    reducer: counterReducer
})