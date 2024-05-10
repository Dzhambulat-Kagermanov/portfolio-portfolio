import { IDefault } from '@/types/defaultInterface'
import { FC } from 'react'
import classes from './Item.module.scss'

interface IItemProps extends IDefault {
  className?: string
}

const Item: FC<IItemProps> = ({ children, styles, className }) => {
  return (
    <div style={{ ...styles }} className={`${classes.item} ${className || ''}`}>
      <h2 className='comp-title-NFS'>{children}</h2>
    </div>
  )
}

export default Item
