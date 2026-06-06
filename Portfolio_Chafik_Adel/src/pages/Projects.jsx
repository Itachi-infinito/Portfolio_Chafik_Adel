import './Projects.css'

const projects = [
  {
    emoji: "📱",
    title: "SparkWork",
    type: "Application Mobile",
    featured: true,
    badges: ["🔥 Projet phare", "📱 iOS & Android"],
    stack: ["Flutter", "Firebase", "Dart"],
    description: "Application mobile de recrutement révolutionnaire avec une mécanique de swipe. Recruteurs et candidats swipent des profils — un match mutuel est requis avant de débloquer la conversation. Lancée sur le secteur Horeca, avec une expansion prévue vers tous les secteurs.",
    links: [
      { label: "App Store", icon: "🍎", url: "#" },
      { label: "Google Play", icon: "▶️", url: "#" },
      { label: "GitHub", icon: "⚡", url: "https://github.com/Itachi-infinito" },
    ]
  },
  {
    emoji: "⚡",
    title: "Chargeur USB-C Portable",
    type: "Hardware · Altium Designer",
    featured: false,
    badges: ["🔧 Hardware", "⚡ Electronics"],
    stack: ["Altium Designer", "Altium 365", "MCP73831", "PAM2401"],
    description: "Conception complète d'un chargeur de batterie portable USB-C. Intègre les ICs MCP73831 (gestion de charge LiPo) et PAM2401 (boost converter). Toutes les phases couvertes : schémas électriques, routage PCB, BOM jusqu'à la fabrication.",
    links: [
      { label: "GitHub", icon: "⚡", url: "https://github.com/Itachi-infinito" },
    ]
  },
  {
    emoji: "🛜",
    title: "ESP32 IoT 4-Layer PCB",
    type: "Hardware · KiCad",
    featured: false,
    badges: ["🔧 Hardware", "📡 IoT"],
    stack: ["KiCad", "ESP32", "PCB 4 couches", "IoT"],
    description: "Conception et assemblage d'une carte IoT 4 couches basée sur l'ESP32, chargée de fonctionnalités : capteurs, communication sans fil, interfaces périphériques. Routage multicouche optimisé pour la CEM.",
    links: [
      { label: "GitHub", icon: "⚡", url: "https://github.com/Itachi-infinito" },
    ]
  },
  {
    emoji: "🎛️",
    title: "Raspberry Pi Pico IoT PCB",
    type: "Hardware · KiCad",
    featured: false,
    badges: ["🔧 Hardware", "🍓 Pico"],
    stack: ["KiCad", "Raspberry Pi Pico", "PCB 4 couches", "Capteurs"],
    description: "Conception d'une carte IoT 4 couches autour du Raspberry Pi Pico, intégrant multiples capteurs et périphériques. Design compact et optimisé pour applications embarquées.",
    links: [
      { label: "GitHub", icon: "⚡", url: "https://github.com/Itachi-infinito" },
    ]
  },
  {
    emoji: "🤖",
    title: "Robot Mobile Autonome",
    type: "Embarqué · ECAM",
    featured: false,
    badges: ["🤖 Robotique", "🎓 Académique"],
    stack: ["C", "MPLAB X", "PID", "Embarqué"],
    description: "Coordination technique d'une équipe pluridisciplinaire pour le développement d'un robot mobile autonome. Mise en place d'une régulation PID, intégration de sécurités embarquées, répartition des tâches et suivi de projet.",
    links: [],
  },
]

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

                {/* Links */}
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
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Projects