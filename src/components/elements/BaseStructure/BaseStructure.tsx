import { FC, ReactElement } from 'react'
import { IDefault } from 'types/defaultInterface'

interface IBaseStructureProps extends IDefault {
  containerClass?: string
  innerClass?: string
  containerChild?: string | ReactElement
}

const BaseStructure: FC<IBaseStructureProps> = ({
  containerClass,
  innerClass,
  children,
  containerChild,
  styles,
}) => {
  return (
    <div className={`container ${containerClass || ''}`} style={{ ...styles }}>
      {containerChild || ''}
      <div className={`inner ${innerClass || ''}`}>{children}</div>
    </div>
  )
}

export default BaseStructure
