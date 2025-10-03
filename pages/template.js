import Link from 'next/link'
import Head from 'next/head'

export default function Template(){
  return (
    <div className="container">
      <Head>
        <title>Game Title — Lockyz Media Archive</title>
        <meta name="description" content="Template game page for Lockyz Media Archive" />
      </Head>

      <div id="announcement" className="announcement info">
        <span className="announcement-text">ℹ️ Welcome to our site! This is a sample announcement.</span>
      </div>

      <header>
        <h1>Game Title</h1>
        <p className="description">A short and engaging description of the game. Think tagline or pitch sentence.</p>
      </header>

      <section className="screenshots">
        <img src="/Template/screenshots/screen1.jpg" alt="Screenshot 1" />
        <img src="/Template/screenshots/screen2.jpg" alt="Screenshot 2" />
        <img src="/Template/screenshots/screen3.jpg" alt="Screenshot 3" />
      </section>

      <section>
        <a href="#" className="download-button">📥 Download Game</a>
      </section>

      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Fast-paced 2D action gameplay</li>
          <li>Retro pixel art style</li>
          <li>Original chiptune soundtrack</li>
        </ul>
      </section>

      <section className="long-description">
        <h2>About This Game</h2>
        <p>This game is a tribute to early 2000s Flash and arcade-style gameplay.</p>
      </section>

      <section className="links">
        <Link href="/">← Back to Archive</Link>
        <a href="https://example.com" target="_blank" rel="noreferrer">Official Site</a>
        <a href="https://example.com/wiki" target="_blank" rel="noreferrer">Game Wiki</a>
      </section>
    </div>
  )
}
