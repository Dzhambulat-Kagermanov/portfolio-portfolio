import BaseStructure from '@/components/elements/BaseStructure/BaseStructure'
import HashtagsElem from '@/components/elements/HashtagsElem/HashtagsElem'
import { hashtagsData } from '@/constants/hashtags'
import { FC } from 'react'

const Header: FC = () => {
  return (
    <BaseStructure
      styles={{
        position: 'absolute',
        left: '50%',
        translate: '-50% 0',
        top: 0,
      }}
    >
      <HashtagsElem data={hashtagsData} className='header-block__hashtags' />
    </BaseStructure>
  )
}

export default Header
