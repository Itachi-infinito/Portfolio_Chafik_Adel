import { useState } from 'react'
import './Contact.css'

const FORMSPREE_ID = 'xwvjlznn'
const EMAIL = 'adelchafik8@gmail.com'

const coordinates = [
  { param: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  {
    param: 'LinkedIn',
    value: 'linkedin.com/in/adel-chafik-b47834215 ↗', // espace insécable : la flèche reste avec l'adresse
    href: 'https://www.linkedin.com/in/adel-chafik-b47834215/',
    external: true,
  },
  { param: 'Téléphone', value: '+32 499 10 16 63', href: 'tel:+32499101663' },
  { param: 'Localisation', value: 'Nivelles, Belgique' },
]

const EMPTY_FORM = { prenom: '', nom: '', email: '', sujet: '', message: '' }

const Contact = () => {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState(EMPTY_FORM)

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
        setForm(EMPTY_FORM)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="page contact-page">
      <section className="contact-header">
        <p className="section-label">Coordonnées et formulaire</p>
        <h1 className="section-title">Contact</h1>
        <div className="divider" />
      </section>

      <section className="contact-section">
        <table className="specs contact-coordinates">
          <caption>Coordonnées</caption>
          <tbody>
            {coordinates.map(row => (
              <tr key={row.param}>
                <th scope="row">{row.param}</th>
                <td>
                  {row.href ? (
                    <a
                      href={row.href}
                      className="contact-link"
                      {...(row.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    >
                      {row.value}
                    </a>
                  ) : (
                    <span className="specs__value">{row.value}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="contact-form-wrap">
          <h2 className="contact-form__title">Message</h2>

          <div aria-live="polite">
            {status === 'success' && (
              <div className="contact-success">
                <p>Message envoyé. Je vous réponds par email.</p>
                <button type="button" className="btn btn--ghost" onClick={() => setStatus('idle')}>
                  Envoyer un autre message
                </button>
              </div>
            )}
            {status === 'error' && (
              <p className="contact-error">
                Échec de l'envoi. Réessayez ou écrivez à <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
              </p>
            )}
          </div>

          {status !== 'success' && (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label htmlFor="contact-prenom" className="contact-form__label">Prénom</label>
                  <input
                    id="contact-prenom" type="text" name="prenom" className="contact-form__input"
                    autoComplete="given-name" required
                    value={form.prenom} onChange={handleChange}
                  />
                </div>
                <div className="contact-form__group">
                  <label htmlFor="contact-nom" className="contact-form__label">Nom</label>
                  <input
                    id="contact-nom" type="text" name="nom" className="contact-form__input"
                    autoComplete="family-name" required
                    value={form.nom} onChange={handleChange}
                  />
                </div>
              </div>

              <div className="contact-form__group">
                <label htmlFor="contact-email" className="contact-form__label">Email</label>
                <input
                  id="contact-email" type="email" name="email" className="contact-form__input"
                  autoComplete="email" required
                  value={form.email} onChange={handleChange}
                />
              </div>

              <div className="contact-form__group">
                <label htmlFor="contact-sujet" className="contact-form__label">
                  Sujet <span className="contact-form__optional">(facultatif)</span>
                </label>
                <input
                  id="contact-sujet" type="text" name="sujet" className="contact-form__input"
                  value={form.sujet} onChange={handleChange}
                />
              </div>

              <div className="contact-form__group">
                <label htmlFor="contact-message" className="contact-form__label">Message</label>
                <textarea
                  id="contact-message" name="message" className="contact-form__input contact-form__textarea"
                  required
                  value={form.message} onChange={handleChange}
                />
              </div>

              <div>
                <button type="submit" className="btn btn--primary" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Envoi en cours…' : 'Envoyer le message'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}

export default Contact
