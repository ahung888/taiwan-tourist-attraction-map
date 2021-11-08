import React from 'react';
import { wrapper } from '../store';
import Layout from '../components/Layout'

import '../styles/globals.css'
import '../styles/Home.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default wrapper.withRedux(MyApp);