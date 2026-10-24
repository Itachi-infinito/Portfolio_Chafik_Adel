import { Link } from 'react-router-dom'
import { projectRef } from '../data/projects'
import './Experience.css'

// Dates, intitulés et missions alignés sur public/CV_Adel_Chafik.pdf.
// Aucun nom de client DVC.
const experiences = [
  {
    period: "sept. 2025 – aujourd'hui",
    type: "CDI",
    role: "Ingénieur électronique, développement & production",
    place: "DVC · Nivelles",
    missions: [
      "Conçu un tracker IoT anti-vol B2B pour câbles électriques : PCB ultra-compact (~12 × 25 mm), encapsulé en résine, IP67.",
      "Routé des PCB haute densité sous Altium Designer : lignes RF 50 Ω, adaptation d'antennes, coexistence LTE-M / LoRaWAN / GNSS.",
      "Développé le firmware embarqué en C (Nordic) et validé les prototypes sur bancs de test : mesures, débogage hardware et firmware.",
      "Encadré les équipes de production et assuré le lien avec les clients : planning, commandes, suivi qualité et reporting technique.",
      "Réparation et diagnostic de cartes électroniques industrielles.",
    ],
  },
  {
    period: "janv. – juin 2025",
    type: "Stage",
    role: "Stagiaire ingénieur hardware",
    place: "Thales Alenia Space · Belgique",
    missions: [
      "Conçu un convertisseur buck-boost inverseur pour propulseurs à effet Hall (moteurs plasmiques de satellite).",
      "Mis au point une régulation à double boucle tension / courant (PI) : stabilité validée par Bode et SIMetrix, réponse dynamique optimisée.",
      "Réalisé le PCB complet sous KiCad (CEM, plans de masse), préparé les bancs de test et débogué les boucles de régulation.",
    ],
  },
  {
    period: "janv. – avr. 2023",
    type: "Stage",
    role: "Stagiaire ingénieur hardware",
    place: "CISSOID · Louvain-la-Neuve",
    missions: [
      "Développé des plans de test pour des MOSFETs.",
      "Conçu et amélioré un PCB sous Altium Designer.",
      "Validation expérimentale de composants électroniques.",
    ],
  },
]

const academics = [
  {
    title: "Robot mobile autonome",
    text: "Coordination technique d'une équipe pluridisciplinaire, régulation PID et sécurité embarquée.",
    project: "titan-striker", // même projet que la fiche Titan Striker
  },
  {
    title: "Convertisseur buck-boost inversé",
    text: "Simulation, schéma et PCB, puis validation expérimentale en laboratoire.",
  },
  {
    title: "Montre connectée pour coureurs (IoT)",
    text: "Capteurs, communication sans fil, interface utilisateur et choix d'architecture.",
  },
]

const Experience = () => {
  return (
    <main className="page exp-page">
      <section className="exp-header">
        <p className="section-label">Parcours</p>
        <h1 className="section-title">Expérience</h1>
        <div className="divider" />
      </section>

      <section className="exp-section" aria-labelledby="exp-pro-title">
        <h2 id="exp-pro-title" className="exp-section__title">Expérience professionnelle</h2>
        <ol className="exp-list">
          {experiences.map(exp => (
            <li key={exp.place} className="exp-item">
              <p className="exp-item__meta">
                <span>{exp.period}</span>
                <span className="exp-item__type">{exp.type}</span>
              </p>
              <div className="exp-item__body">
                <h3 className="exp-item__role">{exp.role}</h3>
                <p className="exp-item__place">{exp.place}</p>
                <ul className="exp-item__missions">
                  {exp.missions.map(m => <li key={m}>{m}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="exp-section exp-section--last">
        <table className="specs exp-academic">
          <caption>Projets académiques · ECAM Brussels</caption>
          <thead>
            <tr>
              <th scope="col">Projet</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {academics.map(ac => (
              <tr key={ac.title}>
                <th scope="row">{ac.title}</th>
                <td>
                  {ac.text}
                  {ac.project && (
                    <>
                      {' '}
                      <Link to={`/projects/${ac.project}`} className="exp-academic__link">
                        Fiche {projectRef(ac.project)} →
                      </Link>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  )
}

export default Experience
