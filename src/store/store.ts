import { configureStore } from '@reduxjs/toolkit'
import worksSlice from './works/worksSlice'
import hintSlice from './hint/hintSlice'
import modalSlice from './modal/modalSlice'

export const store = configureStore({
  reducer: {
    works: worksSlice,
    hint: hintSlice,
    modal: modalSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
