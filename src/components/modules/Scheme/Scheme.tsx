import BaseStructure from '@/components/elements/BaseStructure/BaseStructure'
import { FC } from 'react'
import Content from './Content/Content'
import { schemeData } from '@/constants/scheme'
import './Scheme.scss'
import './Adaptive.scss'

const Scheme: FC = () => {
  return (
    <BaseStructure containerClass='--parentBlock'>
      <h2 className='comp-title-NFS scheme-block__title'>СХЕМА РАБОТЫ</h2>
      <Content className='scheme-block__content' data={schemeData} />
    </BaseStructure>
  )
}

export default Scheme
