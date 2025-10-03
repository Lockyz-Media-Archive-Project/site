import Link from 'next/link'
import games from '../../data/games.json'
import ScreenshotGallery from '../../components/ScreenshotGallery'
import Head from 'next/head'

export default function ProjectJareth(){
  const game = games.find(g => g.slug === 'project-jareth')

  return (
    <div className="container">
      <Head>
        <title>{game.title} — Lockyz Media Archive</title>
        <meta name="description" content={`Archived project: ${game.title}`} />
      </Head>
      <header>
        <h1>{game.title}</h1>
        <p className="description">A now abandoned VR Game, this was created purely to allow us to learn how to make VR Games.</p>
      </header>

      <section>
        <h2>IMPORTANT!</h2>
        <p>This is a VR-REQUIRED game — you'll need a VR Headset compatible with the OpenXR runtime.</p>
      </section>

      <section>
        <a href={game.download} className="download-button">📥 Download Game - itch.io</a>
      </section>

      <ScreenshotGallery images={game.screenshots} />

      <section className="long-description">
        <h2>About This Game</h2>
        <p>Trapped, that's what you are, like a rat, in a maze.</p>
      </section>

      <section>
        <h2>Sub-Anomalies</h2>
        <p>So far we've encountered three sub-anomalies within the PJ Main Anomaly. There's still a lot of information we do not know about them.</p>
      </section>

      <section className="links">
        <Link href="/">← Back to Archive</Link>
        <a href={game.download} target="_blank" rel="noreferrer">itch.io</a>
      </section>
    </div>
  )
}
