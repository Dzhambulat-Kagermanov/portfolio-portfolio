import { IClassName } from '@/types/classInterface'
import { IOnClick } from '@/types/onClickInterface'
import { IStyles } from '@/types/stylesInterface'
import { FC } from 'react'
import classes from './ArrowButton.module.scss'

interface IArrowButtonProps extends IStyles, IClassName, IOnClick {}

const ArrowButton: FC<IArrowButtonProps> = ({ className, onClick, styles }) => {
  return (
    <button
      style={{ ...styles }}
      className={`${classes.button} ${className || ''}`}
      onClick={onClick}
    >
      <img src='/images/Shared/arrow.svg' alt='Стрелка' />
    </button>
  )
}

export default ArrowButton
