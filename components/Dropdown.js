import React, { useState } from 'react';

export default function Dropdown({ title, children }){
  const [open, setOpen] = useState(false);
  return (
    <div className="dropdown-block">
      <button className="btn-link" onClick={()=>setOpen(!open)} aria-expanded={open}>
        {title} {open ? '▾' : '▸'}
      </button>
      <div className={`dropdown-content ${open ? 'open' : ''}`} style={{display: open ? 'block' : 'none', marginTop: '8px'}}>
        {children}
      </div>
    </div>
  )
}
