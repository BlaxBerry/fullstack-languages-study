import React from 'react'
import { Layout as AntdLayout } from 'antd'
import Navigations from '../Navigations'

interface SiderProps {
  trigger: React.ReactNode
  collapsible: boolean
  collapsed: boolean
  className?: string
}
export default function Sider({
  trigger,
  collapsible,
  collapsed,
  className,
}: SiderProps) {
  return (
    // my-sider
    <AntdLayout.Sider
      className={className}
      trigger={trigger}
      collapsible={collapsible}
      collapsed={collapsed}
    >
      <div
        className="my-sider-header"
        style={{ background: 'rgba(255, 255, 255, 0.2)' }}
      />

      <Navigations className="my-sider-navigation-menu" />
    </AntdLayout.Sider>
  )
}
