import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
	return (
		<Layout title="Lockyz Media Archive — Home">
			<Head>
				<meta name="description" content="Lockyz Media Archive — preserving abandoned projects and game builds." />
			</Head>

			<main>
				<section className="hero container" aria-labelledby="hero-title">
					<h1 id="hero-title">Lockyz Media Archive</h1>
					<p className="description">Preserving abandoned builds, prototypes and older game versions so they aren't lost to time.</p>
					<p>
						Browse the archive to find playable builds, screenshots and developer notes that document the history of our projects.
					</p>
				</section>

				<section className="container" aria-labelledby="featured-title">
					<h2 id="featured-title">Featured Projects</h2>
					<div className="card-grid" role="list">
						<div role="listitem" className="card">
							<h3>Monsty Corp Unity</h3>
							<p>Explore the facility known as "Monsty Corp" in this story-based puzzle game.</p>
							<Link href="/games/monsty-corp/"><a>Explore Monsty Corp →</a></Link>
						</div>
						<div role="listitem" className="card">
							<h3>SCPC</h3>
							<p>Defeat the Galactic Conquers in this epic spaceship battling game.</p>
							<Link href="/games/scpc/"><a>Visit SCPC →</a></Link>
						</div>
						<div role="listitem" className="card">
							<h3>Table Ball Unity</h3>
							<p>The last Unity build for our game Unreal Table Ball.</p>
							<Link href="/games/table-ball/"><a>Play Table Ball →</a></Link>
						</div>
						<div role="listitem" className="card">
							<h3>Project Jareth</h3>
							<p>Project Jareth is an unfinished VR Game.</p>
							<Link href="/games/project-jareth/"><a>Check it out →</a></Link>
						</div>
					</div>
				</section>

				<section className="container" aria-labelledby="updates-title">
					<h2 id="updates-title">Latest updates</h2>
					<ul>
						<li>2025-08-01 — Added Table Ball Unity archive and source links.</li>
						<li>2025-07-12 — Project Jareth VR build added (experimental).</li>
					</ul>
				</section>
			</main>
		</Layout>
	)
}