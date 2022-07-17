import React, { useState } from 'react'
import { Layout as AntdLayout } from 'antd'
import {
  Sider,
  Content,
  Header,
  BackTop,
  SettingDrawer,
  SettingDrawerTriggerButton,
} from '../common'

interface LayoutProps {
  children: React.ReactNode
}
export default function Layout({ children }: LayoutProps) {
  const [drawerCollapsed, setDrawerCollapsed] = useState<boolean>(true)

  return (
    <AntdLayout className="my-layout">
      {/* top header */}
      <Header className="my-header" />

      <AntdLayout hasSider>
        {/* left sider */}
        <Sider className="my-sider" />

        {/* right content */}
        <Content className="my-content">
          {children}

          {/* setting drawer trigger button */}
          <SettingDrawerTriggerButton setDrawerCollapsed={setDrawerCollapsed} />

          {/* back to top button */}
          <BackTop />
        </Content>
      </AntdLayout>

      {/* right setting drawer */}
      <SettingDrawer
        className="my-setting-drawer"
        drawerCollapsed={drawerCollapsed}
        setDrawerCollapsed={setDrawerCollapsed}
      />
    </AntdLayout>
  )
}
