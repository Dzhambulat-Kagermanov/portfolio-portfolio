import { FC } from 'react'
import classes from './Background.module.scss'
import { IClassName } from '@/types/classInterface'
import Item from './Item/Item'

const Background: FC<IClassName> = ({ className }) => {
  return (
    <div className={`${classes.backg} ${className || ''}`}>
      <Item className='skills-content-background__item' />
      <Item className='skills-content-background__item' />
    </div>
  )
}

export default Background
