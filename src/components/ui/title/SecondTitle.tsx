import { IChildren } from '@/types/childrenInterface'
import { FC } from 'react'
import { IClassName } from '@/types/classInterface'

interface ISecondTitleProps extends IChildren, IClassName {}

const SecondTitle: FC<ISecondTitleProps> = ({ children, className }) => {
  return (
    <div className={className || ''}>
      <h2 className='comp-title-NFS-r-2'>{children}</h2>
    </div>
  )
}

export default SecondTitle
