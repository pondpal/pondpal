import '../styles/globals.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Analytics } from '@vercel/analytics/react'
import Nav from '../components/Nav'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const path = router.asPath.split('?')[0].split('#')[0]
  const canonicalUrl = 'https://www.pondpal.space' + (path === '/' ? '' : path)

  return (
    <>
      <Head>
        <meta name="google-adsense-account" content="ca-pub-7893724198285520" />
        <meta name="google-site-verification" content="0calb_heyG7VCzCnaSnXAQ3GVlJZoonOHaPa5qAZccQ" />
        <meta name="impact-site-verification" value="8cba4779-5d40-4ecf-875c-5265fd634872" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
