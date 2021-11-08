import React from 'react'
import Head from 'next/head'
import { gaScript } from '../utils/ga'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>台灣旅遊景點導覽地圖</title>
        <meta name="description" content="台灣旅遊景點導覽地圖" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-212235762-1"></script>
        <script>{gaScript}</script>
      </Head>
      {children}
    </>
  )
}

export default Layout