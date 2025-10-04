import Link from 'next/link';

const GAMES = [
  { slug: 'monsty-corp', title: 'Monsty Corp Unity' },
  { slug: 'scpc', title: 'SCPC' },
  { slug: 'table-ball', title: 'Table Ball Unity' },
  { slug: 'project-jareth', title: 'Project Jareth' },
  { slug: 'template', title: 'Template' },
];

export default function GamesIndex() {
  return (
    <div>
      <h1 className="page-title">All Games</h1>
      <p className="lead text-muted">Browse all archived projects.</p>

      <section className="grid cards" aria-label="All games">
        {GAMES.map(g => (
          <article className="card" key={g.slug}>
            <h2 className="card-title">{g.title}</h2>
            <p className="card-desc">Archived project page for {g.title}.</p>
            <p><Link href={`/games/${g.slug}`}><a className="btn-primary">Open →</a></Link></p>
          </article>
        ))}
      </section>
    </div>
  );
}
