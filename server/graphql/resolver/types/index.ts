/**
 * Graphql Resolver 函数中用到的 type 类型
 */

export type WordsListItem = {
  id: string
  name: string
}

export type WordType = 'n.' | 'vt.' | 'adj.' | 'adv.'
export type LanguageType = string

export type SentencesListItem = {
  sentence: string
  translation: string
}

export interface WordDetail {
  id: string
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
    sentencesList: SentencesListItem[]
  }[]
  sentencesList: SentencesListItem[]
  publishAt: Date
}

export type GetWordDetailInput = {
  id: string
  language: LanguageType
}

export type CreateWordInput = Omit<WordDetail, 'id' | 'publishAt'>
