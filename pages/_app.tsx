import './_app.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next.jsサンプル</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
