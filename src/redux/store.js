import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './CreateSlice'

export const store = configureStore({
  reducer: {
  movies: moviesReducer,
  },
})