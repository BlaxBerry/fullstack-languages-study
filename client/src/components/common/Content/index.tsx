import React from 'react'
import { BackTop, Button, Layout as AntdLayout } from 'antd'
import Header from '../Header'
import Footer from '../Footer'

interface ContentProps {
  children: React.ReactNode
  siderCollapsed: boolean
  setSiderCollapsed: (siderCollapsed: boolean) => void
  className?: string
  style?: React.CSSProperties
}

export default function Content({
  children,
  siderCollapsed,
  setSiderCollapsed,
  className,
  style,
}: ContentProps) {
  return (
    // my-content
    <AntdLayout className={className} style={style}>
      <Header
        className="my-header"
        siderCollapsed={siderCollapsed}
        setSiderCollapsed={setSiderCollapsed}
      />
      <AntdLayout.Content className="my-content-warp">
        {/* true content */}
        <div className="my-content-true-content">
          {children}

          <BackTop className="my-back-to-top">
            <Button type="primary">UP</Button>
          </BackTop>
        </div>

        {/* footer */}
        <Footer className="my-footer" />
      </AntdLayout.Content>
    </AntdLayout>
  )
}
