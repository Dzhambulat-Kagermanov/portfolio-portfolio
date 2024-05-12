import { IChildren } from '@/types/childrenInterface'
import { IClassName } from '@/types/classInterface'
import { IOnClick } from '@/types/onClickInterface'
import { FC } from 'react'
import classes from './ResumeMainButton.module.scss'
import { IStyles } from '@/types/stylesInterface'

interface IResumeMainButtonProps
  extends IClassName,
    IChildren,
    IOnClick,
    IStyles {}

const ResumeMainButton: FC<IResumeMainButtonProps> = ({
  className,
  children,
  onClick,
  styles,
}) => {
  return (
    <button
      className={`${classes.button} ${className || ''}`}
      onClick={onClick}
      style={styles}
    >
      <a className='comp-text-q-r-1' href='@/download/Resume.docx' download>
        {children}
      </a>
    </button>
  )
}

export default ResumeMainButton
