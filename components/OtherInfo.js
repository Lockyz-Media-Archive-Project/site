import React from 'react';
import Link from 'next/link';

export default function OtherInfo({ links, notes }){
  return (
    <div className="other-info card">
      <h3>Other Information</h3>
      {links && links.length>0 && (
        <ul>
          {links.map((l, i) => (
            <li key={i}>{l.href && l.href.startsWith('/') ? <Link href={l.href}><a className="link-button">{l.label}</a></Link> : <a className="link-button" href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>}</li>
          ))}
        </ul>
      )}
      {notes && notes.length>0 && (
        <div className="notes">
          {notes.map((n, i) => <p key={i}>{n}</p>)}
        </div>
      )}
    </div>
  )
}
