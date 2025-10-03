export default function Footer() {
	return (
		<footer className="footer" role="contentinfo">
			<div className="footer-container">
				<p>© {new Date().getFullYear()} Lockyz Media. All rights reserved.</p>
				<nav className="footer-nav" aria-label="Footer links">
					<a href="https://discord.gg/NgpN3YYbMM" target="_blank" rel="noreferrer">Discord</a>
					<a href="https://github.com/Lockyz-Media-Archive-Project" target="_blank" rel="noreferrer">GitHub</a>
					<a href="mailto:lockyzmedia@gmail.com">Email</a>
				</nav>
			</div>
		</footer>
	)
}
