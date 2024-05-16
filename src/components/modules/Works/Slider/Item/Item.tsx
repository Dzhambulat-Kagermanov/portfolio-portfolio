import { FC } from 'react'
import classes from './Item.module.scss'
import MoreInfoButton from '@/components/ui/button/MoreInfoButton'
import { useAppDispatch } from '@/hooks/reduxHooks'
import { setActiveSlide } from '@/store/works/worksSlice'
import { setModalState } from '@/store/modal/modalSlice'

interface IItemProps {
  id: number
  img: string
}

const Item: FC<IItemProps> = ({ id, img }) => {
  const dispatch = useAppDispatch()
  return (
    <>
      <div className={classes.img}>
        <img src={img} alt='Моя работа' />
      </div>
      <MoreInfoButton
        className='works-slider-item__btn'
        onClick={() => {
          dispatch({
            type: setActiveSlide.type,
            payload: { id: id },
          })
          dispatch({
            type: setModalState.type,
            payload: { state: true },
          })
        }}
      >
        ПОДРОБНЕЕ
      </MoreInfoButton>
    </>
  )
}

export default Item
