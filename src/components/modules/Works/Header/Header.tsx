import SecondTitle from '@/components/ui/title/SecondTitle'
import { FC } from 'react'
import classes from './Header.module.scss'
import { IClassName } from '@/types/classInterface'
import { useAppSelector } from '@/hooks/reduxHooks'

interface IHeaderProps extends IClassName {}

const Header: FC<IHeaderProps> = ({ className }) => {
  const worksQnt = useAppSelector((state) => {
    return state.works.length
  })

  return (
    <div className={`${classes.header} ${className || ''}`}>
      <SecondTitle className='works-header__title'>РАБОТЫ</SecondTitle>
      <h2
        style={{ fontFamily: 'HelvetivaNeueB' }}
        className='comp-title-1'
      >{`ВСЕГО / ${worksQnt}`}</h2>
    </div>
  )
}

export default Header
