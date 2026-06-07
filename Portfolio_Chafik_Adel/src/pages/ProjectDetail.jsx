import { useParams, Link, Navigate } from 'react-router-dom'
import { projects } from '../data/projects'
import './ProjectDetail.css'

const ProjectDetail = () => {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) return <Navigate to="/projects" replace />

  return (
    <main className="detail-page">
      {/* Back */}
      <div className="detail-back">
        <Link to="/projects" className="back-link">
          ← Retour aux projets
        </Link>
      </div>

      {/* Hero */}
      <section className="detail-hero">
        <div className="detail-hero__orb detail-hero__orb--1" />
        <div className="detail-hero__orb detail-hero__orb--2" />

        <div className="detail-hero__content">
          <span className="detail-emoji">{project.emoji}</span>
          <div className="detail-meta">
            <p className="detail-type">{project.type}</p>
            <h1 className="detail-title">{project.title}</h1>
          </div>
        </div>

        <div className="detail-badges">
          {project.badges.map((b, i) => (
            <span key={i} className="badge-top">{b}</span>
          ))}
        </div>

        <div className="detail-stack">
          {project.stack.map((s, i) => (
            <span key={i} className="stack-badge">{s}</span>
          ))}
        </div>
      </section>

      <div className="detail-body">
        {/* Description */}
        <section className="detail-section">
          <h2 className="detail-section__title">Description</h2>
          <div className="detail-description">
            {project.fullDescription.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="detail-section">
          <h2 className="detail-section__title">Fonctionnalités clés</h2>
          <ul className="detail-features">
            {project.features.map((f, i) => (
              <li key={i} className="detail-feature">
                <span className="detail-feature__dot" />
                {f}
              </li>
            ))}
          </ul>
        </section>

        {/* Images */}
        {project.images.length > 0 ? (
          <section className="detail-section">
            <h2 className="detail-section__title">Galerie</h2>
            <div className="detail-gallery">
              {project.images.map((img, i) => (
                <img
                  key={i}
                  src={`${import.meta.env.BASE_URL}images/projects/${project.slug}/${img}`}
                  alt={`${project.title} — ${i + 1}`}
                  className="detail-gallery__img"
                />
              ))}
            </div>
          </section>
        ) : (
          <section className="detail-section">
            <h2 className="detail-section__title">Galerie</h2>
            <div className="detail-gallery-placeholder">
              <span>{project.emoji}</span>
              <p>Images du projet à venir</p>
            </div>
          </section>
        )}

        {/* Links */}
        {project.links.length > 0 && (
          <section className="detail-section">
            <h2 className="detail-section__title">Liens</h2>
            <div className="detail-links">
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`detail-link-btn ${link.url === '#' ? 'detail-link-btn--disabled' : ''}`}
                >
                  {link.icon} {link.label}
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}

export default ProjectDetail
