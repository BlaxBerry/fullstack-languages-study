/**
 * Graphql Resolver 函数中用到的 type 类型
 */

export type WordsListItem = {
  id: string
  name: string
}

export type WordType = 'n.' | 'vt.' | 'adj.' | 'adv.'
export type LanguageType = 'en' | 'ja'

export type WordsDetail = {
  id: string
  name: string
  pronunciation: string
  types: WordType[]
  createAt: Date
  count: number
  meanList: {
    [key: string]: {
      means: string[]
      expressions: {
        expression: string
        transltion: string
      }[]
      sentences: {
        sentence: string
        transltion: string
      }[]
    }[]
  }
}
