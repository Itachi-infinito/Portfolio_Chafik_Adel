/* global __BUILD_DATE__ */
import './Footer.css'

// Révision = date du build (vite.config.js), comme dans le cartouche du header
const Footer = () => {
  return (
    <footer className="footer">
      Adel Chafik · adelchafik.com · Rév. {__BUILD_DATE__}
    </footer>
  )
}

export default Footer
