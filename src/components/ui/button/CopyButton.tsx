import { IClassName } from '@/types/classInterface'
import { IOnClick } from '@/types/onClickInterface'
import { IStyles } from '@/types/stylesInterface'
import { FC } from 'react'
import classes from './CopyButton.module.scss'

interface ICopyButtonProps extends IOnClick, IClassName, IStyles {}

const CopyButton: FC<ICopyButtonProps> = ({ className, onClick, styles }) => {
  return (
    <button
      className={`${classes.button} ${className || ''}`}
      onClick={onClick}
      style={{ ...styles }}
    >
      <img src='/images/Shared/copy.svg' alt='Копировать' />
    </button>
  )
}

export default CopyButton
