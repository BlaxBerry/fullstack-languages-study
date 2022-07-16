import { gql } from "@apollo/client"

const GET_PERSONLIST = gql`
  query {
    getPersonList {
      id
      name
      age
    }
  }
`

const CREATE_PERSON = gql`
  mutation createPerson($input: PersonCreateInputType!) {
    createPerson(input: $input) {
      id
      name
      age
    }
  }
`

export { GET_PERSONLIST, CREATE_PERSON }
