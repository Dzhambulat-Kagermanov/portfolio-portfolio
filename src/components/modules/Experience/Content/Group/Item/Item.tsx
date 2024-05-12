import { FC } from 'react'
import classes from './Item.module.scss'
import { IClassName } from '@/types/classInterface'
import { IChildren } from '@/types/childrenInterface'

interface IItemProps extends IClassName, IChildren {}

const Item: FC<IItemProps> = ({ className, children }) => {
  return (
    <li className={`${classes.item} ${className || ''}`}>
      <h2 className='comp-text-q-r-2'>{children}</h2>
    </li>
  )
}

export default Item
