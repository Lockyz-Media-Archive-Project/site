import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/Layout'

const games = [
  { slug: 'monsty-corp', title: 'Monsty Corp Unity' },
  { slug: 'scpc', title: 'SCPC' },
  { slug: 'table-ball', title: 'Table Ball Unity' },
  { slug: 'project-jareth', title: 'Project Jareth' },
]

export default function Games() {
  return (
    <Layout title="All Games — Lockyz Media Archive">
      <Head>
        <title>All Games — Lockyz Media Archive</title>
        <meta name="description" content="Browse all archived games from Lockyz Media." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/images/favicon.png" />
      </Head>

      <div className="games-landing container">
        <h1>All Games</h1>
        <div className="game-grid">
          {games.map(g => {
            // pick likely thumbnail path; fallback to Template folder used previously
            const thumb = `/screenshots/${g.slug}/screen1.jpg`
            const fallback = `/Template/screenshots/screen1.jpg`
            return (
              <Link key={g.slug} href={`/games/${g.slug}`}>
                <a className="game-card" aria-label={`Open ${g.title}`}>
                  <img src={thumb} onError={(e)=>{ if(e.target.src !== fallback){ e.target.src = fallback } }} alt={g.title} />
                  <div className="game-info">
                    <h2>{g.title}</h2>
                    <p>Click to view details</p>
                  </div>
                </a>
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
