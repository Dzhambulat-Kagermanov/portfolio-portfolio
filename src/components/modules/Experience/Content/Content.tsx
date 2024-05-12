import { FC } from 'react'
import classes from './Content.module.scss'
import { IClassName } from '@/types/classInterface'
import Group from './Group/Group'
import {
  commerceExperienceData,
  overallExperienceData,
} from '@/constants/experience'
import ResumeMainButton from '@/components/ui/button/ResumeMainButton'

const Content: FC<IClassName> = ({ className }) => {
  return (
    <div className={`${classes.content} ${className || ''}`}>
      <Group
        data={overallExperienceData}
        className='experience-content__group'
        title='Общий опыт в IT:'
        titleClassName='experience-content-group__title'
      />
      <Group
        data={commerceExperienceData}
        className='experience-content__group'
        title='Коммерческий опыт:'
        titleClassName='experience-content-group__title'
        afterChild={
          <div className='experience-content-group__btn'>
            <ResumeMainButton>Скачать резюме</ResumeMainButton>
          </div>
        }
      />
    </div>
  )
}

export default Content
