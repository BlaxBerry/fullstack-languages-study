import { useMutation, useQuery } from '@apollo/client'
import React from 'react'
import { CREATE_PERSON, GET_PERSONLIST } from './graphql'

export default function App() {
  const { loading, error, data } = useQuery(GET_PERSONLIST)
  console.log(loading, error, data)

  const [createPerson, { data: createData, loading: createLoading }] =
    useMutation(CREATE_PERSON)
  console.log(createData, createLoading)

  return (
    <div>
      App
      <div>
        <button
          onClick={() => {
            createPerson({
              variables: {
                input: {
                  name: 'xxxx',
                  age: 222,
                },
              },
            })
          }}
        >
          +1
        </button>
      </div>
    </div>
  )
}
