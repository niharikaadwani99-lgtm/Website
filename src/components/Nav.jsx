import { Link, useLocation } from 'react-router-dom'
import './Nav.css'

const LINKS = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/process', label: 'Process' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/work-with-me', label: 'Work with me' },
]

function Nav() {
  const location = useLocation()

  return (
    <header className="site-nav">
      <div className="site-nav__inner wrap">
        <Link to="/" className="site-nav__home">
          the desk
        </Link>
        <nav className="site-nav__tabs">
          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`site-nav__tab${location.pathname === link.to ? ' is-active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Nav
