import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_WORDS_LIST } from '../../graphql'
import { GetWordsList, LanguageType, WordsListItem } from '../../types'
import { useErrorHandling } from '../../hooks'
import { WordsListContent } from '../../components/pages'
import { PageHeader, Pagination, Space, Statistic, Tabs } from 'antd'

type LanguageGroupItemType = {
  value: LanguageType
  name: string
}
const LANGUAGES_GROUP: LanguageGroupItemType[] = [
  {
    value: 'en',
    name: '英语',
  },
  {
    value: 'ja',
    name: '日语',
  },
  {
    value: 'it' as LanguageType,
    name: '意大利语',
  },
]

export default function WordsList() {
  const { handleGrapqhlRequestError } = useErrorHandling()
  const [wordsLanguagesSelected, setWordsLanguagesSelected] =
    useState<LanguageType>('en')

  const {
    data: wordsListData,
    loading: wordsListLoading,
    error: wordsListError,
  } = useQuery<GetWordsList>(GET_WORDS_LIST, {
    variables: { language: wordsLanguagesSelected },
  })

  useEffect(() => {
    // grapqhl request error handling
    if (wordsListError) handleGrapqhlRequestError(wordsListError)
  }, [wordsListError])

  return (
    <div>
      <PageHeader
        title="单词列表"
        subTitle="xxxxx"
        extra={
          <Space size={'large'}>
            <Statistic title="语言" value="英语" />
            <Statistic title="总数" value={wordsListData?.wordsList?.length} />
            <Statistic title="新增" value={2} />
          </Space>
        }
        footer={
          <Tabs
            // type="card"
            size="large"
            defaultActiveKey={LANGUAGES_GROUP[0].value}
            onChange={(activeKey: string) => {
              setWordsLanguagesSelected(activeKey as LanguageType)
            }}
          >
            {LANGUAGES_GROUP.map((item) => (
              <Tabs.TabPane key={item.value} tab={item.name} />
            ))}
          </Tabs>
        }
      />

      <WordsListContent
        loading={wordsListLoading}
        dataSource={wordsListData?.wordsList as WordsListItem[]}
      />

      <Pagination defaultCurrent={1} total={50} />
    </div>
  )
}
