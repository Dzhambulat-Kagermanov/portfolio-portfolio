import { IClassName } from '@/types/classInterface'
import { FC } from 'react'
import classes from './Content.module.scss'
import MainTitle from '@/components/ui/title/MainTitle'
import Group from './Group/Group'
import { skillsData } from '@/constants/skills'
import ResumeMainButton from '@/components/ui/button/ResumeMainButton'
import Background from './Background/Background'

const Content: FC<IClassName> = ({ className }) => {
  return (
    <div className={`${classes.content} ${className || ''}`}>
      <MainTitle className='skills-content__title'>НАВЫКИ</MainTitle>
      <Group className='skills-content__group' data={skillsData} />
      <ResumeMainButton
        download
        className='skills-content__btn'
        styles={{ margin: '45px 0 0 35px' }}
      >
        Скачать резюме
      </ResumeMainButton>
      <Background className='skills-content__backg' />
    </div>
  )
}

export default Content
