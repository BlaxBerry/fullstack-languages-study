import React from 'react'
import { Layout as AntdLayout } from 'antd'
// import Footer from '../Footer'

interface ContentProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function Content({ children, className, style }: ContentProps) {
  return (
    // my-content
    <AntdLayout>
      <AntdLayout.Content className={className} style={style}>
        {/* true content */}
        <div className="my-content-true-content">{children}</div>

        {/* footer */}
        {/* <Footer className="my-footer" /> */}
      </AntdLayout.Content>
    </AntdLayout>
  )
}
