import { IChildren } from '@/types/childrenInterface'
import { FC } from 'react'
import classes from './MainTitle.module.scss'

interface IMainTitleProps extends IChildren, IClassName {}

const MainTitle: FC<IMainTitleProps> = ({ children, className }) => {
  return (
    <div className={`${classes.title} ${className || ''}`}>
      <h2 className='comp-title-NFS-r-1'>{children}</h2>
    </div>
  )
}

export default MainTitle
