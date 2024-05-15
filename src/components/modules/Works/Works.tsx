import BaseStructure from '@/components/elements/BaseStructure/BaseStructure'
import { FC } from 'react'
import Header from './Header/Header'
import Slider from './Slider/Slider'
import { worksData } from '@/constants/works'
import './Works.scss'
import './Adaptive.scss'

const Works: FC = () => {
  return (
    <BaseStructure
      containerClass='--parentBlock'
      innerClass='works-block'
      containerChild={
        <Slider className='works-block__slider' data={worksData} />
      }
    >
      <Header className='works-block__header' />
    </BaseStructure>
  )
}

export default Works
