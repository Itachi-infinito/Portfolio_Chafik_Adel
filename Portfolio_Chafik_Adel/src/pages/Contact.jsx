import './Contact.css'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const btn = e.target.querySelector('.contact-form__btn')
    btn.textContent = 'Message envoye !'
    btn.disabled = true
    setTimeout(() => {
      btn.textContent = 'Envoyer le message'
      btn.disabled = false
      e.target.reset()
    }, 3000)
  }

  return (
    <main className="contact-page">
      <section className="contact-header">
        <p className="section-label">Travaillons ensemble</p>
        <h1 className="section-title">Me <span>contacter</span></h1>
        <div className="divider" />
      </section>
      <section className="contact-section">
        <div className="contact-grid">
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
                  <small>Telephone</small>
                  <span>+32 499 10 16 63</span>
                </div>
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__row">
                <div className="contact-form__group">
                    <label className="contact-form__label">Prénom</label>
                    <input type="text" className="contact-form__input" placeholder="Jean" required />
                </div>
                <div className="contact-form__group">
                    <label className="contact-form__label">Nom</label>
                    <input type="text" className="contact-form__input" placeholder="Dupont" required />
                </div>
            </div>
            <div className="contact-form__group">
              <label className="contact-form__label">Email</label>
              <input type="email" className="contact-form__input" placeholder="jean@exemple.com" required />
            </div>
            <div className="contact-form__group">
              <label className="contact-form__label">Sujet</label>
              <input type="text" className="contact-form__input" placeholder="Collaboration, mission..." />
            </div>
            <div className="contact-form__group">
              <label className="contact-form__label">Message</label>
              <textarea className="contact-form__textarea" placeholder="Décrivez votre projet ou votre demande…"required />
            </div>
            <button type="submit" className="contact-form__btn">✉️ Envoyer le message</button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Contact
