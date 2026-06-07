import './Experience.css'

const experiences = [
  {
    period: "2025 — Présent",
    role: "Ingénieur en Développement",
    company: "DVC",
    location: "Belgique",
    type: "CDI",
    color: "#06d6a0",
    missions: [
      "Réparation et diagnostic de cartes électroniques industrielles",
      "Conception de cartes électroniques PCB",
      "Développement software embarqué et applicatif",
      "Projets pour clients industriels majeurs : IBA, Infrabel et autres",
    ]
  },
  {
    period: "janv. 2025 — juin 2025",
    role: "Stagiaire Ingénieur Hardware",
    company: "Thales Alenia Space",
    location: "Belgique",
    type: "Stage",
    color: "#5b4ef8",
    missions: [
      "Stage dans le domaine spatial — projet confidentiel",
      "Conception et développement hardware dans un environnement industriel exigeant",
      "Travail en équipe sur des systèmes embarqués à haute fiabilité",
    ]
  },
  {
    period: "janv. 2025 — févr. 2025",
    role: "Stagiaire Ingénieur Hardware",
    company: "CISSOID",
    location: "Louvain-La-Neuve",
    type: "Stage",
    color: "#8b5cf6",
    missions: [
      "Développement de plans de test pour composants MOSFETs haute performance",
      "Conception et amélioration d'un PCB sous Altium Designer",
      "Validation expérimentale de composants électroniques",
    ]
  },
]

const academics = [
  {
    title: "Projet de robot mobile autonome",
    school: "ECAM Brussels Engineering School",
    missions: [
      "Coordination technique d'une équipe pluridisciplinaire",
      "Répartition des tâches : électronique, programmation, intégration système",
      "Mise en place d'une régulation PID et sécurité embarquée",
      "Présentation des résultats devant jury",
    ]
  },
  {
    title: "Conception d'un convertisseur Buck-Boost inversé",
    school: "Projet académique",
    missions: [
      "Simulation sous SIMetrix et LTspice",
      "Conception du schéma et routage PCB sous KiCad",
      "Validation expérimentale en laboratoire",
    ]
  },
  {
    title: "Projet IoT — Montre connectée pour coureurs",
    school: "Projet académique",
    missions: [
      "Développement d'un système intégrant capteurs et communication sans fil",
      "Coordination technique et suivi du planning",
      "Contribution aux choix d'architecture système",
    ]
  },
]

const Experience = () => {
  return (
    <main className="exp-page">

      {/* HEADER */}
      <section className="exp-header">
        <p className="section-label">Parcours</p>
        <h1 className="section-title">Expérience <span>professionnelle</span></h1>
        <div className="divider" />
      </section>

      {/* TIMELINE PRO */}
      <section className="exp-section">
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item reveal" data-delay={i * 120}>
              <div
                className="timeline-dot"
                style={{ background: exp.color, boxShadow: `0 0 0 4px ${exp.color}33` }}
              />
              <div className="timeline-card">
                <div className="timeline-card__header">
                  <div>
                    <p className="timeline-card__period">{exp.period}</p>
                    <h3 className="timeline-card__role">{exp.role}</h3>
                    <p className="timeline-card__company">
                      {exp.company}
                      <span className="timeline-card__location"> · {exp.location}</span>
                    </p>
                  </div>
                  <span
                    className="timeline-card__badge"
                    style={{ color: exp.color, borderColor: `${exp.color}44`, background: `${exp.color}11` }}
                  >
                    {exp.type}
                  </span>
                </div>
                <ul className="timeline-card__missions">
                  {exp.missions.map((m, j) => (
                    <li key={j}>{m}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPÉRIENCES ACADÉMIQUES */}
      <section className="academic-section reveal">
        <p className="section-label">Formation pratique</p>
        <h2 className="section-title">Projets <span>académiques</span></h2>
        <div className="divider" />

        <div className="academic-grid">
          {academics.map((ac, i) => (
            <div key={i} className="academic-card reveal" data-delay={i * 100}>
              <h3 className="academic-card__title">{ac.title}</h3>
              <p className="academic-card__school">{ac.school}</p>
              <ul className="academic-card__missions">
                {ac.missions.map((m, j) => (
                  <li key={j}>{m}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}

export default Experience