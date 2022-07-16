import * as React from "react"
import { Seo } from "../components/common"
import { useQuery, useMutation } from "@apollo/client"
import { GET_PERSONLIST, CREATE_PERSON } from "../graphql"

const IndexPage = () => {
  const { loading, error, data } = useQuery(GET_PERSONLIST)
  console.log(loading, error, data)

  const [createPerson, { data: createData, loading: createLoading }] =
    useMutation(CREATE_PERSON)
  console.log(createData, createLoading)

  return (
    <>
      <Seo title="Home" />
      about text apollo graphql
      <div>
        <button
          onClick={() => {
            createPerson({
              variables: {
                input: { name: "xxx", age: 222 },
              },
            })
          }}
        >
          +1
        </button>
      </div>
    </>
  )
}

export default IndexPage
