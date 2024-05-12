import { IClassName } from '@/types/classInterface'
import { FC } from 'react'
import classes from './Item.module.scss'

const Item: FC<IClassName> = ({ className }) => {
  return (
    <div className={`${classes.item} ${className || ''}`}>
      <img src='/images/Experience/Decoration/Decoration.png' alt='Декорация' />
    </div>
  )
}

export default Item
