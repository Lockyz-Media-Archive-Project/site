import Link from 'next/link'

export default function Custom404() {
  return (
    <main className="error-content">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist. Have a cool duck instead!</p>
      <img src="https://media.tenor.com/i3Qc4TdcXwMAAAAj/duck-meme.gif" alt="duck meme" className="responsive-img" />
      <Link href="/" className="back-home-btn">Go back to Home</Link>
    </main>
  )
}
