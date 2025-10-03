import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import { useEffect } from 'react'

export default function Layout({ children, title }) {
	// Ensure document title is set when Layout is used without <Head>
	const pageTitle = title || 'Lockyz Media Archive'

	useEffect(() => {
		document.title = pageTitle
	}, [pageTitle])

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>{pageTitle}</title>
			</Head>

			{/* Skip link for keyboard users */}
			<a className="skip-link" href="#main-content">Skip to main content</a>

			{/* Site header/navigation */}
			<Navbar />

			{/* Main content landmark */}
			<main id="main-content" role="main" tabIndex="-1" className="site-main">
				{children}
			</main>

			{/* Site footer */}
			<Footer />
		</>
	)
}
