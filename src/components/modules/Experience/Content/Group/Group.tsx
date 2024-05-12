import { IClassName } from '@/types/classInterface'
import { FC, ReactElement } from 'react'
import classes from './Group.module.scss'
import Item from './Item/Item'
import Subtitle from '@/components/ui/title/Subtitle'

interface IGroupProps extends IClassName {
  data: { id: number; text: string }[]
  title: string
  titleClassName?: string
  afterChild?: string | ReactElement | ReactElement[]
}

const Group: FC<IGroupProps> = ({
  className,
  data,
  title,
  titleClassName,
  afterChild,
}) => {
  return (
    <div className={classes.wrapper}>
      <Subtitle className={titleClassName}>{title}</Subtitle>
      <ul className={`${classes.group} ${className || ''}`}>
        {data.map(({ id, text }) => {
          return <Item key={id}>{text}</Item>
        })}
      </ul>
      {afterChild}
    </div>
  )
}

export default Group
