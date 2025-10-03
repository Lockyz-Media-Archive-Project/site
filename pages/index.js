import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lockyz Media Archive — Home</title>
        <meta name="description" content="Lockyz Media Archive — preserving abandoned projects and game builds." />
      </Head>

      <main>
        <div className="card">
          <h2>Monsty Corp Unity</h2>
          <p>Explore the facility known as "Monsty Corp" in this story-based puzzle game.</p>
          <Link href="/games/monsty-corp/">Explore Monsty Corp →</Link>
        </div>
        <div className="card">
          <h2>SCPC</h2>
          <p>Defeat the Galactic Conquers in this epic spaceship battling game.</p>
          <Link href="/games/scpc/">Visit SCPC →</Link>
        </div>
        <div className="card">
          <h2>Table Ball Unity</h2>
          <p>The last Unity build for our game Unreal Table Ball.</p>
          <Link href="/games/table-ball/">Play Table Ball →</Link>
        </div>
        <div className="card">
          <h2>Project Jareth</h2>
          <p>Project Jareth is an unfinished VR Game.</p>
          <Link href="/games/project-jareth/">Check it out!</Link>
        </div>
      </main>
    </>
  )
}
