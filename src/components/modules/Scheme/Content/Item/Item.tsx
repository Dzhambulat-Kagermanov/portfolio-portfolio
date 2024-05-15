import { IClassName } from '@/types/classInterface'
import { FC } from 'react'
import classes from './Item.module.scss'

interface IItemProps extends IClassName {
  title: string
  text: string
  isActive: boolean
  step: number
}

const Item: FC<IItemProps> = ({ title, text, className, isActive, step }) => {
  return (
    <li
      className={`${classes.item} ${isActive ? classes.active : ''} ${className || ''}`}
    >
      <h2 className={`comp-title-1 ${classes.title}`}>{title}</h2>
      <h3 className={`comp-text-q-r-2 ${classes.text}`}>{text}</h3>
      <h4 className={`comp-title-1 ${classes.step}`}>ШАГ {step}</h4>
    </li>
  )
}

export default Item
