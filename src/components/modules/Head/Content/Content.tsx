import { IClassName } from '@/types/classInterface'
import { FC } from 'react'
import classes from './Content.module.scss'
import Image from './Image/Image'
import TextContent from './TextContent/TextContent'

const Content: FC<IClassName> = ({ className }) => {
  return (
    <div className={`${classes.content} ${className || ''}`}>
      <Image className='head-content__image' />
      <TextContent className='head-content__text' />
    </div>
  )
}

export default Content
