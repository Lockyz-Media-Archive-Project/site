import React from 'react';
import Link from 'next/link';

export default function Navbar(){
  return (
    <header className="site-header">
      <div className="container nav-inner" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <Link href="/"><a className="brand">Lockyz Media Archive</a></Link>
        </div>

        <nav className="main-nav" role="navigation" aria-label="Main navigation" style={{display:'flex',gap:10,alignItems:'center'}}>
          <Link href="/"><a className="nav-link">Home</a></Link>
          <Link href="/games"><a className="nav-link">Games</a></Link>
          <Link href="/about"><a className="nav-link">About</a></Link>
          <Link href="/admin"><a className="link-button btn-outline">Admin</a></Link>
        </nav>
      </div>
    </header>
  );
}
