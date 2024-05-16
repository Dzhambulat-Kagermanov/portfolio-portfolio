import { FC, ReactElement } from 'react'
import { IDefault } from 'types/defaultInterface'

interface IBaseStructureProps extends IDefault {
  containerClass?: string
  innerClass?: string
  containerChild?: string | ReactElement
  containerOnClick?: React.MouseEventHandler<HTMLButtonElement>
}

const BaseStructure: FC<IBaseStructureProps> = ({
  containerClass,
  innerClass,
  children,
  containerChild,
  styles,
  containerOnClick,
}) => {
  return (
    <div
      className={`container ${containerClass || ''}`}
      style={{ ...styles }}
      onClick={containerOnClick}
    >
      {containerChild || ''}
      <div className={`inner ${innerClass || ''}`}>{children}</div>
    </div>
  )
}

export default BaseStructure
