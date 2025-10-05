import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import React from 'react';

export async function getStaticProps() {
  const dataDir = path.join(process.cwd(), 'data', 'games');
  const files = fs.existsSync(dataDir) ? fs.readdirSync(dataDir).filter(f => f.endsWith('.json')) : [];
  const games = files.map(f => JSON.parse(fs.readFileSync(path.join(dataDir,f),'utf-8')));
  const siteInfoPath = path.join(process.cwd(), 'data', 'siteInfo.json');
  const siteInfo = fs.existsSync(siteInfoPath) ? JSON.parse(fs.readFileSync(siteInfoPath,'utf-8')) : {};
  const featured = games.filter(g => g.featured).slice(0, siteInfo.featuredCount || 4);
  return { props: { siteInfo, featured } };
}

export default function Home({ siteInfo, featured }) {
  return (
    <main>
      <section className="container hero" style={{marginTop:16}}>
        <h1 style={{fontSize: '1.8rem'}}>{siteInfo.siteName}</h1>
        <p className="meta">{siteInfo.tagline}</p>
        <div style={{marginTop:12}}>
          <Link href={siteInfo.heroCTA?.href || '/games'}><a className="link-button btn-primary">{siteInfo.heroCTA?.label || 'View Games'}</a></Link>
          <Link href="/about"><a className="link-button" style={{marginLeft:8}}>About</a></Link>
        </div>
      </section>

      <section className="container" style={{marginTop:20}}>
        <h2>Featured Games</h2>
        <div className="grid" style={{marginTop:12}}>
          {featured.map(g => (
            <div key={g.slug} className="card">
              <h3>{g.title}</h3>
              <p>{g.description}</p>
              <p style={{marginTop:10}}><Link href={`/games/${g.slug}`}><a className="link-button btn-primary">Open</a></Link></p>
            </div>
          ))}
        </div>
      </section>

      <section className="container" style={{marginTop:20}}>
        <h2>About the Archive</h2>
        <div className="card">
          <p>{siteInfo.mission}</p>
          <p style={{marginTop:8}}><Link href="/about"><a className="link-button">Learn more</a></Link></p>
        </div>
      </section>

      <section className="container" style={{marginTop:20}}>
        <h2>Latest Announcements</h2>
        <div id="announcements-placeholder" className="card">
          <p className="meta">Announcements will show here if any are configured.</p>
        </div>
      </section>

      <section className="container" style={{marginTop:20}}>
        <h2>News & Updates</h2>
        <div className="card">
          <p className="meta">This section will be available for longer-form updates in future.</p>
        </div>
      </section>
    </main>
  )
}
