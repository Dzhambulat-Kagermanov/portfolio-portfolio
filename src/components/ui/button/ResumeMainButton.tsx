import { IChildren } from '@/types/childrenInterface'
import { IClassName } from '@/types/classInterface'
import { IOnClick } from '@/types/onClickInterface'
import { FC } from 'react'
import classes from './ResumeMainButton.module.scss'

interface IResumeMainButtonProps extends IClassName, IChildren, IOnClick {}

const ResumeMainButton: FC<IResumeMainButtonProps> = ({
  className,
  children,
  onClick,
}) => {
  return (
    <button
      className={`${classes.button} ${className || ''}`}
      onClick={onClick}
    >
      <h3 className='comp-text-q-r-1'>{children}</h3>
    </button>
  )
}

export default ResumeMainButton
