import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children, meta = {} }) {
  const title = meta.title || 'Lockyz Media Archive'
  const description = meta.description || 'An archive of indie and experimental games.'

  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
