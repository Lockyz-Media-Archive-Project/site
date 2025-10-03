import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children, title }) {
	return (
		<>
			<Head>
				<link rel="icon" href="/images/favicon.png" type="image/png" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{title ? <title>{title}</title> : null}
			</Head>

			<Navbar />
			<div className="site-wrap">
				<div className="container">
					{children}
				</div>
			</div>
			<Footer />
		</>
	)
}
