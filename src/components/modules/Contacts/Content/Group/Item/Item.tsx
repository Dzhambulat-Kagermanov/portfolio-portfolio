import { IClassName } from '@/types/classInterface'
import { FC } from 'react'
import classes from './Item.module.scss'
import { contactsDataType } from '@/constants/contacts'
import CopyButton from '@/components/ui/button/CopyButton'
import { useAppDispatch } from '@/hooks/reduxHooks'
import { setHintMessage } from '@/store/hint/hintSlice'
// import useHint from '@/hooks/useHint'

interface IItemProps extends IClassName, contactsDataType {}

const Item: FC<IItemProps> = ({ messenger, nickname, className }) => {
  const dispatch = useAppDispatch()
  return (
    <li className={`${classes.item} ${className || ''}`}>
      <div className={`${classes.field} contacts-group-item__field`}>
        <h2 className='comp-text-q-r-1' style={{ fontFamily: 'Arial' }}>
          {nickname}
        </h2>
        <CopyButton
          className='contacts-group-item-field__btn'
          onClick={() => {
            dispatch({
              type: setHintMessage.type,
              payload: { message: 'Текст успешно скопирован' },
            })
            // useHint(500)
            navigator.clipboard.writeText(nickname)
          }}
        />
      </div>
      <h3 className='comp-text-q-r-3'>{messenger}</h3>
    </li>
  )
}

export default Item
