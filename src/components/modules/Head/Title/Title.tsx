import { IClassName } from '@/types/classInterface'
import { FC } from 'react'
import Item from './Item/Item'
import classes from './Title.module.scss'

const Title: FC<IClassName> = ({ className }) => {
  return (
    <div className={`${classes.title} ${className}`}>
      <Item>KAGERMANOV</Item>
      <Item styles={{ alignSelf: 'flex-end' }}>DZHAMBULAT</Item>
    </div>
  )
}

export default Title
