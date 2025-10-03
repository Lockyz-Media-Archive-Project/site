import Link from 'next/link'
import games from '../../data/games.json'
import Head from 'next/head'
import Layout from '../../components/Layout'

export default function SCPC(){
  const game = games.find(g => g.slug === 'scpc')

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
          <p className="description">As the leader of the Stellar Concordance Peacekeeping Corps (SCPC), your job is to keep the peace in the region and defend the Stellar Concordance and allying planets from the Galactic Conquers and any other threats.</p>
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
          <Link href="/"><a className="btn">← Back to Archive</a></Link>
        </section>
      </div>
    </Layout>
  )
}
