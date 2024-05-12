import { IChildren } from '@/types/childrenInterface'
import { FC } from 'react'
import { IClassName } from '@/types/classInterface'

interface IMainTitleProps extends IChildren, IClassName {}

const MainTitle: FC<IMainTitleProps> = ({ children, className }) => {
  return (
    <div className={className || ''}>
      <h2 className='comp-title-NFS-r-1'>{children}</h2>
    </div>
  )
}

export default MainTitle
