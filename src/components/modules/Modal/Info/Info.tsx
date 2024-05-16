import { FC } from 'react'
import classes from './Info.module.scss'
import { IClassName } from '@/types/classInterface'
import Group from './Group/Group'
import { type worksDataType } from '@/constants/works'
import ResumeMainButton from '@/components/ui/button/ResumeMainButton'

interface IInfoProps extends IClassName {
  data: worksDataType | undefined
}

const Info: FC<IInfoProps> = ({ className, data }) => {
  return (
    <div className={`${classes.info} ${className || ''}`}>
      <h2 className={classes.title}>КРАТКО О САЙТЕ</h2>
      <Group className='modal-info__group' data={data?.info} />
      <ResumeMainButton
        className={`${classes.button} modal-info__btn`}
        onClick={() => {
          window.location.href = data?.link || ''
        }}
      >
        ПЕРЕЙТИ
      </ResumeMainButton>
    </div>
  )
}

export default Info
