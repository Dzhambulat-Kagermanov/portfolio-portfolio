import { FC } from 'react'
import classes from './Item.module.scss'

interface IHashtagsItemProps {
  children: string
}

const Item: FC<IHashtagsItemProps> = ({ children }) => {
  return (
    <li className={classes.item}>
      <h2 className='comp-text-q-r-3'>{children}</h2>
    </li>
  )
}

export default Item
