import { IClassName } from '@/types/classInterface'
import { FC } from 'react'
import classes from './Decoration.module.scss'

interface IDecorationProps extends IClassName {}

const Decoration: FC<IDecorationProps> = ({ className }) => {
  return (
    <div className={`${classes.decoration} ${className || ''}`}>
      <img src='/images/Head/Decoration/Decoration.png' alt='Декорация' />
    </div>
  )
}

export default Decoration
