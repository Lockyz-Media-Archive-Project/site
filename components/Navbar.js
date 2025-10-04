import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link href="/" className="font-bold text-lg">Lockyz Media</Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded hover:bg-gray-100"
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        <div className={`flex-col md:flex md:flex-row gap-3 md:gap-6 ${open ? 'flex' : 'hidden'} md:flex`}>
          <Link href="/" className="btn-link">Home</Link>

          <div className="relative group">
            <button className="btn-link">All Games ▾</button>
            <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-2 w-56 p-2">
              <li><Link href="/games/project-jareth" className="dropdown-link">Project Jareth</Link></li>
              <li><Link href="/games/table-ball" className="dropdown-link">Table Ball</Link></li>
              <li><Link href="/games/template" className="dropdown-link">Template</Link></li>
            </ul>
          </div>

          <Link href="/about" className="btn-link">About</Link>
        </div>
      </div>
    </nav>
  );
}
