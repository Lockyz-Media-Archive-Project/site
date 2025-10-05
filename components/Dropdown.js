import React from 'react';

export default function Dropdown({ title, children }){
  return (
    <details className="dropdown-block" style={{marginTop:8}}>
      <summary className="link-button btn-outline" style={{cursor:'pointer'}}>{title}</summary>
      <div className="dropdown-content" style={{marginTop:8}}>
        {children}
      </div>
    </details>
  )
}
