import { useState } from 'react'
import './Contact.css'

const FORMSPREE_ID = 'xwvjlznn'

const Contact = () => {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ prenom: '', nom: '', email: '', sujet: '', message: '' })

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          prenom: form.prenom,
          nom: form.nom,
          email: form.email,
          sujet: form.sujet,
          message: form.message,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ prenom: '', nom: '', email: '', sujet: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="contact-page">
      <section className="contact-header">
        <p className="section-label">Travaillons ensemble</p>
        <h1 className="section-title">Me <span>contacter</span></h1>
        <div className="divider" />
      </section>

      <section className="contact-section">
        <div className="contact-grid reveal">
          <div className="contact-info">
            <p className="contact-info__desc">
              Disponible pour des missions freelance, collaborations sur des projets
              industriels ou innovants, ou simplement pour échanger. N'hésitez pas !
            </p>
            <div className="contact-links">
              <a href="mailto:adelchafik8@gmail.com" className="contact-link">
                <div className="contact-link__icon">✉️</div>
                <div className="contact-link__text">
                  <small>Email</small>
                  <span>adelchafik8@gmail.com</span>
                </div>
              </a>
              <a href="https://github.com/Itachi-infinito" target="_blank" rel="noreferrer" className="contact-link">
                <div className="contact-link__icon">⚡</div>
                <div className="contact-link__text">
                  <small>GitHub</small>
                  <span>github.com/Itachi-infinito</span>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/adelchafik-b47834215/" target="_blank" rel="noreferrer" className="contact-link">
                <div className="contact-link__icon">💼</div>
                <div className="contact-link__text">
                  <small>LinkedIn</small>
                  <span>linkedin.com/in/adelchafik</span>
                </div>
              </a>
              <div className="contact-link">
                <div className="contact-link__icon">📍</div>
                <div className="contact-link__text">
                  <small>Localisation</small>
                  <span>Nivelles, Belgique</span>
                </div>
              </div>
              <a href="tel:+32499101663" className="contact-link">
                <div className="contact-link__icon">📞</div>
                <div className="contact-link__text">
                  <small>Téléphone</small>
                  <span>+32 499 10 16 63</span>
                </div>
              </a>
            </div>
          </div>

          {status === 'success' ? (
            <div className="contact-success">
              <span className="contact-success__icon">✅</span>
              <h3>Message envoyé !</h3>
              <p>Merci pour votre message. Je vous répondrai dans les plus brefs délais.</p>
              <button className="contact-form__btn" onClick={() => setStatus('idle')}>
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label className="contact-form__label">Prénom</label>
                  <input
                    type="text" name="prenom" className="contact-form__input"
                    placeholder="Jean" required
                    value={form.prenom} onChange={handleChange}
                  />
                </div>
                <div className="contact-form__group">
                  <label className="contact-form__label">Nom</label>
                  <input
                    type="text" name="nom" className="contact-form__input"
                    placeholder="Dupont" required
                    value={form.nom} onChange={handleChange}
                  />
                </div>
              </div>

              <div className="contact-form__group">
                <label className="contact-form__label">Email</label>
                <input
                  type="email" name="email" className="contact-form__input"
                  placeholder="jean@exemple.com" required
                  value={form.email} onChange={handleChange}
                />
              </div>

              <div className="contact-form__group">
                <label className="contact-form__label">Sujet</label>
                <input
                  type="text" name="sujet" className="contact-form__input"
                  placeholder="Collaboration, mission..."
                  value={form.sujet} onChange={handleChange}
                />
              </div>

              <div className="contact-form__group">
                <label className="contact-form__label">Message</label>
                <textarea
                  name="message" className="contact-form__textarea"
                  placeholder="Décrivez votre projet ou votre demande…" required
                  value={form.message} onChange={handleChange}
                />
              </div>

              {status === 'error' && (
                <p className="contact-error">Une erreur est survenue. Réessayez ou écrivez directement à adelchafik8@gmail.com</p>
              )}

              <button type="submit" className="contact-form__btn" disabled={status === 'loading'}>
                {status === 'loading' ? '⏳ Envoi en cours…' : '✉️ Envoyer le message'}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}

export default Contact
