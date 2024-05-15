import BaseStructure from '@/components/elements/BaseStructure/BaseStructure'
import MainTitle from '@/components/ui/title/MainTitle'
import { FC } from 'react'
import Content from './Content/Content'

const Contacts: FC = () => {
  return (
    <BaseStructure containerClass='--parentBlock'>
      <MainTitle className='contacts-block__title'>КОНТАКТЫ</MainTitle>
      <Content className='contacts-block__content' />
    </BaseStructure>
  )
}

export default Contacts
