import ResumeSecondButton from '@/components/ui/button/ResumeSecondButton'
import { IClassName } from '@/types/classInterface'
import { FC } from 'react'
import classes from './TextContent.module.scss'

const TextContent: FC<IClassName> = ({ className }) => {
  return (
    <div className={`${classes.content} ${className || ''}`}>
      <h2 className='comp-title-1' style={{ fontFamily: 'ConsolasR' }}>
        Hello world_
      </h2>
      <h3 className='comp-text-q-r-1'>
        Я фронтенд и немного бэкенд разработчик. Создаю сайты по макетам, на
        React или же на обычном HTML.
      </h3>
      <ResumeSecondButton className='head-content-text__btn'>
        Скачать резюме
      </ResumeSecondButton>
    </div>
  )
}

export default TextContent
