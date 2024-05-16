import { useAppDispatch } from './reduxHooks'
import { setHintState } from '@/store/hint/hintSlice'

const useHint: (hintTime?: number) => VoidFunction = (hintTime) => {
  const dispatch = useAppDispatch()
  return () => {
    dispatch({ type: setHintState.type, payload: { state: true } })
    setTimeout(() => {
      dispatch({ type: setHintState.type, payload: { state: false } })
    }, hintTime || 300)
  }
}

export default useHint
