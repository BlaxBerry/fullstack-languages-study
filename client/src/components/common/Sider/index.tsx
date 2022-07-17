import React from 'react'
import { Layout as AntdLayout } from 'antd'
import Navigations from '../Navigations'

interface SiderProps {
  trigger: React.ReactNode
  collapsible: boolean
  collapsed: boolean
  className?: string
  style?: React.CSSProperties
}
export default function Sider({
  trigger,
  collapsible,
  collapsed,
  className,
  style,
}: SiderProps) {
  return (
    // my-sider
    <AntdLayout.Sider
      className={className}
      style={style}
      trigger={trigger}
      collapsible={collapsible}
      collapsed={collapsed}
    >
      <div className="my-sider-header">LOGO</div>
      <Navigations className="my-sider-navigation-menu" />
    </AntdLayout.Sider>
  )
}
