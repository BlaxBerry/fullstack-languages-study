/**
 * Graphql 请求与返回值相关 type 类型
 */

export type WordsListItem = {
  id: string
  name: string
}

export type WordType = 'n.' | 'vt.' | 'adj.' | 'adv.'
export type LanguageType = 'en' | 'ja'

export type sentencesListItem = {
  sentence: string
  translation: string
}

export interface WordCreateInput {
  // [key: string]: unknown
  name: string
  pronunciation: string
  language: LanguageType
  area: string[]
  meaningsList: {
    type: string
    meanings: string
  }[]
  expressionsList: {
    expression: string
    translation: string
    sentencesList: sentencesListItem[]
  }[]
  sentencesList: sentencesListItem[]
  publishAt: Date
}
