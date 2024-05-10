import BaseStructure from '@/components/elements/BaseStructure/BaseStructure'
import { FC } from 'react'
import Content from './Content/Content'
import Decoration from './Decoration/Decoration'
import Title from './Title/Title'
import './Adaptive.scss'

const Head: FC = () => {
  return (
    <BaseStructure containerClass='--parentBlock'>
      <Decoration className='head-block__decoration' />
      <Title className='head-block__title' />
      <Content className='head-block__content' />
    </BaseStructure>
  )
}

export default Head
