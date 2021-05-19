import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1>{process.env.GATSBY_SERVER_TEST_VAR}</h1>
      <h1>{process.env.GATSBY_TEST_VAR}</h1>
      <h1>{process.env.TEST_VAR}</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
