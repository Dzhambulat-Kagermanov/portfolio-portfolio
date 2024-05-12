import BaseStructure from '@/components/elements/BaseStructure/BaseStructure'
import { FC } from 'react'
import Content from './Content/Content'
import Decoration from './Decoration/Decoration'
import './Skills.scss'
import './Adaptive.scss'

const Skills: FC = () => {
  return (
    <BaseStructure containerClass='--parentBlock' innerClass='skills-block'>
      <Content className='skills-block__content' />
      <Decoration className='skills-block__decoration' />
    </BaseStructure>
  )
}

export default Skills
