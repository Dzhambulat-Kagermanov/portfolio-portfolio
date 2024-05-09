import { IClassName } from '@/types/classInterface'
import { FC } from 'react'
import classes from './Image.module.scss'

const Image: FC<IClassName> = ({ className }) => {
  return (
    <div className={`${classes.image} ${className || ''}`}>
      <img src='/images/Head/MyPhoto.png' alt='Моё фото' />
    </div>
  )
}

export default Image
