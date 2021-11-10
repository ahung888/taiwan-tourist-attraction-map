import React from 'react';
import { wrapper } from '../store';
import { apiSpotCity, ApiContext } from '../store/api'
import Layout from '../components/Layout'

import '../styles/globals.css'
import '../styles/home.css'

const api = apiSpotCity()

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