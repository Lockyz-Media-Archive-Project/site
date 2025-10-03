import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import games from '../../data/games.json'
import ScreenshotGallery from '../../components/ScreenshotGallery'

export default function GamePage() {
  const router = useRouter()
  const { slug } = router.query

  const game = games.find(g => g.slug === slug) || { title: 'Game', screenshots: [], download: '#' }

  return (
    <div className="container">
      <Head>
        <title>{game.title} — Lockyz Media Archive</title>
        <meta name="description" content={`Archived project: ${game.title}`} />
      </Head>

      <header>
        <h1>{game.title}</h1>
        <p className="description">A preserved project from the Lockyz Media Archive.</p>
      </header>

      <a className="download-button" href={game.download}>Download</a>

      <ScreenshotGallery images={game.screenshots} />

      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
        </ul>
      </section>

      <section className="long-description">
        <h2>About</h2>
        <p>Longer description of the project goes here. This page is generated from the static site conversion.</p>
      </section>

      <div className="links">
        <Link href="/games">← Back to games</Link>
      </div>
    </div>
  )
}
