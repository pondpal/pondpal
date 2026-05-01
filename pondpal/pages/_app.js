import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="google-adsense-account" content="ca-pub-7893724198285520" />
        <meta name="google-site-verification" content="0calb_heyG7VCzCnaSnXAQ3GVlJZoonOHaPa5qAZccQ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
