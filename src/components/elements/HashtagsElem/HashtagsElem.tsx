import { FC } from 'react'
import classes from './Hashtags.module.scss'
import Item from './Item/Item'

interface IHashtagsProps extends IClassName {
  data: string[]
}

const HashtagsElem: FC<IHashtagsProps> = ({ data, className }) => {
  return (
    <ul className={`${classes.group} ${className || ''}`}>
      {data.map((el) => {
        return <Item key={el}>{el}</Item>
      })}
    </ul>
  )
}

export default HashtagsElem
