import { IChildren } from '@/types/childrenInterface'
import { FC } from 'react'
import classes from './SecondTitle.module.scss'

interface ISecondTitleProps extends IChildren, IClassName {}

const SecondTitle: FC<ISecondTitleProps> = ({ children, className }) => {
  return (
    <div className={`${classes.title} ${className || ''}`}>
      <h2 className='comp-title-NFS-r-2'>{children}</h2>
    </div>
  )
}

export default SecondTitle
