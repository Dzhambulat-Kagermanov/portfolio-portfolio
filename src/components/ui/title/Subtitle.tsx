import { IChildren } from '@/types/childrenInterface'
import { IClassName } from '@/types/classInterface'
import { FC } from 'react'

interface ISubtitleProps extends IClassName, IChildren {}

const Subtitle: FC<ISubtitleProps> = ({ className, children }) => {
  return (
    <div className={className}>
      <h2 className='comp-title-q-r-1'>{children}</h2>
    </div>
  )
}

export default Subtitle
