import { useState, useEffect, useRef } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY < 60) {
        setVisible(true)
      } else if (currentY > lastScrollY.current) {
        setVisible(false)
        setMenuOpen(false)
      } else {
        setVisible(true)
      }
      lastScrollY.current = currentY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const links = [
    { label: 'How I Think', id: 'how-i-think' },
    { label: 'Work', id: 'case-studies' },
    { label: 'About', id: 'about' },
    { label: 'Writing', id: 'writing' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300"
      style={{
        background: 'rgba(15,23,42,0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #1e293b',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-[#38bdf8] font-semibold text-lg tracking-tight hover:opacity-80 transition-opacity"
        >
          CL.pm
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-[#94a3b8] hover:text-[#e2e8f0] text-sm transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#94a3b8] transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#94a3b8] transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#94a3b8] transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#1e293b] px-6 py-4 flex flex-col gap-4" style={{ background: 'rgba(15,23,42,0.98)' }}>
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-[#94a3b8] hover:text-[#e2e8f0] text-sm text-left transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
