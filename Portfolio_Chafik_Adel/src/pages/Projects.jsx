import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import './Projects.css'

const Projects = () => {
  return (
    <main className="projects-page">
      <section className="projects-header">
        <p className="section-label">Réalisations</p>
        <h1 className="section-title">Mes <span>projets</span></h1>
        <div className="divider" />
      </section>

      <section className="projects-section">
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
            >
              {/* Thumb */}
              <div className={`project-card__thumb ${project.featured ? 'project-card__thumb--featured' : ''}`}>
                <span className="project-card__emoji">{project.emoji}</span>
                <div className="project-card__badges-top">
                  {project.badges.map((b, j) => (
                    <span key={j} className="badge-top">{b}</span>
                  ))}
                </div>
              </div>

              {/* Body */}
              <div className="project-card__body">
                <p className="project-card__type">{project.type}</p>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>

                {/* Stack */}
                <div className="project-card__stack">
                  {project.stack.map((s, j) => (
                    <span key={j} className="stack-badge">{s}</span>
                  ))}
                </div>

                {/* Footer links */}
                <div className="project-card__footer">
                  {project.links.length > 0 && (
                    <div className="project-card__links">
                      {project.links.map((link, j) => (
                        <a
                          key={j}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link"
                        >
                          {link.icon} {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                  <Link to={`/projects/${project.slug}`} className="project-detail-link">
                    Voir le projet →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Projects
