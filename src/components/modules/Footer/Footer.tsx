import BaseStructure from '@/components/elements/BaseStructure/BaseStructure'
import HashtagsElem from '@/components/elements/HashtagsElem/HashtagsElem'
import { hashtagsData } from '@/constants/hashtags'
import { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer>
      <BaseStructure styles={{ backgroundColor: 'var(--secondDarkGrey)' }}>
        <HashtagsElem data={hashtagsData} className='footer-block__hashtags' />
      </BaseStructure>
    </footer>
  )
}

export default Footer
