import { IClassName } from '@/types/classInterface'
import { FC } from 'react'
import classes from './Content.module.scss'
import Group from './Group/Group'
import { contactsData } from '@/constants/contacts'
import Image from './Image/Image'

interface IContentProps extends IClassName {}

const Content: FC<IContentProps> = ({ className }) => {
  return (
    <div className={`${classes.content} ${className || ''}`}>
      <Group data={contactsData} className='contacts-content__group' />
      <Image className='contacts-content__image' />
    </div>
  )
}

export default Content
