import React from 'react';

export default function FunFacts({ items }){
  if (!items || items.length === 0) return null;
  return (
    <div className="fun-facts card">
      <h3>Fun Facts</h3>
      <ul>
        {items.map((it, idx) => <li key={idx}>{it}</li>)}
      </ul>
    </div>
  )
}
