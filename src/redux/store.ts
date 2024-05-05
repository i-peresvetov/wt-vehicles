import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { apiSlice } from '../api/apiSlice'

import app from './app/slice'

const store = configureStore({
  reducer: {
    app,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})

export default store

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
