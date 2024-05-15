import { configureStore } from '@reduxjs/toolkit'
import worksSlice from './works/worksSlice'
import hintSlice from './hint/hintSlice'

export const store = configureStore({
  reducer: {
    works: worksSlice,
    hint: hintSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
