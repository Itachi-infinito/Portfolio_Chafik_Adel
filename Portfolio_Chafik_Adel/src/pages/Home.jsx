import { Link } from 'react-router-dom'
import { projects, PCB_SLUGS } from '../data/projects'
import './Home.css'

const BASE = import.meta.env.BASE_URL

// Projets qui comportent une carte PCB conçue (titres lus dans projects.js)
const pcbProjects = projects.filter(p => PCB_SLUGS.includes(p.slug))

const specs = [
  { param: 'Projets documentés', value: String(projects.length) },
  {
    param: 'Cartes PCB conçues',
    value: String(pcbProjects.length),
    detail: pcbProjects.map(p => p.title).join(' · '),
  },
  { param: 'Empilage max.', value: '4 couches', detail: 'ESP32 IoT, Raspberry Pi Pico IoT' },
  { param: 'Outils CAO', value: 'Altium Designer · KiCad' },
  // Traits d'union insécables (U+2011) : « LTE-M » et « Wi-Fi » ne se coupent pas
  { param: 'Radio / IoT', value: 'LoRaWAN · LTE‑M · GNSS · Wi‑Fi/Bluetooth · RS485' },
  { param: 'Formation', value: 'Master ingénieur industriel en électronique', detail: 'ECAM Brussels, 2025' },
  { param: 'Langues', value: 'Français · anglais' },
]

const Home = () => {
  return (
    <main className="page home">
      <section className="home-hero">
        <div className="home-hero__text">
          <h1 className="home-hero__name">Adel Chafik</h1>
          <p className="home-hero__lead">
            Ingénieur électronique spécialisé en systèmes embarqués et en conception de cartes.
          </p>

          <div className="home-hero__actions">
            <Link to="/projects" className="btn btn--primary">Voir les projets</Link>
            <Link to="/contact" className="btn btn--ghost">Me contacter</Link>
          </div>

          <ul className="home-hero__links">
            <li>
              <a href={`${BASE}CV_Adel_Chafik.pdf`} download="CV_Adel_Chafik.pdf">CV (PDF) ↓</a>
            </li>
            <li>
              <a href="https://github.com/Itachi-infinito" target="_blank" rel="noreferrer">GitHub ↗</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/adel-chafik-b47834215/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="home-specs" aria-labelledby="home-specs-title">
        <table className="specs">
          <caption id="home-specs-title">Caractéristiques</caption>
          <thead>
            <tr>
              <th scope="col">Paramètre</th>
              <th scope="col">Valeur</th>
            </tr>
          </thead>
          <tbody>
            {specs.map(row => (
              <tr key={row.param}>
                <th scope="row">{row.param}</th>
                <td>
                  <span className="specs__value">{row.value}</span>
                  {row.detail && <span className="specs__detail">{row.detail}</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  )
}

export default Home
