import React from 'react';
import Link from 'next/link';

export default function Navbar(){ 
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link href="/"><a className="brand">Lockyz Media Archive</a></Link>
        <nav className="main-nav">
          <Link href="/"><a>Home</a></Link>
          <Link href="/games"><a>Games</a></Link>
          <Link href="/about"><a>About</a></Link>
          <a href="https://discord.gg" target="_blank" rel="noopener noreferrer">Discord</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <Link href="/admin"><a className="link-button btn-outline">Admin</a></Link>
        </nav>
      </div>
    </header>
  );
}
