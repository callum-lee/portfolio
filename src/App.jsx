import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowIThink from './components/HowIThink'
import CaseStudies from './components/CaseStudies'
import Experiments from './components/Experiments'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Writing from './components/Writing'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-[#0f172a] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <HowIThink />
        <CaseStudies />
        <Experiments />
        <Testimonials />
        <About />
        <Writing />
        <Contact />
      </main>
    </div>
  )
}

export default App
