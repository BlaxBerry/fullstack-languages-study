import React, { useState } from 'react'
import { Layout as AntdLayout } from 'antd'
import Navigations from '../Navigations'

interface SiderProps {
  className?: string
  style?: React.CSSProperties
}

export default function Sider({ className, style }: SiderProps) {
  const [siderCollapsed, setSiderCollapsed] = useState<boolean>(false)

  return (
    // my-sider
    <AntdLayout.Sider
      className={className}
      style={style}
      onCollapse={(value) => setSiderCollapsed(value)}
      collapsible
      collapsed={siderCollapsed}
    >
      {/* navigations menu */}
      <Navigations className="my-sider-navigation-menu" />
    </AntdLayout.Sider>
  )
}
