import { gql } from '@apollo/client'

const GET_WORDS_LIST = gql`
  query getWordsList($language: String!) {
    wordsList(language: $language) {
      id
      name
    }
  }
`

export { GET_WORDS_LIST }
