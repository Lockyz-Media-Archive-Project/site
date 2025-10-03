import Link from 'next/link'
import games from '../../data/games.json'
import Head from 'next/head'
import Layout from '../../components/Layout'

export default function MonstyCorp(){
  const game = games.find(g => g.slug === 'monsty-corp')

  const screenshots = (game?.screenshots && game.screenshots.length)
    ? game.screenshots.map(s => s.startsWith('/') ? s : `/screenshots/${game.slug}/${s}`)
    : [`/screenshots/${game.slug}/screen1.jpg`, '/Template/screenshots/screen1.jpg']

  return (
    <Layout title={`${game.title} — Lockyz Media Archive`}>
      <Head>
        <title>{game.title} — Lockyz Media Archive</title>
        <meta name="description" content={`Archived project: ${game.title}`} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/images/favicon.png" />
      </Head>

      <div className="container">
        <div id="announcement" className="announcement critical">
          <span className="announcement-text">This game was updated with an automated tool to protect against a security vulnerability affecting the Unity Engine. This means that there is an increased risk of bugs.</span>
        </div>

        <header>
          <h1>{game.title}</h1>
          <p className="description">A story based, puzzle game, Monsty Corp will have you exploring the facility known as “Monsty Corp”, an advanced science facility closed down due to strange occurrences.</p>
        </header>

        <section>
          <a href={game.download} className="download-button" target="_blank" rel="noreferrer">📥 Download Game - itch.io</a>
        </section>

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
          <Link href="/"><a className="btn">← Back to Archive</a></Link>
          <a href="https://github.com/Lockyz-Media-Archive-Project/Monsty-Corp-Unity" target="_blank" rel="noreferrer" className="btn">Source Code</a>
          <a href="https://store.steampowered.com/app/1335580/Monsty_Corp/" target="_blank" rel="noreferrer" className="btn">Steam</a>
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
    </Layout>
  )
}
