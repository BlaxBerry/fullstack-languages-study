/**
 * 针对 useQuery 与 useMutation 返回值的 type 类型
 */

import { WordDetail, WordsListItem } from './graphql'

// getWordsList
export interface GetWordsList {
  wordsList: WordsListItem[]
}

// getWordDetail
export interface GetWordsDetail {
  wordDetail: WordDetail
}
