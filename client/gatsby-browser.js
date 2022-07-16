/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from "react"
import { ApolloProvider } from "@apollo/client"
import apolloClient from "./src/apollo/client"
import "antd/dist/antd.css"

export const wrapRootElement = ({ element }) => (
  <>
    <ApolloProvider client={apolloClient}>{element}</ApolloProvider>
  </>
)
