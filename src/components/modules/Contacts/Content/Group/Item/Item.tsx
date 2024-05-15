import { IClassName } from '@/types/classInterface'
import { FC } from 'react'
import classes from './Item.module.scss'
import { contactsDataType } from '@/constants/contacts'
import CopyButton from '@/components/ui/button/CopyButton'

interface IItemProps extends IClassName, contactsDataType {}

const Item: FC<IItemProps> = ({ messenger, nickname, className }) => {
  return (
    <li className={`${classes.item} ${className || ''}`}>
      <div className={`${classes.field} contacts-group-item__field`}>
        <h2 className='comp-text-q-r-1' style={{ fontFamily: 'Arial' }}>
          {nickname}
        </h2>
        <CopyButton
          className='contacts-group-item-field__btn'
          onClick={() => {}}
        />
      </div>
      <h3 className='comp-text-q-r-3'>{messenger}</h3>
    </li>
  )
}

export default Item
