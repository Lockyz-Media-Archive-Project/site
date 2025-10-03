import Link from 'next/link'
import Head from 'next/head'

const games = [
  { slug: 'monsty-corp', title: 'Monsty Corp Unity' },
  { slug: 'scpc', title: 'SCPC' },
  { slug: 'table-ball', title: 'Table Ball Unity' },
  { slug: 'project-jareth', title: 'Project Jareth' },
]

export default function Games() {
  return (
    <>
      <Head>
        <title>All Games — Lockyz Media Archive</title>
        <meta name="description" content="Browse all archived games from Lockyz Media." />
      </Head>

      <div className="games-landing">
        <h1>All Games</h1>
        <div className="game-grid">
          {games.map(g => (
            <Link key={g.slug} href={`/games/${g.slug}`} className="game-card">
              {/* Use the game's first screenshot from the public/screenshots/<slug>/ folder */}
              <img src={`/screenshots/${g.slug}/screen1.jpg`} alt={g.title} />
              <div className="game-info">
                <h2>{g.title}</h2>
                <p>Click to view details</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
