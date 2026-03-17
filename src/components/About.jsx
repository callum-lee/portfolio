import { useEffect, useRef, useState } from 'react'

const interests = [
  { icon: '🏄', label: '[Hobby 1]' },
  { icon: '📚', label: '[Hobby 2]' },
  { icon: '✈️', label: '[Hobby 3]' },
]

export default function About() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={ref}
      className={`px-6 fade-in ${visible ? 'visible' : ''}`}
      style={{ paddingTop: '120px', paddingBottom: '120px' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 items-start">
          {/* Avatar */}
          <div className="flex justify-center md:justify-start">
            <div
              className="w-28 h-28 rounded-full flex items-center justify-center font-mono text-2xl font-bold text-[#f59e0b] flex-shrink-0"
              style={{ background: '#1e3a5f', border: '2px solid #f59e0b' }}
            >
              CL
            </div>
          </div>

          {/* Text */}
          <div>
            {/* Opening quote — p tag, not heading */}
            <p
              className="text-white leading-snug mb-6"
              style={{ fontSize: '22px', fontWeight: 500, lineHeight: 1.4 }}
            >
              I've started from zero and I've scaled to millions.<br />
              The hardest part is always the same: figuring out what not to build.
            </p>

            <p className="text-[#94a3b8] leading-relaxed mb-4" style={{ fontSize: '16px' }}>
              I'm a product manager who's worked across 0→1 startups and growth-stage companies.
              I care about the decisions behind the product — not just the outcome. Data tells me
              where to look. Judgment tells me what matters.
            </p>

            <p className="text-[#94a3b8] leading-relaxed mb-6" style={{ fontSize: '16px' }}>
              Outside of work I'm [PLACEHOLDER — add your interests]. Based in Sydney, Australia.
            </p>

            {/* Interest pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {interests.map((interest, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-[#0d1f35] border border-[#1e293b] rounded-lg px-4 py-2"
                >
                  <span style={{ fontSize: '16px' }}>{interest.icon}</span>
                  <span className="text-[#94a3b8]" style={{ fontSize: '13px' }}>{interest.label}</span>
                </div>
              ))}
            </div>

            {/* Fact lines */}
            <div className="flex flex-col gap-3 font-mono text-[#94a3b8]" style={{ fontSize: '13px' }}>
              <p>▸ Previously at [Company A] &amp; [Company B]</p>
              <p>▸ Based in Sydney, Australia</p>
              <p>▸ Currently: [Role] at [Company]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
