import { useEffect, useRef, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { projects, projectRef } from '../data/projects'
import './ProjectDetail.css'

const BASE = import.meta.env.BASE_URL

const ProjectDetail = () => {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)
  const [selected, setSelected] = useState(null) // index de la figure ouverte
  const closeRef = useRef(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    if (selected === null) return undefined

    const handleKeyDown = event => {
      if (event.key === 'Escape') setSelected(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    closeRef.current?.focus()

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
      triggerRef.current?.focus() // le focus revient à la figure ouverte
    }
  }, [selected])

  if (!project) return <Navigate to="/projects" replace />

  const ref = projectRef(project.slug)
  const imageSrc = img => `${BASE}images/projects/${project.imageFolder ?? project.slug}/${img.file}`
  const year = project.status ? `${project.year} · ${project.status}` : project.year

  const specs = [
    { param: 'Réf.', value: ref },
    { param: 'Année', value: year },
    { param: 'Domaine', value: project.type, plain: true },
    { param: 'Outils', value: project.stack.join(' · ') },
    { param: 'Étiquettes', value: project.badges.join(' · '), plain: true },
  ]

  const openFigure = (index, event) => {
    triggerRef.current = event.currentTarget
    setSelected(index)
  }

  return (
    <main className="page detail-page">
      <header className="detail-header">
        <Link to="/projects" className="detail-back">← Projets</Link>
        <p className="detail-meta">{ref} · {year} · {project.type}</p>
        <h1 className="detail-title">{project.title}</h1>
      </header>

      <div className="detail-layout">
        <aside className="detail-aside">
          <table className="specs">
            <caption>Caractéristiques</caption>
            <tbody>
              {specs.map(row => (
                <tr key={row.param}>
                  <th scope="row">{row.param}</th>
                  <td><span className={row.plain ? '' : 'specs__value'}>{row.value}</span></td>
                </tr>
              ))}
              {project.links.length > 0 && (
                <tr>
                  <th scope="row">Liens</th>
                  <td>
                    <ul className="detail-links">
                      {project.links.map(link => (
                        <li key={link.url}>
                          <a href={link.url} target="_blank" rel="noreferrer">{link.label} ↗</a>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </aside>

        <div className="detail-main">
          <section className="detail-section">
            <h2 className="detail-section__title">Description</h2>
            <div className="detail-description">
              {project.fullDescription.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>

          <section className="detail-section">
            <h2 className="detail-section__title">Points clés</h2>
            <ul className="detail-features">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </section>

          {project.images.length > 0 && (
            <section className="detail-section">
              <h2 className="detail-section__title">Figures</h2>
              <div className="detail-figures">
                {project.images.map((img, i) => (
                  <figure key={img.file} className="detail-figure">
                    <button
                      type="button"
                      className="detail-figure__button"
                      onClick={event => openFigure(i, event)}
                      aria-label={`Agrandir la figure ${i + 1} : ${img.caption}`}
                    >
                      <img src={imageSrc(img)} alt={img.caption} loading="lazy" />
                    </button>
                    <figcaption>
                      <span className="detail-figure__num">Fig. {i + 1}</span> — {img.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {selected !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Figure ${selected + 1} : ${project.images[selected].caption}`}
          onClick={() => setSelected(null)}
        >
          <button
            ref={closeRef}
            type="button"
            className="lightbox__close"
            onClick={() => setSelected(null)}
            aria-label="Fermer la figure"
          >
            ×
          </button>
          <figure className="lightbox__figure" onClick={event => event.stopPropagation()}>
            <img src={imageSrc(project.images[selected])} alt={project.images[selected].caption} />
            <figcaption>
              <span className="detail-figure__num">Fig. {selected + 1}</span> — {project.images[selected].caption}
            </figcaption>
          </figure>
        </div>
      )}
    </main>
  )
}

export default ProjectDetail
