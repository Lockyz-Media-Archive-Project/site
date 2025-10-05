import React, { useEffect, useState } from 'react';
import config from '../lib/config';
import { useRouter } from 'next/router';

export default function Announcement(){ 
  const [anns, setAnns] = useState([]);
  const router = useRouter();
  useEffect(()=>{
    let cancelled = false;
    async function load(){
      let data = null;
      try {
        const res = await fetch(config.announcementsURL);
        if (res.ok) data = await res.json();
      } catch(e){ /* ignore */ }
      if (!data) {
        try {
          const res2 = await fetch('/data/announcements.json');
          if (res2.ok) data = await res2.json();
        } catch(e){}
      }
      if (!data) return;
      // data can be array or object; standardize to array
      const arr = Array.isArray(data) ? data : (data.announcements || []);
      // filter by pages
      const path = router.asPath || '/';
      const applicable = arr.filter(a => {
        if (!a.pages || a.pages.length===0) return true;
        if (a.pages.includes('*')) return true;
        return a.pages.includes(path);
      });
      if (!cancelled) setAnns(applicable);
    }
    load();
    return ()=>{ cancelled = true; }
  }, [router.asPath]);

  if (!anns || anns.length===0) return null;
  return (
    <div className="announcement-stack" aria-live="polite">
      {anns.map(a => (
        <div key={a.id || Math.random()} className={`announcement ${a.type || 'info'}`}>
          <div className="icon">{a.icon || (a.type==='error' ? '❌' : a.type==='warning' ? '⚠️' : 'ℹ️')}</div>
          <div className="text">{a.message}</div>
        </div>
      ))}
    </div>
  )
}
