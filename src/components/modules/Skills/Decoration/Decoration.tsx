import { IClassName } from '@/types/classInterface'
import { FC } from 'react'
import classes from './Decoration.module.scss'

const Decoration: FC<IClassName> = ({ className }) => {
  return (
    <div className={`${classes.decoration} ${className || ''}`}>
      <img src='/images/Skills/Decoration/Decoration.png' alt='Декорация' />
    </div>
  )
}

export default Decoration
