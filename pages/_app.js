import React from 'react';
import { wrapper } from '../store';

import '../styles/globals.css'
import '../styles/Home.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp);