import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import React from 'react';

export async function getStaticProps() {
  const dataDir = path.join(process.cwd(), 'data', 'games');
  const files = fs.existsSync(dataDir) ? fs.readdirSync(dataDir).filter(f => f.endsWith('.json')) : [];
  const games = files.map(f => JSON.parse(fs.readFileSync(path.join(dataDir,f),'utf-8')));
  return { props: { games } };
}

export default function Games({ games }) {
  return (
    <main className="container">
      <h1>Games</h1>
      <p className="meta">Browse the archived games.</p>
      <div className="grid" style={{marginTop:16}}>
        {games.map(g => (
          <div key={g.slug} className="card">
            <h3>{g.title}</h3>
            <p>{g.description}</p>
            <p style={{marginTop:10}}><Link href={`/games/${g.slug}`}><a className="link-button btn-primary">View Game</a></Link></p>
          </div>
        ))}
      </div>
    </main>
  )
}
