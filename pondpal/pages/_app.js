import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="google-adsense-account" content="ca-pub-7893724198285520">
      </Head>
      <Component {...pageProps} />
    </>
  )
}
