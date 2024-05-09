import BaseStructure from '@/components/elements/BaseStructure/BaseStructure'
import { FC } from 'react'
import Content from './Content/Content'
import Decoration from './Decoration/Decoration'
import Title from './Title/Title'

const Head: FC = () => {
  return (
    <BaseStructure containerClass='--parentBlock'>
      <Decoration />
      <Title />
      <Content />
    </BaseStructure>
  )
}

export default Head
