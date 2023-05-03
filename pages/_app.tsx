import Head from 'next/head'
import { Fragment } from 'react'
import type { AppProps } from 'next/app'

import '/public/css/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Amaze Ministries</title>
        <link rel='shortcut icon' href = '/images/amaze.png' />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}
