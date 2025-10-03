import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import games from '../../data/games.json'
import Layout from '../../components/Layout'

export default function GamePage() {
  const router = useRouter()
  const { slug } = router.query

  const game = games.find(g => g.slug === slug) || { title: 'Game', screenshots: [], download: '#' }

  // build screenshot URLs with fallbacks
  const buildScreenshotUrls = () => {
    if (game.screenshots && game.screenshots.length) {
      return game.screenshots.map(s => s.startsWith('/') ? s : (`/screenshots/${game.slug}/${s}`))
    }
    // fallback locations used in earlier build
    return [
      `/screenshots/${game.slug}/screen1.jpg`,
      `/Template/screenshots/screen1.jpg`,
    ]
  }
  const screenshots = buildScreenshotUrls()

  return (
    <Layout title={`${game.title} — Lockyz Media Archive`}>
      <Head>
        <title>{game.title} — Lockyz Media Archive</title>
        <meta name="description" content={`Archived project: ${game.title}`} />
        {/* try common favicon locations */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/images/favicon.png" />
      </Head>

      <div className="container">
        {game.announcement && (
          <div id="announcement" className="announcement info">
            <span className="announcement-text">{game.announcement}</span>
          </div>
        )}

        <header>
          <h1>{game.title}</h1>
          <p className="description">A preserved project from the Lockyz Media Archive.</p>
        </header>

        <a className="download-button" href={game.download} target="_blank" rel="noreferrer">📥 Download</a>

        <section className="screenshots" aria-label="Screenshots">
          {screenshots.map((src, idx) => (
            <img key={idx} src={src} alt={`${game.title} screenshot ${idx+1}`} onClick={() => {
              const lb = document.getElementById('lightbox')
              const img = document.getElementById('lightbox-img')
              if(lb && img){ img.src = src; lb.classList.add('show') }
            }} />
          ))}
        </section>

        <div id="lightbox" onClick={(e)=>{ if(e.target.id === 'lightbox'){ e.currentTarget.classList.remove('show') } }}>
          <img id="lightbox-img" alt="Fullscreen screenshot" />
        </div>

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
          <Link href="/games"><a className="btn">← Back to games</a></Link>
        </div>
      </div>
    </Layout>
  )
}
