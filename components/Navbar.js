import React from 'react';
import Link from 'next/link';

export default function Navbar(){ 
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link href="/"><a className="brand">Lockyz Media Archive</a></Link>
        <nav className="main-nav">
          <Link href="/"><a>Home</a></Link>
          <div className="dropdown">
            <button className="dropbtn" aria-haspopup="true" aria-expanded="false">All Games ▾</button>
            <ul className="dropdown-menu" role="menu">
              <li><Link href="/games/monsty-corp"><a>Monsty Corp Unity</a></Link></li>
              <li><Link href="/games/table-ball"><a>Table Ball Unity</a></Link></li>
              <li><Link href="/games/scpc"><a>SCPC</a></Link></li>
              <li><Link href="/games/project-jareth"><a>Project Jareth</a></Link></li>
            </ul>
          </div>
          <a href="https://discord.gg" target="_blank" rel="noopener noreferrer">Discord</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
      </div>
    </header>
  );
}
