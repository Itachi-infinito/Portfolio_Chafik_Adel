import { Link } from 'react-router-dom'
import { orderedProjects, projectRef, PCB_SLUGS } from '../data/projects'
import './Projects.css'

const BASE = import.meta.env.BASE_URL

const groups = [
  { id: 'pcb', title: 'Cartes PCB', items: orderedProjects.filter(p => PCB_SLUGS.includes(p.slug)), thumbs: true },
  { id: 'autres', title: 'Autres projets', items: orderedProjects.filter(p => !PCB_SLUGS.includes(p.slug)), thumbs: false },
]

const Projects = () => {
  return (
    <main className="page projects-page">
      <section className="projects-header">
        <p className="section-label">Réalisations</p>
        <h1 className="section-title">Projets</h1>
        <div className="divider" />
      </section>

      <section className="projects-section">
        {groups.map(group => (
          <table key={group.id} className={`projects-index ${group.thumbs ? 'projects-index--thumbs' : ''}`}>
            <caption>{group.title} <span className="projects-index__count">({group.items.length})</span></caption>
            <thead>
              <tr>
                <th scope="col">Réf.</th>
                <th scope="col">Projet</th>
                <th scope="col">Domaine</th>
                <th scope="col">Outils</th>
                <th scope="col">Année</th>
              </tr>
            </thead>
            <tbody>
              {group.items.map(project => (
                <tr key={project.slug}>
                  <td className="projects-index__ref">{projectRef(project.slug)}</td>
                  <th scope="row" className="projects-index__project">
                    <div className="projects-index__head">
                      {group.thumbs && project.coverImage && (
                        <img
                          className="projects-index__thumb"
                          src={`${BASE}${project.coverImage}`}
                          alt=""
                          width="128"
                          height="86"
                          loading="lazy"
                        />
                      )}
                      <Link to={`/projects/${project.slug}`} className="projects-index__title">
                        {project.title}
                      </Link>
                    </div>
                  </th>
                  <td className="projects-index__type">{project.type}</td>
                  <td className="projects-index__stack">{project.stack.join(' · ')}</td>
                  <td className="projects-index__year">
                    {project.year}
                    {project.status && <span className="projects-index__status">{project.status}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </section>
    </main>
  )
}

export default Projects
