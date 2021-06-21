import React from 'react'
// import React, { ReactNode } from 'react

interface Props {
  children: {
    aum: string
    api?: string
    media?: JSX.Element
    link?: JSX.Element
    actions?: JSX.Element
    // actions?: ReactNode
  }
}
const Profiles: React.FC<Props> = ({ children }: Props) => (
  <div>
    <p className="aum"><span>{children.aum}</span><span>AUM:</span> <span>$?mm</span></p>
    <p className="api"><span>APY:</span> <span>{children.api}</span></p>
    {children.media}
    <h4>Protocol:{children.link}</h4>
    {children.actions}
  </div>
)
export default Profiles