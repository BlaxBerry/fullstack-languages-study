import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Avatar, Button, Layout as AntdLayout } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import DEFAULT_AVATAR from '../../../assets/avatar.jpeg'

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
  const navigate = useNavigate()
  const siderTriggerIcon = useMemo((): JSX.Element => {
    return siderCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
  }, [siderCollapsed])

  return (
    // my-content-header
    <AntdLayout.Header className={className} style={style}>
      {/* sider trigger button */}
      <Button
        type="primary"
        icon={siderTriggerIcon}
        size="large"
        className="my-sider-trigger"
        onClick={() => setSiderCollapsed(!siderCollapsed)}
      />

      <div className="my-header-right-space">
        <Button
          type="link"
          style={{ color: '#fff' }}
          onClick={() => navigate('/mypage')}
        >
          User
        </Button>
        <Avatar
          src={DEFAULT_AVATAR}
          size="large"
          style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }}
        >
          User
        </Avatar>
      </div>
    </AntdLayout.Header>
  )
}
