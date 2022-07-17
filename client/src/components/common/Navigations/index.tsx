import React, { useState } from 'react'
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
  const MENU_ITEMS = [
    {
      key: '1',
      icon: <HomeOutlined />,
      label: '首页',
    },
    {
      key: '2',
      icon: <UserOutlined />,
      label: '个人',
    },
    {
      key: '3',
      icon: <OrderedListOutlined />,
      label: '单词',
      children: [
        { label: '列表', key: 'submenu-item-1', icon: <OrderedListOutlined /> },
        { label: '新增', key: 'submenu-item-2', icon: <PlusOutlined /> },
      ],
    },
    {
      key: '4',
      icon: <LineChartOutlined />,
      label: '统计',
    },
    {
      key: '5',
      icon: <InfoCircleOutlined />,
      label: '关于',
    },
  ]

  const [currentItem, setCurrentItem] = useState('1')
  const onClick: MenuProps['onClick'] = (e) => {
    setCurrentItem(e.key)
    console.log(e)
  }

  return (
    <AntdMenu
      className={className}
      theme={'dark'}
      mode="vertical"
      defaultSelectedKeys={[currentItem]}
      defaultOpenKeys={[currentItem]}
      items={MENU_ITEMS}
      forceSubMenuRender
      onClick={onClick}
    />
  )
}
