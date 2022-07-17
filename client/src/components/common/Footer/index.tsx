import React from 'react'
import { Layout as AntdLayout } from 'antd'

interface FooterProps {
  className?: string
  style?: React.CSSProperties
}

export default function Footer({ className, style }: FooterProps) {
  return (
    // my-footer
    <AntdLayout.Footer className={className} style={style}>
      Languages Study ©2022 Created by BlaxBerry
    </AntdLayout.Footer>
  )
}
