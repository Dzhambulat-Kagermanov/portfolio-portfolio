import { IClassName } from '@/types/classInterface'
import { FC } from 'react'
import classes from './Group.module.scss'
import Item from './Item/Item'
import { type worksDataInfoType } from '@/constants/works'

interface IGroupProps extends IClassName {
  data: worksDataInfoType | undefined
}

const Group: FC<IGroupProps> = ({ className, data }) => {
  return (
    <ul className={`${classes.group} ${className || ''}`}>
      {data ? (
        <>
          <Item
            title='Название'
            text={data.name}
            className='modal-info-group__item'
          />
          <Item
            title='Тематика'
            text={data.thematic}
            className='modal-info-group__item'
          />
          <Item
            title='Адаптив'
            text={data.adaptive}
            className='modal-info-group__item'
          />
          <Item
            title='Тип сайта'
            text={data.websiteType}
            className='modal-info-group__item'
          />
          <Item
            title='Стек'
            text={data.stack}
            className='modal-info-group__item'
          />
        </>
      ) : (
        ''
      )}
    </ul>
  )
}

export default Group
