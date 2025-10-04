import fs from 'fs';
import path from 'path';
import React from 'react';
import GamePageLayout from '../../components/GamePageLayout';
import Announcement from '../../components/Announcement';

export async function getStaticPaths() {
  const dataDir = path.join(process.cwd(), 'data', 'games');
  const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));
  const paths = files.map(f => ({ params: { slug: f.replace('.json', '') } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const dataPath = path.join(process.cwd(), 'data', 'games', `${params.slug}.json`);
  const raw = fs.readFileSync(dataPath, 'utf-8');
  const game = JSON.parse(raw);
  return { props: { game } };
}

export default function Page({ game }) {
  return (
    <div>
      <Announcement routePath={`/games/${game.slug}`} />
      <GamePageLayout game={game} />
    </div>
  )
}
