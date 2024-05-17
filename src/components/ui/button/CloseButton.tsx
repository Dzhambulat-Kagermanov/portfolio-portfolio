import { IClassName } from '@/types/classInterface'
import { IOnClick } from '@/types/onClickInterface'
import { IStyles } from '@/types/stylesInterface'
import { FC } from 'react'
import classes from './CloseButton.module.scss'

interface ICloseButtonProps extends IOnClick, IClassName, IStyles {}

const CloseButton: FC<ICloseButtonProps> = ({ onClick, className, styles }) => {
  return (
    <button
      className={`${classes.button} ${className || ''}`}
      style={{ ...styles }}
      onClick={onClick}
    >
      <img src='/images/Shared/close.svg' alt='Закрыть' />
    </button>
  )
}

export default CloseButton
