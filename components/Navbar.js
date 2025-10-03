import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        <div className="site-title">
          <Link href="/"><a>Lockyz Media Archive</a></Link>
        </div>

        <button className="mobile-menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation">☰</button>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          <li><Link href="/"><a>Home</a></Link></li>
          <li className="dropdown">
            <Link href="/games"><a className="dropbtn">All Games ▾</a></Link>
            <ul className="dropdown-content" id="gameDropdown">
              <li><Link href="/games/monsty-corp"><a>Monsty Corp Unity</a></Link></li>
              <li><Link href="/games/table-ball"><a>Table Ball Unity</a></Link></li>
              <li><Link href="/games/scpc"><a>SCPC</a></Link></li>
              <li><Link href="/games/project-jareth"><a>Project Jareth</a></Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}
