import BaseStructure from '@/components/elements/BaseStructure/BaseStructure'
import { FC } from 'react'
import Decoration from './Decoration/Decoration'
import Content from './Content/Content'
import MainTitle from '@/components/ui/title/MainTitle'
import './Experience.scss'

const Experience: FC = () => {
  return (
    <BaseStructure containerClass='--parentBlock'>
      <div className='experience-content__wrapper'>
        <MainTitle>ОПЫТ</MainTitle>
        <Content className='experience-block__content' />
      </div>
      <Decoration className='experience-block__decoration' />
    </BaseStructure>
  )
}

export default Experience
