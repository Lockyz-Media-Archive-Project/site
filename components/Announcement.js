import React, { useEffect, useState } from 'react';
import config from '../lib/config';

export default function Announcement({ routePath }){
  const [anns, setAnns] = useState([]);
  useEffect(() => {
    let cancelled = false;
    async function load(){
      try {
        let res; try { res = await fetch(config.announcementsURL); } catch(e) { res = null; }
            if (!res || !res.ok) { try { res = await fetch('/data/announcements.json'); } catch(e) { res = null; } }
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        if (cancelled) return;
        const pageKey = routePath?.replace(/^\//,'');
        let combined = [];
        if (data.global) combined = combined.concat(data.global);
        if (data.pages && pageKey && data.pages[pageKey]) combined = combined.concat(data.pages[pageKey]);
        setAnns(combined);
      } catch (err) {
        // ignore
      }
    }
    load();
    return () => { cancelled = true; }
  }, [routePath]);

  if (!anns || anns.length === 0) return null;
  return (
    <div aria-live="polite" className="announcement-area">
      {anns.map((a, i) => (
        <div key={i} className={`announcement ${a.type || 'info'}`}>
          <div className="icon">{a.icon || (a.type==='error' ? '❌' : a.type==='warning' ? '⚠️' : 'ℹ️')}</div>
          <div className="text" dangerouslySetInnerHTML={{ __html: a.text }} />
          <button className="close" onClick={(e)=>{ e.currentTarget.closest('.announcement').style.display='none'; }} aria-label="Close">✕</button>
        </div>
      ))}
    </div>
  )
}
