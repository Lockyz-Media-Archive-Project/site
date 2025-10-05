import React, { useState } from 'react';

export default function Dropdown({ title, children }){
  const [open, setOpen] = useState(false);
  return (
    <div className="dropdown-block">
      <button className="link-button btn-outline" onClick={()=>setOpen(!open)} aria-expanded={open}>
        {title} {open ? '▾' : '▸'}
      </button>
      <div className={`dropdown-content ${open ? 'open' : ''}`} style={{display: open ? 'block' : 'none', marginTop:8}}>
        {children}
      </div>
    </div>
  )
}
