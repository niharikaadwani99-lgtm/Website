import { Link } from 'react-router-dom'
import './Nav.css'

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#id', label: 'About' },
  { href: '#wrapped', label: 'Wrapped' },
  { href: '#contact', label: 'Contact' },
]

function Nav() {
  return (
    <header className="nav">
      <div className="nav__inner wrap">
        <a href="#top" className="nav__logo">
          <span className="star">✸</span> gabbtopia
        </a>
        <nav className="nav__links">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <Link to="/planner">Planner</Link>
        </nav>
        <a href="#contact" className="nav__cta">
          Say hi →
        </a>
      </div>
    </header>
  )
}

export default Nav
