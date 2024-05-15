import { IClassName } from '@/types/classInterface'
import { FC } from 'react'
import classes from './Image.module.scss'

interface IImageProps extends IClassName {}

const Image: FC<IImageProps> = ({ className }) => {
  return (
    <div className={`${classes.image} ${className || ''}`}>
      <img src='/images/Contacts/Content/Decoration.png' alt='Декорация' />
    </div>
  )
}

export default Image
