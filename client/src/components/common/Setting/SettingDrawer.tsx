import React from 'react'
import { useThemeSwitcher } from 'react-css-theme-switcher'
import {
  Button,
  Divider,
  Drawer as AntdDrawer,
  Radio,
  RadioChangeEvent,
  Space,
} from 'antd'
import { SettingOutlined } from '@ant-design/icons'

interface SettingDrawerProps {
  drawerCollapsed: boolean
  setDrawerCollapsed: (setDrawerCollapsed: boolean) => void
  className?: string
  style?: React.CSSProperties
}

type SettingDrawerTriggerButtonProps = Pick<
  SettingDrawerProps,
  'setDrawerCollapsed'
>

export const SettingDrawerTriggerButton = ({
  setDrawerCollapsed,
}: SettingDrawerTriggerButtonProps): JSX.Element => (
  <Button
    type="primary"
    icon={<SettingOutlined />}
    className="my-drawer-trigger"
    onClick={() => setDrawerCollapsed(false)}
  />
)

export default function SettingDrawer({
  drawerCollapsed,
  setDrawerCollapsed,
  className,
  style,
}: SettingDrawerProps) {
  const { switcher, currentTheme } = useThemeSwitcher()
  const toggleTheme = (themeSelected: string) => {
    switcher({ theme: themeSelected })
  }

  const BUTTON_GROUP_THEME = [
    {
      value: 'light',
      title: '明亮模式',
    },
    {
      value: 'dark',
      title: '暗黑模式',
    },
  ]

  return (
    // my-setting-drawer
    <AntdDrawer
      className={className}
      style={style}
      title="设置"
      placement="right"
      onClose={() => setDrawerCollapsed(true)}
      visible={!drawerCollapsed}
    >
      {/* 1. Theme  */}
      <Divider orientation="left">主题模式</Divider>
      <Radio.Group
        size="large"
        defaultValue={currentTheme}
        buttonStyle="solid"
        onChange={(e: RadioChangeEvent) => toggleTheme(e.target.value)}
      >
        <Space size={'small'}>
          {BUTTON_GROUP_THEME.map(({ value, title }) => (
            <Radio.Button value={value} key={value}>
              {title}
            </Radio.Button>
          ))}
        </Space>
      </Radio.Group>

      {/* 2. */}
    </AntdDrawer>
  )
}
