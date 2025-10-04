import React from 'react';

export default function ExternalLinks({ links }){
  if (!links || links.length === 0) return null;
  return (
    <div className="external-links card">
      <h3>External Links</h3>
      <div className="links">
        {links.map((l, i) => (
          <a key={i} className="btn-link" href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a>
        ))}
      </div>
    </div>
  )
}
