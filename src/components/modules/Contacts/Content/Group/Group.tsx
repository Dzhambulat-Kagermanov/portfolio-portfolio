import { IClassName } from '@/types/classInterface'
import { FC } from 'react'
import classes from './Group.module.scss'
import { contactsDataType } from '@/constants/contacts'
import Item from './Item/Item'

interface IGroupProps extends IClassName {
  data: contactsDataType[]
}

const Group: FC<IGroupProps> = ({ className, data }) => {
  return (
    <ul className={`${classes.group} ${className || ''}`}>
      {data.map(({ id, messenger, nickname }) => {
        return (
          <Item
            key={id}
            messenger={messenger}
            nickname={nickname}
            id={id}
            className='contacts-content-group__item'
          />
        )
      })}
    </ul>
  )
}

export default Group
