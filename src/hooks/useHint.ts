import { useAppDispatch } from './reduxHooks'
import { setHintState } from '@/store/hint/hintSlice'

const useHint: (hintTime?: number) => void = (hintTime) => {
  const dispatch = useAppDispatch()
  dispatch({ type: setHintState.type, payload: { state: true } })
  setTimeout(() => {
    dispatch({ type: setHintState.type, payload: { state: false } })
  }, hintTime && 300)
}

export default useHint
