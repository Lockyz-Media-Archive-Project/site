import React, { useState, useEffect } from 'react';
import config from '../lib/config';
import Link from 'next/link';

function downloadJSON(filename, obj) {
  const blob = new Blob([JSON.stringify(obj, null, 2)], {type: 'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
}

export default function Admin(){
  const [auth, setAuth] = useState(false);
  const [password, setPassword] = useState('');
  const [announcements, setAnnouncements] = useState([]);
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(()=>{
    fetch('/data/announcements.json').then(r=>r.json()).then(setAnnouncements).catch(()=>{});
    fetch('/api/games-list').then(r=>r.json()).then(setGames).catch(async ()=>{
      const resp = await fetch('/data/games/monsty-corp.json').catch(()=>null);
      const list = [];
      if (resp && resp.ok) list.push(await resp.json());
      setGames(list);
    });
    const s = sessionStorage.getItem('admin-auth');
    if (s === 'true') setAuth(true);
  },[]);

  function tryLogin(e){
    e.preventDefault();
    if (password === config.adminPassword){
      setAuth(true); sessionStorage.setItem('admin-auth','true');
    } else {
      alert('Incorrect password');
    }
  }

  function editGame(g){
    setSelectedGame(JSON.parse(JSON.stringify(g)));
  }

  function saveSelectedGame(){
    if (!selectedGame) return;
    downloadJSON(selectedGame.slug + '.json', selectedGame);
    alert('Downloaded updated JSON for manual upload. To integrate, place the file into data/games/ and rebuild.');
  }

  function saveAnnouncements(){
    downloadJSON('announcements.json', announcements);
    alert('Downloaded announcements.json for manual upload to public/data/ or to your CDN.');
  }

  if (!auth) {
    return (
      <main className="container">
        <h1>Admin Login</h1>
        <form onSubmit={tryLogin} className="card" style={{maxWidth:420}}>
          <label>Password</label>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} style={{width:'100%',padding:8,marginTop:6}} />
          <div style={{marginTop:10}}><button className="link-button btn-primary" type="submit">Unlock</button></div>
        </form>
      </main>
    )
  }

  return (
    <main className="container">
      <h1>Admin Panel</h1>
      <div className="card">
        <h2>Announcements</h2>
        <p>Modify and download the announcements JSON.</p>
        <textarea value={JSON.stringify(announcements,null,2)} onChange={e=>{ try{ setAnnouncements(JSON.parse(e.target.value)) } catch{} }} style={{width:'100%',minHeight:120}} />
        <div style={{marginTop:8}}><button className="link-button btn-primary" onClick={saveAnnouncements}>Download announcements.json</button></div>
      </div>

      <div className="card" style={{marginTop:12}}>
        <h2>Games</h2>
        <p>Select a game to edit or download its JSON.</p>
        <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
          {games.map(g=> (
            <div key={g.slug} style={{minWidth:200}} className="card">
              <h3>{g.title}</h3>
              <p className="meta">{g.description?.slice(0,120)}</p>
              <div style={{marginTop:8}}>
                <button className="link-button" onClick={()=>editGame(g)}>Edit</button>
                <a className="link-button" style={{marginLeft:8}} href={`/data/games/${g.slug}.json`} target="_blank" rel="noopener noreferrer">Open JSON</a>
              </div>
            </div>
          ))}
        </div>

        {selectedGame && (
          <div className="card" style={{marginTop:12}}>
            <h3>Editing: {selectedGame.title}</h3>
            <label>Title</label>
            <input value={selectedGame.title} onChange={e=>setSelectedGame({...selectedGame,title:e.target.value})} style={{width:'100%',padding:6}} />
            <label style={{marginTop:8}}>Description</label>
            <textarea value={selectedGame.description} onChange={e=>setSelectedGame({...selectedGame,description:e.target.value})} style={{width:'100%',minHeight:80}} />
            <div style={{marginTop:8}}>
              <button className="link-button btn-primary" onClick={saveSelectedGame}>Download JSON</button>
              <button className="link-button" style={{marginLeft:8}} onClick={()=>setSelectedGame(null)}>Close</button>
            </div>
          </div>
        )}
      </div>

      <div style={{marginTop:12}} className="card">
        <h2>Utilities</h2>
        <p>Quick links:</p>
        <div style={{display:'flex',gap:8}}>
          <Link href="/"><a className="link-button">View Site</a></Link>
          <Link href="/games"><a className="link-button">Games</a></Link>
        </div>
      </div>
    </main>
  )
}
