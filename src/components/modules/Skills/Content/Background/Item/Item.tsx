import { IClassName } from '@/types/classInterface'
import { FC } from 'react'
import './Item.scss'

const Item: FC<IClassName> = ({ className }) => {
  return (
    <div className={className || ''}>
      <img src='/images/Skills/Content/Background.png' alt='Фоновая картинка' />
    </div>
  )
}

export default Item
