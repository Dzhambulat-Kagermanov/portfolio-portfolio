import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const hintSlice = createSlice({
  name: 'hintSlice',
  initialState: {
    hintState: false,
    hintMessage: '',
  },
  reducers: {
    setHintState(state, action: PayloadAction<{ state: boolean }>) {
      state.hintState = action.payload.state
    },
    setHintMessage(state, action: PayloadAction<{ message: string }>) {
      state.hintMessage = action.payload.message
    },
  },
})

export const { setHintState, setHintMessage } = hintSlice.actions
export default hintSlice.reducer
