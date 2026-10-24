import './About.css'

const BASE = import.meta.env.BASE_URL

const skills = [
  { category: "PCB & Hardware", items: ["Altium Designer", "KiCad", "PCB Design", "Circuit électronique", "CEM/EMC"] },
  { category: "Simulation & Test", items: ["LTspice", "SIMetrix", "Micro-Cap", "MPLAB X", "Validation composants"] },
  { category: "Programmation", items: ["C", "C#", "Python", "JavaScript", "Node.js", "Embedded"] },
  { category: "Mobile & Web", items: ["Flutter", "React", "Firebase", "Supabase"] },
  { category: "Méthodes", items: ["Agile", "UML", "Git", "GitHub", "SQL"] },
]

// Intitulés et niveaux repris du CV (public/CV_Adel_Chafik.pdf)
const infos = [
  { param: 'Langues', value: 'Français (langue maternelle) · anglais (intermédiaire)' },
  { param: 'Localisation', value: 'Nivelles, Belgique' },
  { param: 'Permis', value: 'B' },
]

const education = [
  { period: '2023 – 2025', degree: 'Master Ingénieur Industriel en Électronique', school: 'ECAM Brussels' },
  { period: '2020 – 2023', degree: 'Bachelier Ingénieur Industriel en Électronique', school: 'ECAM Brussels' },
]

const About = () => {
  return (
    <main className="page about-page">
      <section className="about-header">
        <p className="section-label">Profil</p>
        <h1 className="section-title">À propos</h1>
        <div className="divider" />
      </section>

      <section className="about-intro">
        <div className="about-bio">
          <p>
            Ingénieur en électronique, diplômé du Master Ingénieur Industriel en Électronique
            de l'ECAM Brussels (2025).
          </p>
          <p>
            Stages chez Thales Alenia Space (domaine spatial) et chez CISSOID (électronique
            haute performance).
          </p>
          <p>
            Depuis septembre 2025, ingénieur électronique (développement &amp; production) chez DVC,
            à Nivelles : conception PCB et développement software pour des clients industriels.
          </p>
          <p>
            J'ai également lancé SparkWork, une application mobile de recrutement en cours de
            publication sur iOS et Android.
          </p>
        </div>

        <aside className="about-aside">
          <table className="specs">
            <caption>Informations</caption>
            <tbody>
              {infos.map(row => (
                <tr key={row.param}>
                  <th scope="row">{row.param}</th>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <a
            href={`${BASE}CV_Adel_Chafik.pdf`}
            download="CV_Adel_Chafik.pdf"
            className="btn btn--ghost about-cv"
          >
            Télécharger le CV (PDF)
          </a>
        </aside>
      </section>

      <section className="about-tables">
        <table className="specs about-education">
          <caption>Formation</caption>
          <thead>
            <tr>
              <th scope="col">Période</th>
              <th scope="col">Diplôme</th>
              <th scope="col">Établissement</th>
            </tr>
          </thead>
          <tbody>
            {education.map(row => (
              <tr key={row.degree}>
                <td><span className="specs__value">{row.period}</span></td>
                <th scope="row">{row.degree}</th>
                <td>{row.school}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="specs about-skills">
          <caption>Compétences</caption>
          <thead>
            <tr>
              <th scope="col">Domaine</th>
              <th scope="col">Éléments</th>
            </tr>
          </thead>
          <tbody>
            {skills.map(group => (
              <tr key={group.category}>
                <th scope="row">{group.category}</th>
                <td><span className="specs__value">{group.items.join(' · ')}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  )
}

export default About
