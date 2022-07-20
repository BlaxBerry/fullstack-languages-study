import React, { useState } from 'react'
import {
  Space,
  Button,
  Typography,
  Collapse,
  List,
  Divider,
  Tag,
  Tooltip,
} from 'antd'
import { CreateWordInput, WordDetail } from '../../../types'

interface WordCreateForm4Props {
  formValues: CreateWordInput
  previousStep: () => void
  onClear: () => void
  onSubmit: () => void
  createWordLoading: boolean
  createWordData: WordDetail
}

export default function StepsForm4({
  formValues,
  previousStep,
  onClear,
  onSubmit,
  createWordLoading,
}: WordCreateForm4Props) {
  const [clearLoading, setClearLoading] = useState<boolean>(false)

  // 清空 form 数据 & 返回 step 1
  const clearAndBack = () => {
    setClearLoading(true)
    setTimeout(() => {
      onClear()
      setClearLoading(false)
    }, 1000)
  }

  return (
    <div className="word-create-form-4">
      {/* 1. 单词名 + 读音等 name pronunciation etc */}
      <Typography.Title level={3}>
        <Space>
          <span>{formValues.name}</span>
          <span>{formValues.pronunciation}</span>
        </Space>
      </Typography.Title>

      {/* 2. 单词范围 area list */}
      {formValues.area?.map((item, index) => (
        <Tag key={index}>{item}</Tag>
      ))}
      <Divider />

      {/* 3. 单词词性 + 语义 meaningsList */}
      <Typography.Title level={3}>词性与含义</Typography.Title>
      {formValues.meaningsList?.map((item, index) => (
        <div key={index} className="word-create-meanings-list">
          <strong>{item.type}</strong>
          <span>{item.meanings}</span>
        </div>
      ))}
      <Divider />

      {/* 4. 短语 expressions list */}
      <Typography.Title level={3}>短语搭配</Typography.Title>
      {formValues.expressionsList.map(
        (
          { expression, translation: expressionTranslation, sentencesList },
          expressionIndex
        ) => (
          <Collapse
            key={expressionIndex}
            expandIconPosition="end"
            className="word-create-expressions-list"
          >
            {/* 4.1 短语名 + 含义 */}
            <Collapse.Panel
              key={expression}
              header={
                <>
                  <span className="word-create-expressions-list-expression">
                    {expression}
                  </span>
                  <span className="word-create-expressions-list-translation">
                    {expressionTranslation}
                  </span>
                </>
              }
            >
              {/* 4.2 短语例句 + 翻译 */}
              <List
                dataSource={sentencesList}
                locale={{ emptyText: '暂无数据' }}
                renderItem={(
                  { sentence, translation: sentenceTranslation },
                  sentenceIndex
                ) => (
                  <List.Item key={sentenceIndex}>
                    <List.Item.Meta
                      title={
                        // 短语例句
                        <Typography.Paragraph
                          ellipsis={{
                            rows: 1,
                            expandable: true,
                            symbol: '更多',
                          }}
                        >
                          {sentence}
                        </Typography.Paragraph>
                      }
                      description={
                        // 翻译
                        <Typography.Paragraph
                          type="secondary"
                          ellipsis={{
                            rows: 1,
                            expandable: true,
                            symbol: '更多',
                          }}
                        >
                          {sentenceTranslation}
                        </Typography.Paragraph>
                      }
                    />
                  </List.Item>
                )}
              />
            </Collapse.Panel>
          </Collapse>
        )
      )}
      <Divider />

      {/* 5. 例句 sentencesList */}
      <Typography.Title level={3}>相关例句</Typography.Title>
      <List
        className="word-create-sentences-list"
        dataSource={formValues.sentencesList}
        locale={{ emptyText: '暂无数据' }}
        renderItem={({ sentence, translation }, index) => (
          <List.Item key={index}>
            <List.Item.Meta
              title={
                // 短语例句
                <Typography.Paragraph
                  className="word-create-sentences-list-sentence"
                  ellipsis={{
                    rows: 1,
                    expandable: true,
                    symbol: '更多',
                  }}
                >
                  {sentence}
                </Typography.Paragraph>
              }
              description={
                // 翻译
                <Typography.Paragraph
                  type="secondary"
                  ellipsis={{
                    rows: 1,
                    expandable: true,
                    symbol: '更多',
                  }}
                >
                  {translation}
                </Typography.Paragraph>
              }
            />
          </List.Item>
        )}
      />
      <br />

      {/* sumbit button */}
      <Space>
        <Tooltip title="放弃提交内容，返回创建首页">
          <Button
            type="primary"
            danger
            onClick={clearAndBack}
            loading={clearLoading}
          >
            放弃
          </Button>
        </Tooltip>
        <Button type="primary" onClick={onSubmit} loading={createWordLoading}>
          提交
        </Button>
        <Button onClick={previousStep}>上一步</Button>
      </Space>
    </div>
  )
}
