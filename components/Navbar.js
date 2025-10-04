import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar-backdrop">
      <div className="container navbar-inner">
        <Link href="/"><a className="brand">Lockyz Media</a></Link>

        <button
          className="mobile-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          <Link href="/"><a className="btn-link">Home</a></Link>

          <div className="dropdown">
            <Link href="/games"><a className="btn-link">All Games ▾</a></Link>
            <div className="dropdown-menu" aria-hidden="true">
              <Link href="/games/monsty-corp"><a className="dropdown-link">Monsty Corp Unity</a></Link>
              <Link href="/games/table-ball"><a className="dropdown-link">Table Ball Unity</a></Link>
              <Link href="/games/scpc"><a className="dropdown-link">SCPC</a></Link>
              <Link href="/games/project-jareth"><a className="dropdown-link">Project Jareth</a></Link>
              <Link href="/games/template"><a className="dropdown-link">Template</a></Link>
            </div>
          </div>

          <Link href="/games"><a className="btn-link">Games</a></Link>
        </div>
      </div>
    </nav>
  );
}
