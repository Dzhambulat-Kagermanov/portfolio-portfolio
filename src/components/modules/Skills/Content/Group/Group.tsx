import { IClassName } from '@/types/classInterface'
import { FC } from 'react'
import Item from './Item/Item'
import classes from './Group.module.scss'

interface IGroupProps extends IClassName {
  data: { id: number; text: string }[]
}

const Group: FC<IGroupProps> = ({ data, className }) => {
  return (
    <ul className={`${classes.group} ${className || ''}`}>
      {data.map(({ id, text }) => {
        return (
          <Item className='skills-content-group__item' key={id}>
            {text}
          </Item>
        )
      })}
    </ul>
  )
}

export default Group
