import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BookOutlined } from '@ant-design/icons'
import { Spin, List, Button, Divider, Rate } from 'antd'
import { capitalizeString } from '../../../utils'
import { WordsListItem } from '../../../types'

interface WordsListContentProps {
  loading: boolean
  dataSource: WordsListItem[]
}

const CONTENT_HEIGHT = '60vh'

export default function WordsListContent({
  loading,
  dataSource,
}: WordsListContentProps) {
  const navigate = useNavigate()

  return (
    <div
      style={{
        height: CONTENT_HEIGHT,
        overflow: 'auto',
        padding: '0 24px',
        border: '1px solid rgba(140, 140, 140, 0.15)',
        marginTop: '-1.5px',
        marginBottom: '1rem',
      }}
    >
      <Spin spinning={loading} size="large">
        <List
          dataSource={dataSource}
          style={{ height: CONTENT_HEIGHT }}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={
                  <span style={{ fontSize: '1rem' }}>
                    {capitalizeString(item.name)}
                  </span>
                }
                description="xxxxxx"
              />
              <div>
                <Button
                  type="primary"
                  shape="circle"
                  size="large"
                  icon={<BookOutlined />}
                  onClick={() => navigate(`/words/detail?id=${item.id}`)}
                />
                <Divider type="vertical" />
                <Rate disabled allowHalf defaultValue={2.5} />
              </div>
            </List.Item>
          )}
        />
      </Spin>
    </div>
  )
}
