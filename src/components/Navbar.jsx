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
    { label: "Systems I've Built", id: 'case-studies' },
    { label: 'Experiments', id: 'experiments' },
    { label: 'Writing', id: 'writing' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: 'rgba(14,13,11,0.97)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
        height: '54px',
        padding: '0 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'transform 300ms ease',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
      }}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '13px',
          color: 'var(--text2)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        CL.pm
      </button>

      {/* Desktop links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="hide-mobile">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            style={{
              fontSize: '13px',
              color: 'var(--muted)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: "'DM Sans', sans-serif",
              transition: 'color 200ms',
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--text)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--muted)'}
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Hamburger */}
      <button
        className="hide-desktop"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        style={{ background: 'none', border: 'none', cursor: 'pointer', flexDirection: 'column', gap: '5px', padding: '4px' }}
      >
        <span style={{ display: 'block', width: '20px', height: '1.5px', background: 'var(--muted)', transition: 'all 200ms', transform: menuOpen ? 'rotate(45deg) translateY(6.5px)' : 'none' }} />
        <span style={{ display: 'block', width: '20px', height: '1.5px', background: 'var(--muted)', transition: 'all 200ms', opacity: menuOpen ? 0 : 1 }} />
        <span style={{ display: 'block', width: '20px', height: '1.5px', background: 'var(--muted)', transition: 'all 200ms', transform: menuOpen ? 'rotate(-45deg) translateY(-6.5px)' : 'none' }} />
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="hide-desktop"
          style={{
            position: 'absolute',
            top: '54px',
            left: 0,
            right: 0,
            background: 'rgba(14,13,11,0.98)',
            borderBottom: '1px solid var(--border)',
            padding: '16px 48px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{
                fontSize: '13px',
                color: 'var(--muted)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
