import React from 'react';

export default function SystemRequirements({ minimum = [], recommended = [] }){
  if ((!minimum || minimum.length===0) && (!recommended || recommended.length===0)) return null;
  return (
    <div className="system-requirements card">
      <h3>System Requirements</h3>
      <div className="req-grid" style={{display:'flex',gap:16,flexWrap:'wrap'}}>
        <div style={{flex:1}}>
          <h4>Minimum</h4>
          <ul>
            {minimum.map((m, i) => (
              <li key={i}>{m.label ? <strong>{m.label}: </strong> : null}{m.value || m}</li>
            ))}
          </ul>
        </div>
        <div style={{flex:1}}>
          <h4>Recommended</h4>
          <ul>
            {recommended.map((r, i) => (
              <li key={i}>{r.label ? <strong>{r.label}: </strong> : null}{r.value || r}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
