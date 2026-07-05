import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <p>
          <span className="star">✸</span> made by gabbtopia &middot; 2026
        </p>
        <Link to="/planner">open the planner ✎</Link>
        <a href="#top">back to top ↑</a>
      </div>
    </footer>
  )
}

export default Footer
