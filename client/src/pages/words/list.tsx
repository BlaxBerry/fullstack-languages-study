import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_WORDS_LIST } from '../../graphql'
import { WordsListItem } from '../../types'

export default function WordsList() {
  const [wordsLanguagesSelected, setWordsLanguagesSelected] = useState('en')
  const {
    data: wordsListData,
    loading: wordsListLoading,
    error: wordsListError,
  } = useQuery(GET_WORDS_LIST, {
    variables: { language: wordsLanguagesSelected },
  })

  // TODO: 共通化
  // grapqhl request error handling
  useEffect(() => {
    if (wordsListError?.clientErrors) {
      console.log('Client Error: ', wordsListError?.clientErrors)
    }
    if (wordsListError?.graphQLErrors) {
      console.log('Graqhql Error: ', wordsListError?.graphQLErrors)
    }
    if (wordsListError?.networkError) {
      console.log('Network Error: ', wordsListError?.networkError?.message)
    }
  }, [wordsListError])

  return (
    <div>
      <h1>Words List</h1>

      <button onClick={() => setWordsLanguagesSelected('en')}>en words</button>
      <button onClick={() => setWordsLanguagesSelected('jaa')}>ja words</button>

      {wordsListLoading && <div>Loading...</div>}

      {!wordsListLoading && !wordsListData && <div>暂无数据</div>}

      {!wordsListLoading &&
        wordsListData &&
        wordsListData?.wordsList?.map(
          ({ id, name }: WordsListItem, index: number) => (
            <div key={id}>
              {index + 1}. {name}
            </div>
          )
        )}
    </div>
  )
}
