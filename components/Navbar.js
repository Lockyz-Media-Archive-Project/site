import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="site-title">
          <Link href="/">Lockyz Media Archive</Link>
        </div>

        <button className="mobile-menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation">☰</button>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          <li><Link href="/">Home</Link></li>
          <li className="dropdown">
            <Link href="/games" className="dropbtn">All Games ▾</Link>
            <ul className="dropdown-content" id="gameDropdown">
              <li><Link href="/games/monsty-corp">Monsty Corp Unity</Link></li>
              <li><Link href="/games/table-ball">Table Ball Unity</Link></li>
              <li><Link href="/games/scpc">SCPC</Link></li>
              <li><Link href="/games/project-jareth">Project Jareth</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}
