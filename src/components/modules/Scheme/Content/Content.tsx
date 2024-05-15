import { IClassName } from '@/types/classInterface'
import { FC } from 'react'
import classes from './Content.module.scss'
import { schemeDataType } from '@/constants/scheme'
import Item from './Item/Item'

interface IContentProps extends IClassName {
  data: schemeDataType[]
}

const Content: FC<IContentProps> = ({ className, data }) => {
  return (
    <ul className={`${classes.content} ${className || ''}`}>
      {data.map(({ id, title, text }, index) => {
        return (
          <Item
            key={id}
            title={title}
            text={text}
            isActive={index++ % 2 === 0}
            step={index++}
          />
        )
      })}
    </ul>
  )
}

export default Content
