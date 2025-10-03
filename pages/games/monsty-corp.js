import Link from 'next/link'
import games from '../../data/games.json'
import ScreenshotGallery from '../../components/ScreenshotGallery'
import Head from 'next/head'

export default function MonstyCorp(){
  const game = games.find(g => g.slug === 'monsty-corp')

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
        <p className="description">A story based, puzzle game, Monsty Corp will have you exploring the facility known as “Monsty Corp”, an advanced science facility closed down due to strange occurrences.</p>
      </header>

      <section>
        <a href={game.download} className="download-button">📥 Download Game - itch.io</a>
      </section>

      <ScreenshotGallery images={game.screenshots} />

      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Multiple Endings</li>
          <li>3D Puzzle Game</li>
          <li>Various twists and turns to keep you on the edge of your seat</li>
        </ul>
      </section>

      <section className="long-description">
        <h2>About This Game</h2>
        <h3>Play as Robin and uncover the secrets of Monsty Corp</h3>
        <p>After getting stuck within the Monsty Corp facility, Robin just wants to go home and see their husband</p>
        <h3>Play as REDACTED and uncover the mystery behind your partners disappearance</h3>
        <p>Five years ago Robin went missing. And for 5 years REDACTED has been looking for clues to his partners disappearance</p>
      </section>

      <section className="links">
        <Link href="/">← Back to Archive</Link>
        <a href="https://github.com/Lockyz-Media-Archive-Project/Monsty-Corp-Unity" target="_blank" rel="noreferrer">Source Code</a>
        <a href="https://store.steampowered.com/app/1335580/Monsty_Corp/" target="_blank" rel="noreferrer">Steam</a>
      </section>

      <section>
        <h2>Other Information</h2>
        <p>Version: 1</p>
        <p>Developer: Lockyz Dev</p>
        <p>Genre: Action</p>
        <p>Engine: Unity</p>
        <p>Platform: Windows</p>
        <p>Status: Cancelled</p>
      </section>
    </div>
  )
}
