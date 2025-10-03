import Link from 'next/link'
import games from '../../data/games.json'
import ScreenshotGallery from '../../components/ScreenshotGallery'
import Head from 'next/head'
import Layout from '../../components/Layout'

export default function TableBall(){
	const game = games.find(g => g.slug === 'table-ball')

	return (
		<Layout>
			<Head>
				<title>{game.title} — Lockyz Media Archive</title>
				<meta name="description" content={`Archived project: ${game.title}`} />
			</Head>

			<div className="container">
				<header>
					<h1>{game.title}</h1>
					<p className="description">Table Ball FUnity by Lockyz Media is the ultimate virtual arcade game! Compete against friends or the computer in exciting matches of top-down Ping Pong.</p>
				</header>

				<section>
					<p>Table Ball FUnity is an archived version of Table Ball created in the Unity Engine. This game however is being remade in Unreal Engine and will be made available as a separate download on itch, and as an update on Steam!</p>
				</section>

				<ScreenshotGallery images={game.screenshots} />

				<section className="features">
					<h2>Features</h2>
					<ul>
						<li>Customization System</li>
						<li>Multiple Game Modes</li>
					</ul>
				</section>

				<section className="long-description">
					<h2>About This Game</h2>
					<p>Introducing Table Ball FUnity, the ultimate virtual arcade game created by Lockyz Media!</p>
					<p>In this game, you'll compete against your friends or the computer in exciting matches that will keep you on the edge of your seat.</p>
				</section>

				<section>
					<h2>Other Information</h2>
					<p>Version: 2.4.0.0</p>
					<p>Developer: Robin²</p>
					<p>Genre: Strategy</p>
					<p>Tags: Indie, Multiplayer, Retro, Singleplayer</p>
					<p>Platform: Windows</p>
					<p>Status: Cancelled</p>
				</section>

				<section className="links">
					<Link href="/">← Back to Archive</Link>
					<a href="https://tableball.lockyzdev.net" target="_blank" rel="noreferrer">Official Site</a>
					<a href="https://github.com/Lockyz-Media-Archive-Project/Table-Ball-Unity" target="_blank" rel="noreferrer">Source Code</a>
					<a href="https://store.steampowered.com/app/2094090/Table_Ball/" target="_blank" rel="noreferrer">Steam</a>
				</section>
			</div>
		</Layout>
	)
}
