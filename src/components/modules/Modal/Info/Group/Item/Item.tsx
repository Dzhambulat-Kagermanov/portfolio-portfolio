import { IClassName } from '@/types/classInterface'
import { FC } from 'react'
import classes from './Item.module.scss'

interface IItemProps extends IClassName {
  title: string
  text: string
}

const Item: FC<IItemProps> = ({ title, text, className }) => {
  return (
    <li className={`${classes.item} ${className || ''}`}>
      <h2 className={classes.text}>
        <span>{title}:</span> {text}
      </h2>
    </li>
  )
}

export default Item
