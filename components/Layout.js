import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'

export default function Layout({ children, meta = {} }) {
  const title = meta.title || 'Lockyz Media Archive'
  const description = meta.description || 'An archive of indie and experimental games.'

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      {/* Marker for optional edge-injection of header/navbar */}
      {/* HEADER_MARKER */}
      <Navbar />

      {/* Announcement slot: pages can render an element with id "announcement" if they need to show one */}
      {children}

      {/* Marker for optional edge-injection of footer */}
      {/* FOOTER_MARKER */}
      <Footer />
    </>
  )
}
