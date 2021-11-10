import React from 'react';
import { wrapper } from '../store';
import { createApi, ApiContext } from '../store/api'
import Layout from '../components/Layout'

import '../styles/globals.css'
import '../styles/home.css'

const api = createApi()

function MyApp({ Component, pageProps }) {
  return (
    <ApiContext.Provider value={api}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApiContext.Provider>
  )
}

export default wrapper.withRedux(MyApp);