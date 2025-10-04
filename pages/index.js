import Link from 'next/link';

export default function Home() {
  const games = [
    { title: 'Monsty Corp Unity', desc: 'Explore the facility known as "Monsty Corp" in this story-based puzzle game.', link: '/games/monsty-corp' },
    { title: 'SCPC', desc: 'Defeat the Galactic Conquers in this epic spaceship battling game.', link: '/games/scpc' },
    { title: 'Table Ball Unity', desc: 'The last Unity build for our game Unreal Table Ball.', link: '/games/table-ball' },
    { title: 'Project Jareth', desc: 'Project Jareth is an unfinished VR Game.', link: '/games/project-jareth' },
  ];

  return (
    <div>
      <h1 className="page-title">Lockyz Media Archive</h1>
      <p className="lead text-muted">Preserving our history — abandoned projects, prototypes, and last builds.</p>

      <section className="grid cards" aria-label="Featured games">
        {games.map(g => (
          <article className="card" key={g.title}>
            <h2 className="card-title">{g.title}</h2>
            <p className="card-desc">{g.desc}</p>
            <p><Link href={g.link}><a className="btn-primary">Explore →</a></Link></p>
          </article>
        ))}
      </section>
    </div>
  );
}
