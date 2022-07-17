import React, { useMemo } from 'react'
import { Button, Layout as AntdLayout } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

interface HeaderProps {
  siderCollapsed: boolean
  setSiderCollapsed: (siderCollapsed: boolean) => void
  className?: string
  style?: React.CSSProperties
}

export default function Header({
  siderCollapsed,
  setSiderCollapsed,
  className,
  style,
}: HeaderProps) {
  const siderTriggerIcon = useMemo((): JSX.Element => {
    return siderCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
  }, [siderCollapsed])

  return (
    // my-content-header
    <AntdLayout.Header className={className} style={style}>
      {/* sider trigger button */}
      <Button
        type="primary"
        shape="circle"
        icon={siderTriggerIcon}
        size="large"
        className="my-sider-trigger"
        onClick={() => setSiderCollapsed(!siderCollapsed)}
      />
    </AntdLayout.Header>
  )
}
