import { useAppSelector } from '@/hooks/reduxHooks'
import { FC } from 'react'
import classes from './Hint.module.scss'
import BaseStructure from '@/components/elements/BaseStructure/BaseStructure'

const Hint: FC = () => {
  const hintInitialStates = useAppSelector((state) => {
    return state.hint
  })
  const hintMessage: string = hintInitialStates.hintMessage
  const hintState: boolean = hintInitialStates.hintState

  return (
    <BaseStructure
      containerClass={`${classes.container} ${hintState ? classes.active : ''}`}
    >
      <div className={`${classes.hint} hint-block`}>
        <h2 className='comp-text-q-r-3'>{hintMessage}</h2>
      </div>
    </BaseStructure>
  )
}

export default Hint
