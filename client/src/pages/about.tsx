import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import { useMutation, useQuery } from '@apollo/client'
import { GET_TEST_MESSAGE, CREATE_TEST_MESSAGE } from '../graphql'

export default function About() {
  const {
    data: testMessageData,
    loading: testMessageLoading,
    error: testMessageError,
  } = useQuery(GET_TEST_MESSAGE)

  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    if (testMessageError) setErrorMessage(testMessageError?.message)
  }, [testMessageError])

  const [
    createTestMessage,
    { data: createTestMessageData, loading: createTestMessageLoading },
  ] = useMutation(CREATE_TEST_MESSAGE)

  return (
    <div style={{ height: '600vh' }}>
      <div>
        <h3>Test Message</h3>

        {testMessageLoading && <span>loading...</span>}
        {testMessageData ? (
          <span>{testMessageData?.testMessage?.message}</span>
        ) : (
          <span>{errorMessage} 暂无数据</span>
        )}
      </div>

      <hr />

      <div>
        <h3>Create Test Message</h3>
        {createTestMessageLoading && <span>...loading</span>}
        {createTestMessageData ? (
          <span>{createTestMessageData?.testMessage?.message}</span>
        ) : (
          <span>{errorMessage}</span>
        )}
        <br />
        <Button
          type="primary"
          onClick={() => {
            createTestMessage({
              variables: {
                input: {
                  message: 'xxxxxx',
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
