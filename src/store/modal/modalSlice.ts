import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState: {
    state: false,
  },
  reducers: {
    setModalState(state, action: PayloadAction<{ state: boolean }>) {
      state.state = action.payload.state
    },
  },
})

export const { setModalState } = modalSlice.actions
export default modalSlice.reducer
