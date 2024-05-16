import { IClassName } from '@/types/classInterface'
import { FC } from 'react'
import classes from './Preview.module.scss'
import { type worksDataType } from '@/constants/works'

interface IPreviewProps extends IClassName {
  data: worksDataType | undefined
}

const Preview: FC<IPreviewProps> = ({ data, className }) => {
  return (
    <div className={`${classes.preview} ${className || ''}`}>
      {data ? (
        <>
          <div className={classes.header}>
            <div className={classes.favicon}>
              <img src={data.info.favicon} alt={data.info.name} />
            </div>
            <h2 className={classes.headerText}>{data.info.name}</h2>
          </div>
          <img src={data.img} alt={data.info.name} />
        </>
      ) : (
        ''
      )}
    </div>
  )
}

export default Preview
