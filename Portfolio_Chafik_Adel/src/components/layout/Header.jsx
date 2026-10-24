/* global __BUILD_DATE__ */
import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Header.css'

// Cases du cartouche : la révision est la date du build (vite.config.js)
const cells = [
  { key: 'name',  label: 'Nom',      value: 'Adel Chafik' },
  { key: 'role',  label: 'Fonction', value: 'Ingénieur électronique' },
  { key: 'place', label: 'Lieu',     value: 'Nivelles, BE' },
  { key: 'rev',   label: 'Rév.',     value: __BUILD_DATE__ },
]

const links = [
  { to: '/',           label: 'Accueil'    },
  { to: '/about',      label: 'À propos'   },
  { to: '/experience', label: 'Expérience' },
  { to: '/projects',   label: 'Projets'    },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className={`header ${menuOpen ? 'header--menu-open' : ''}`}>
      <Link to="/" className="cartouche" aria-label="Adel Chafik, ingénieur électronique — accueil">
        {cells.map(cell => (
          <span key={cell.key} className={`cartouche__cell cartouche__cell--${cell.key}`}>
            <span className="cartouche__label">{cell.label}</span>
            <span className="cartouche__value">{cell.value}</span>
          </span>
        ))}
      </Link>

      <nav id="primary-navigation" className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="Navigation principale">
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}
            end={link.to === '/'}
          >
            {link.label}
          </NavLink>
        ))}
        <NavLink
          to="/contact"
          className={({ isActive }) => `nav__link nav__cta ${isActive ? 'nav__link--active' : ''}`}
        >
          Contact
        </NavLink>

        {/* Menu mobile : cases du cartouche masquées dans le header */}
        <dl className="nav__meta">
          {cells.filter(c => c.key === 'place' || c.key === 'rev').map(cell => (
            <div key={cell.key}>
              <dt>{cell.label}</dt>
              <dd>{cell.value}</dd>
            </div>
          ))}
        </dl>
      </nav>

      <button
        className={`burger ${menuOpen ? 'burger--open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
      >
        <span /><span /><span />
      </button>
    </header>
  )
}

export default Header
