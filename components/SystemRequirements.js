import React from 'react';

export default function SystemRequirements({ minimum, recommended }){
  return (
    <div className="system-requirements card">
      <h3>System Requirements</h3>
      <div className="req-grid">
        <div>
          <h4>Minimum</h4>
          <ul>
            {minimum && Object.entries(minimum).map(([k,v])=> <li key={k}><strong>{k}:</strong> {v}</li>)}
          </ul>
        </div>
        <div>
          <h4>Recommended</h4>
          <ul>
            {recommended && Object.entries(recommended).map(([k,v])=> <li key={k}><strong>{k}:</strong> {v}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}
