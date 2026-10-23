import { useEffect, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { projects } from '../data/projects'
import './ProjectDetail.css'

const ProjectDetail = () => {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    if (!selectedImage) return undefined

    const handleKeyDown = event => {
      if (event.key === 'Escape') setSelectedImage(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedImage])

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
        {project.coverImage && (
          <img
            src={`${import.meta.env.BASE_URL}${project.coverImage}`}
            alt={`Illustration de ${project.title}`}
            className="detail-hero__image"
          />
        )}

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
        <section className="detail-section reveal" data-delay="0">
          <h2 className="detail-section__title">Description</h2>
          <div className="detail-description">
            {project.fullDescription.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="detail-section reveal" data-delay="100">
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
            <div className="detail-gallery" data-gallery-version="pico-pcb-1">
              {project.images.map((img, i) => (
                <figure key={i} className="detail-gallery__item">
                  <button
                    type="button"
                    className="detail-gallery__button"
                    onClick={() => setSelectedImage({
                      src: `${import.meta.env.BASE_URL}images/projects/${project.imageFolder ?? project.slug}/${img}`,
                      alt: `${project.title} — ${img}`,
                    })}
                    aria-label={`Ouvrir ${project.title} — ${img} en grand`}
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}images/projects/${project.imageFolder ?? project.slug}/${img}`}
                      alt={`${project.title} — ${img}`}
                      className="detail-gallery__img"
                    />
                  </button>
                  <figcaption>
                    {img === 'pico-profile.png' && 'Raspberry Pi Pico — profil'}
                    {img === 'pcb.jpg' && 'Routage et vue PCB'}
                    {img === 'pcb-3d.jpg' && 'Visualisation 3D du PCB'}
                    {img.startsWith('schematic-') && `Schématique — page ${i - 2}`}
                  </figcaption>
                </figure>
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
                  style={link.url.startsWith('images/') ? {
                    '--preview-image': `url(${import.meta.env.BASE_URL}${link.url})`,
                  } : undefined}
                >
                  {link.icon} {link.label}
                </a>
              ))}
            </div>
          </section>
        )}
      </div>

      {selectedImage && (
        <div
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image agrandie"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="image-lightbox__close"
            onClick={() => setSelectedImage(null)}
            aria-label="Fermer l'image agrandie"
          >
            ×
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="image-lightbox__img"
            onClick={event => event.stopPropagation()}
          />
        </div>
      )}
    </main>
  )
}

export default ProjectDetail
