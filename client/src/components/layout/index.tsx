import React, { useState } from 'react'
import { Layout as AntdLayout, Tooltip } from 'antd'
import { Sider, Content, SettingDrawer } from '../common'
import { DoubleLeftOutlined } from '@ant-design/icons'

interface LayoutProps {
  children: React.ReactNode
}
export default function Layout({ children }: LayoutProps) {
  const [siderCollapsed, setSiderCollapsed] = useState<boolean>(false)
  const [drawerCollapsed, setDrawerCollapsed] = useState<boolean>(true)

  return (
    <AntdLayout hasSider className="my-layout">
      {/* left sider */}
      <Sider
        className="my-sider"
        trigger={null}
        collapsible
        collapsed={siderCollapsed}
      />

      {/* right content */}
      <Content
        className="my-content"
        siderCollapsed={siderCollapsed}
        setSiderCollapsed={setSiderCollapsed}
      >
        {children}

        {/* setting drawer trigger button */}
        <Tooltip placement="left" title="设置" className="my-drawer-trigger">
          <DoubleLeftOutlined onClick={() => setDrawerCollapsed(false)} />
        </Tooltip>
      </Content>

      {/* right setting drawer */}
      <SettingDrawer
        className="my-setting-drawer"
        drawerCollapsed={drawerCollapsed}
        setDrawerCollapsed={setDrawerCollapsed}
      />
    </AntdLayout>
  )
}
