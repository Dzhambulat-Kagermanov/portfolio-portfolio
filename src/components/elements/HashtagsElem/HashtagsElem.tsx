import { IClassName } from '@/types/classInterface'
import { FC } from 'react'
import classes from './Hashtags.module.scss'
import Item from './Item/Item'
import { hashtagsDataType } from '@/constants/hashtags'

interface IHashtagsProps extends IClassName {
  data: hashtagsDataType[]
}

const HashtagsElem: FC<IHashtagsProps> = ({ data, className }) => {
  return (
    <ul className={`${classes.group} ${className || ''}`}>
      {data.map(({ id, hashtag }) => {
        return <Item key={id}>{hashtag}</Item>
      })}
    </ul>
  )
}

export default HashtagsElem
