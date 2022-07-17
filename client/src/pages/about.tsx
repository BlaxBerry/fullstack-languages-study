import React from 'react'
import { Button } from 'antd'
import { useMutation, useQuery } from '@apollo/client'
import { CREATE_PERSON, GET_PERSONLIST } from '../graphql'

export default function About() {
  const { loading, error, data } = useQuery(GET_PERSONLIST)
  console.log(loading, error, data)

  const [createPerson, { data: createData, loading: createLoading }] =
    useMutation(CREATE_PERSON)
  console.log(createData, createLoading)

  return (
    <div style={{ height: '600vh' }}>
      <hr />
      <div>
        <Button
          type="primary"
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
          mutation create person
        </Button>
      </div>
    </div>
  )
}
