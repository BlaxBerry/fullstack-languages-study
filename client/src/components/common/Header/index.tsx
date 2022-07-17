import React from 'react'
import { Layout as AntdLayout } from 'antd'
import LOGO from '../../../assets/logo.svg'

interface HeaderProps {
  className?: string
  style?: React.CSSProperties
}

export default function Header({ className, style }: HeaderProps) {
  return (
    // my-content-header
    <AntdLayout.Header className={className} style={style}>
      {/* logo */}
      <div className="my-header-left-logo">
        <a href="/" className="logo">
          <img src={LOGO} alt="languages study" />
          <h1>Languages Study</h1>
        </a>
      </div>

      <div className="my-header-right-space">@BlaxBerry</div>
    </AntdLayout.Header>
  )
}
