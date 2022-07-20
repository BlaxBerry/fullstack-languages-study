import { gql } from '@apollo/client'

const GET_WORDS_LIST = gql`
  query getWordsList($language: String!) {
    wordsList(language: $language) {
      id
      name
    }
  }
`
const GET_WORD_DETAIL = gql`
  query getWordDetail($input: WordDetailInput!) {
    wordDetail(input: $input) {
      id
      name
      language
      pronunciation
      publishAt
      meaningsList {
        type
        meanings
      }
      expressionsList {
        expression
        translation
        sentencesList {
          sentence
          translation
        }
      }
      sentencesList {
        sentence
        translation
      }
    }
  }
`

export { GET_WORDS_LIST, GET_WORD_DETAIL }
