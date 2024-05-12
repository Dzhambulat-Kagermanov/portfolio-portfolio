import { IClassName } from '@/types/classInterface'
import { FC } from 'react'
import classes from './Decoration.module.scss'
import Item from './Item/Item'

const Decoration: FC<IClassName> = ({ className }) => {
  return (
    <div className={`${classes.decoration} ${className || ''}`}>
      <Item className='experience-decoration__item' />
      <Item className='experience-decoration__item' />
    </div>
  )
}

export default Decoration
