import React, { useState } from 'react'
import { Layout as AntdLayout } from 'antd'
import { Sider, Content } from '../common'

interface LayoutProps {
  children: React.ReactNode
}
export default function Layout({ children }: LayoutProps) {
  const [siderCollapsed, setSiderCollapsed] = useState<boolean>(false)

  return (
    <AntdLayout hasSider className="my-layout">
      <Sider
        className="my-sider"
        trigger={null}
        collapsible
        collapsed={siderCollapsed}
      />

      <Content
        className="my-content"
        siderCollapsed={siderCollapsed}
        setSiderCollapsed={setSiderCollapsed}
      >
        {children}
      </Content>
    </AntdLayout>
  )
}
