import { ApolloError } from '@apollo/client'

export default function useErrorHandling() {
  // grapqhl request error handling
  const handleGrapqhlRequestError = (apolloError: ApolloError) => {
    if (apolloError?.clientErrors?.length) {
      console.log('Client Error: ', apolloError?.clientErrors)
    }
    if (apolloError?.graphQLErrors?.length) {
      console.log('Graqhql Error: ', apolloError?.graphQLErrors)
    }
    if (apolloError?.networkError) {
      console.log('Network Error: ', apolloError?.networkError?.message)
    }
  }

  // grapqhl response error handling
  // ...

  // system error
  // ...

  return {
    handleGrapqhlRequestError,
  }
}
