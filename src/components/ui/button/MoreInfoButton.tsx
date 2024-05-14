import { IChildren } from '@/types/childrenInterface'
import { IClassName } from '@/types/classInterface'
import { FC } from 'react'
import classes from './MoreInfoButton.module.scss'
import { IOnClick } from '@/types/onClickInterface'

interface IMoreInfoButtonProps extends IChildren, IClassName, IOnClick {}

const MoreInfoButton: FC<IMoreInfoButtonProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <button
      className={`${classes.button} ${className || ''}`}
      onClick={onClick}
    >
      <h2 className='comp-text-h-b-1'>{children}</h2>
    </button>
  )
}

export default MoreInfoButton
