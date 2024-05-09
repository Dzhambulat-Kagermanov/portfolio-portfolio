import { IDefault } from '@/types/defaultInterface'
import { FC } from 'react'
import classes from './Item.module.scss'

const Item: FC<IDefault> = ({ children, styles }) => {
  return (
    <div style={{ ...styles }} className={classes.item}>
      <h2 className='comp-title-NFS'>{children}</h2>
    </div>
  )
}

export default Item
