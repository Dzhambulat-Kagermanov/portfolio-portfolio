import { IChildren } from '@/types/childrenInterface'
import { IClassName } from '@/types/classInterface'
import { IOnClick } from '@/types/onClickInterface'
import { FC } from 'react'
import classes from './ResumeSecondButton.module.scss'

interface IResumeSecondButtonProps extends IClassName, IChildren, IOnClick {}

const ResumeSecondButton: FC<IResumeSecondButtonProps> = ({
  className,
  children,
  onClick,
}) => {
  return (
    <button
      className={`${classes.button} ${className || ''}`}
      onClick={onClick}
    >
      <a className='comp-text-q-r-1' href='@/download/Resume.pdf' download>
        {children}
      </a>
    </button>
  )
}

export default ResumeSecondButton
