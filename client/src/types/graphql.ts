/**
 * Graphql 请求与返回值相关 type 类型
 */

export type WordsListItem = {
  id: string
  name: string
}

export type WordType = 'n.' | 'vt.' | 'adj.' | 'adv.'
export type LanguageType = 'en' | 'ja'

export interface WordCreateInput {
  // [key: string]: unknown
  id: string
  name: string
  pronunciation: string
  language: LanguageType
  area: string[]
  meaningList: {
    type: string
    meaning: string
  }[]
  publishAt: Date
}
