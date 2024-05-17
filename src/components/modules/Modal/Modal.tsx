import BaseStructure from '@/components/elements/BaseStructure/BaseStructure'
import { FC, useEffect, useState } from 'react'
import Info from './Info/Info'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { worksData, type worksDataType } from '@/constants/works'
import Preview from './Preview/Preview'
import classes from './Modal.module.scss'
import { setModalState } from '@/store/modal/modalSlice'
import './Adaptive.scss'

const Modal: FC = () => {
  const dispatch = useAppDispatch()
  const modalState: boolean = useAppSelector((state) => {
    return state.modal.state
  })
  const activeSlideId: number = useAppSelector((state) => {
    return state.works.activeSlide
  })

  const [data, setData] = useState<worksDataType | undefined>(
    worksData.find(({ id }) => id === activeSlideId)
  )
  useEffect(() => {
    setData(worksData.find(({ id }) => id === activeSlideId))
  }, [activeSlideId])

  return (
    <BaseStructure
      containerClass={`${modalState ? classes.active : ''} ${classes.container}`}
      containerOnClick={(event) => {
        if (!event.target.closest('.modal-block')) {
          dispatch({ type: setModalState.type, payload: { state: false } })
        }
      }}
      innerClass={`${classes.inner} modal-block__inner`}
    >
      <div className={`${classes.modal} modal-block`}>
        <Info className='modal-block__info' data={data} />
        <Preview className='modal-block__preview' data={data} />
      </div>
    </BaseStructure>
  )
}

export default Modal
