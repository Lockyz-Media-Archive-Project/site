import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import React from 'react';

export async function getStaticProps() {
  const dataDir = path.join(process.cwd(), 'data', 'games');
  const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));
  const games = files.map(f => {
    const raw = fs.readFileSync(path.join(dataDir, f), 'utf-8');
    return JSON.parse(raw);
  });
  return { props: { games } };
}

export default function Index({ games }) {
  return (
    <main className="container">
      <h1>Lockyz Media Archive</h1>
      <p className="meta">Preserving our history — archived projects and playable builds.</p>

      <div className="grid">
        {games.map(g => (
          <div key={g.slug} className="card">
            <h2>{g.title}</h2>
            <p>{g.description}</p>
            <p><Link href={`/games/${g.slug}`}><a className="link-button btn-primary">Open Page →</a></Link></p>
          </div>
        ))}
      </div>
    </main>
  )
}
