import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="google-adsense-account" content="ca-pub-7893724198285520" />
        <meta name="google-site-verification" content="0calb_heyG7VCzCnaSnXAQ3GVlJZoonOHaPa5qAZccQ" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
