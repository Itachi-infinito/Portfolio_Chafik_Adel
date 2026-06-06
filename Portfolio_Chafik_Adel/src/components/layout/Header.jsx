import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Ferme le menu mobile à chaque changement de page
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  // Détecte le scroll pour changer le style du header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/',           label: 'Accueil'    },
    { to: '/about',      label: 'À propos'   },
    { to: '/experience', label: 'Expérience' },
    { to: '/projects',   label: 'Projets'    },
  ]

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <NavLink to="/" className="logo">AC.</NavLink>

      {/* Navigation desktop */}
      <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
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
        <NavLink to="/contact" className="nav__cta">
          Contact
        </NavLink>
      </nav>

      {/* Burger mobile */}
      <button
        className={`burger ${menuOpen ? 'burger--open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>
    </header>
  )
}

export default Header