import React from 'react'
import { BackTop as AntdBackTop, Button } from 'antd'
import { ArrowUpOutlined } from '@ant-design/icons'

export default function BackTop() {
  return (
    <AntdBackTop className="my-back-to-top">
      <Button type="primary" icon={<ArrowUpOutlined />} />
    </AntdBackTop>
  )
}
