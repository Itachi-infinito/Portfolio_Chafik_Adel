import { useEffect } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Contact from './pages/Contact'

function ScrollReveal() {
  const location = useLocation()
  useEffect(() => {
    const timer = setTimeout(() => {
      const els = document.querySelectorAll('.reveal:not(.reveal--visible)')
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const delay = +(entry.target.dataset.delay || 0)
            setTimeout(() => entry.target.classList.add('reveal--visible'), delay)
            obs.unobserve(entry.target)
          }
        })
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })
      els.forEach(el => obs.observe(el))
      return () => obs.disconnect()
    }, 80)
    return () => clearTimeout(timer)
  }, [location])
  return null
}

function App() {
  return (
    <HashRouter>
      <ScrollReveal />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}

export default App