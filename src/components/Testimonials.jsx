import { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    quote: "[Callum] shipped faster than anyone I've worked with — and somehow always picked the right thing to ship first.",
    name: '[Manager Name]',
    role: 'Head of Product at [Company]',
  },
  {
    quote: "Rare to find a PM who can go deep on data AND align a room of stakeholders in the same afternoon.",
    name: '[Colleague Name]',
    role: 'Engineering Lead at [Company]',
  },
  {
    quote: "Callum's instinct for cutting scope without losing value is genuinely one of a kind.",
    name: '[Colleague Name]',
    role: 'Designer at [Company]',
  },
]

export default function Testimonials() {
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
      ref={ref}
      className={`px-6 fade-in ${visible ? 'visible' : ''}`}
      style={{ paddingTop: '120px', paddingBottom: '120px' }}
    >
      <div className="max-w-5xl mx-auto">
        <p className="font-mono uppercase tracking-widest text-[#f59e0b] mb-3" style={{ fontSize: '11px' }}>What people say</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ t }) {
  return (
    <div
      className="bg-[#0d1f35] rounded-xl p-6 flex flex-col"
      style={{ border: '1px solid #1e293b' }}
    >
      {/* Large opening quotation mark */}
      <span className="text-[#f59e0b] font-serif leading-none mb-3 select-none" style={{ fontSize: '48px', lineHeight: '1' }}>"</span>

      <p className="text-[#94a3b8] italic leading-relaxed flex-1 mb-5" style={{ fontSize: '14px' }}>
        {t.quote}
      </p>

      <div>
        <p className="text-white font-medium" style={{ fontSize: '13px' }}>— {t.name}</p>
        <p className="font-mono text-[#94a3b8]" style={{ fontSize: '12px' }}>{t.role}</p>
      </div>
    </div>
  )
}
