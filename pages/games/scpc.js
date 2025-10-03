import Link from 'next/link'
import games from '../../data/games.json'
import ScreenshotGallery from '../../components/ScreenshotGallery'
import Head from 'next/head'

export default function SCPC(){
  const game = games.find(g => g.slug === 'scpc')

  return (
    <div className="container">
      <Head>
        <title>{game.title} — Lockyz Media Archive</title>
        <meta name="description" content={`Archived project: ${game.title}`} />
      </Head>
      <div id="announcement" className="announcement critical">
        <span className="announcement-text">This game was updated with an automated tool to protect against a security vulnerability affecting the Unity Engine. This means that there is an increased risk of bugs.</span>
      </div>

      <header>
        <h1>{game.title}</h1>
        <p className="description">As the leader of the Stellar Concordance Peacekeeping Corps (SCPC), your job is to keep the peace in the region and defend the Stellar Concordance and allying planets from the Galactic Conquers and any other threats.</p>
      </header>

      <section>
        <a href={game.download} className="download-button">📥 Download Game - itch.io</a>
      </section>

      <ScreenshotGallery images={game.screenshots} />

      <section className="long-description">
        <h2>About This Game</h2>
        <h3>An Engaging Story</h3>
        <p>The Stellar Concordance is a vast and wondrous expanse of space that contains countless stars, planets, and other celestial bodies. As the leader of the Stellar Concordance Peacekeeping Corps (SCPC), your job is to keep the peace.</p>
        <h3>Every Choice Has Consequences</h3>
        <p>Every single choice puts points towards one of 3 categories. Having enough points in any of the 3 categories will result in changes to the game's features and story.</p>
      </section>

      <section>
        <h2>Other Information</h2>
        <p>Version: 2</p>
        <p>Developer: Lockyz Dev</p>
        <p>Genre: Adventure</p>
        <p>Engine: Unity</p>
        <p>Tags: Retro, Sci-fi, Singleplayer, Unity</p>
        <p>Platform: Windows</p>
        <p>Status: Prototype</p>
      </section>

      <section className="links">
        <Link href="/">← Back to Archive</Link>
      </section>
    </div>
  )
}
