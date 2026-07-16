import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <p className="hand">stitched together at a desk in the studio, 2026</p>
        <Link to="/">back to the desk ↑</Link>
      </div>
    </footer>
  )
}

export default Footer
