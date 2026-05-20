import '../styles/globals.css'
import Head from 'next/head'
import Nav from '../components/Nav'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="google-adsense-account" content="ca-pub-7893724198285520" />
        <meta name="google-site-verification" content="0calb_heyG7VCzCnaSnXAQ3GVlJZoonOHaPa5qAZccQ" />
        <meta name="impact-site-verification" value="8cba4779-5d40-4ecf-875c-5265fd634872" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </>
  )
}
