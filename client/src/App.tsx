import React from 'react'
import RouteView from './routes/RouteView'
import Layout from './components/layout'

export default function App() {
  return (
    <React.Fragment>
      <Layout>
        <RouteView />
      </Layout>
    </React.Fragment>
  )
}
