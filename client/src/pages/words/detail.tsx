import { PageHeader, Space, Statistic, Tabs } from 'antd'
import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function WordDetail() {
  const [searchParams] = useSearchParams()
  const [wordID] = React.useState(searchParams.get('id'))

  return (
    <div>
      <PageHeader
        onBack={() => window.history.back()}
        title={wordID}
        extra={
          <Space size={'large'}>
            <Statistic title="语言" value="英语" />
            <Statistic title="总数" value={9} />
            <Statistic title="新增" value={2} />
          </Space>
        }
        footer={
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="含义解释" key="1" />
            <Tabs.TabPane tab="短语搭配" key="2" />
            <Tabs.TabPane tab="常见例句" key="3" />
          </Tabs>
        }
      />

      <div
        style={{
          height: '65vh',
          overflow: 'auto',
          padding: '0 24px',
          border: '1px solid rgba(140, 140, 140, 0.15)',
          marginTop: '-1.5px',
          marginBottom: '1rem',
        }}
      ></div>
    </div>
  )
}
