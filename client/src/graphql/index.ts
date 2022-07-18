import { gql } from '@apollo/client'

const GET_WORDS_LIST = gql`
  query getWordsList($language: String!) {
    wordsList(language: $language) {
      id
      name
    }
  }
`

const GET_TEST_MESSAGE = gql`
  query {
    testMessage {
      message
    }
  }
`

const CREATE_TEST_MESSAGE = gql`
  mutation createTestMessage($input: CreateTestMessageInputType!) {
    testMessage(input: $input) {
      message
    }
  }
`

export { GET_WORDS_LIST, GET_TEST_MESSAGE, CREATE_TEST_MESSAGE }
