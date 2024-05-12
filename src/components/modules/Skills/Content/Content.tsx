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
      <MainTitle>НАВЫКИ</MainTitle>
      <Group data={skillsData} />
      <ResumeMainButton styles={{ margin: '45px 0 0 35px' }}>
        Скачать резюме
      </ResumeMainButton>
      <Background />
    </div>
  )
}

export default Content
