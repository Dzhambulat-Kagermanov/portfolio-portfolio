import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { worksData } from '@/constants/works'

const worksSlice = createSlice({
  name: 'worksSlice',
  initialState: {
    length: worksData.length,
    activeSlide: null,
  },
  reducers: {
    setActiveSlide(state, action: PayloadAction<{ id: number }>) {
      state.activeSlide = action.payload.id
    },
  },
})

export const { setActiveSlide } = worksSlice.actions
export default worksSlice.reducer
