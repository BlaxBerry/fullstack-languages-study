import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Menu as AntdMenu, MenuProps } from 'antd'
import {
  HomeOutlined,
  InfoCircleOutlined,
  LineChartOutlined,
  OrderedListOutlined,
  PlusOutlined,
  UserOutlined,
} from '@ant-design/icons'

interface NaviagtionsProps {
  className?: string
}

export default function Naviagtions({ className }: NaviagtionsProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const MENU_ITEMS = [
    {
      key: '/home',
      icon: <HomeOutlined />,
      label: '首页',
    },
    {
      key: '/mypage',
      icon: <UserOutlined />,
      label: '个人',
    },
    {
      key: '/words',
      icon: <OrderedListOutlined />,
      label: '单词',
      children: [
        { label: '列表', key: '/words/list', icon: <OrderedListOutlined /> },
        { label: '新增', key: '/words/create', icon: <PlusOutlined /> },
      ],
    },
    {
      key: '/statistics',
      icon: <LineChartOutlined />,
      label: '统计',
    },
    {
      key: '/about',
      icon: <InfoCircleOutlined />,
      label: '关于',
    },
  ]

  const [currentItem, setCurrentItem] = useState<string>(
    location.pathname === '/' ? '/home' : location.pathname
  )
  const [openedSubItem, setOpenedSubItem] = useState<string>(
    `/${location.pathname.slice(1).split('/')[0]}`
  )
  const onClick: MenuProps['onClick'] = (e): void => {
    setCurrentItem(e.key)
    navigate(e.key)
  }
  useEffect(() => {
    // set selected item
    setCurrentItem(location.pathname)
    // set opend subitem
    setOpenedSubItem(`/${location.pathname.slice(1).split('/')[0]}`)
  }, [location.pathname])

  return (
    <AntdMenu
      className={className}
      theme="dark"
      mode="inline"
      defaultSelectedKeys={[currentItem]}
      defaultOpenKeys={[openedSubItem]}
      items={MENU_ITEMS}
      forceSubMenuRender
      onClick={onClick}
    />
  )
}
