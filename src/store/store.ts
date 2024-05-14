import { configureStore } from '@reduxjs/toolkit'
import worksSlice from './works/worksSlice'

export const store = configureStore({
  reducer: {
    works: worksSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
