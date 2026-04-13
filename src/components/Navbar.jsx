import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#" className="brand">
          Workshop<span>Portal</span>
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#workshops">Workshops</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
          <button className="nav-cta">Book Now</button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar