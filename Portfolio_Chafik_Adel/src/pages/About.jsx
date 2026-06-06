import './About.css'

const skills = [
  { category: "PCB & Hardware", items: ["Altium Designer", "KiCad", "PCB Design", "Circuit électronique", "CEM/EMC"] },
  { category: "Simulation & Test", items: ["LTspice", "SIMetrix", "Micro-Cap", "MPLAB X", "Validation composants"] },
  { category: "Programmation", items: ["C", "C#", "Python", "JavaScript", "Node.js", "Embedded"] },
  { category: "Mobile & Web", items: ["Flutter", "React", "Firebase", "Supabase"] },
  { category: "Méthodes", items: ["Agile", "UML", "Git", "GitHub", "SQL"] },
]

const About = () => {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero__content">
          <p className="section-label">Qui suis-je</p>
          <h1 className="section-title">À propos <span>de moi</span></h1>
          <div className="divider" />

          <div className="about-grid">
            <div className="about-text">
              <p>
                Ingénieur en électronique diplômé du{' '}
                <strong>Master en Sciences de l'Ingénieur Industriel</strong>{' '}
                à l'<strong>ECAM Brussels Engineering School</strong>,
                je suis passionné par la conception de solutions techniques innovantes,
                du composant au système complet.
              </p>
              <p>
                Mon parcours combine rigueur académique et expériences industrielles
                exigeantes — dont un stage chez{' '}
                <strong>Thales Alenia Space</strong>{' '}
                dans le domaine spatial et un stage chez{' '}
                <strong>CISSOID</strong>{' '}
                spécialisé en électronique haute performance.
              </p>
              <p>
                Actuellement chez <strong>DVC</strong>, j'interviens sur des projets
                pour des clients industriels majeurs comme{' '}
                <strong>IBA</strong> et <strong>Infrabel</strong>,
                en conception PCB et développement software.
              </p>
              <p>
                Curieux et entrepreneur dans l'âme, j'ai également lancé{' '}
                <strong>SparkWork</strong>, une application mobile de recrutement
                disponible sur iOS et Android.
              </p>

              <div className="about-tags">
                <span className="tag">🇫🇷 Français</span>
                <span className="tag">🇬🇧 Anglais</span>
                <span className="tag">📍 Nivelles, Belgique</span>
                <span className="tag">🎂 17/02/2002</span>
                <span className="tag">🚗 Permis B</span>
              </div>
            </div>

            <div className="about-info">
              <div className="info-card">
                <h3 className="info-card__title">🎓 Formation</h3>
                <div className="info-item">
                  <span className="info-item__period">2023 — 2025</span>
                  <strong>Master Sciences Ingénieur Industriel</strong>
                  <span>Électronique · ECAM Brussels</span>
                </div>
                <div className="info-item">
                  <span className="info-item__period">2020 — 2023</span>
                  <strong>Bachelier Sciences Ingénieur Industriel</strong>
                  <span>Électronique · ECAM Brussels</span>
                </div>
              </div>

              <div className="info-card">
                <h3 className="info-card__title">📊 En chiffres</h3>
                <div className="mini-stats">
                  <div className="mini-stat">
                    <span className="mini-stat__num">2</span>
                    <span className="mini-stat__label">Stages industriels</span>
                  </div>
                  <div className="mini-stat">
                    <span className="mini-stat__num">5+</span>
                    <span className="mini-stat__label">Projets réalisés</span>
                  </div>
                  <div className="mini-stat">
                    <span className="mini-stat__num">3+</span>
                    <span className="mini-stat__label">Clients industriels</span>
                  </div>
                  <div className="mini-stat">
                    <span className="mini-stat__num">2</span>
                    <span className="mini-stat__label">Apps publiées</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPÉTENCES */}
      <section className="skills-section">
        <p className="section-label">Expertise</p>
        <h2 className="section-title">Compétences <span>techniques</span></h2>
        <div className="divider" />

        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.category} className="skill-card">
              <h3 className="skill-card__title">{group.category}</h3>
              <div className="skill-badges">
                {group.items.map(item => (
                  <span key={item} className="skill-badge">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default About