import { useEffect, useRef, useState } from 'react'

const cards = [
  {
    icon: '🎯',
    title: 'Anti-goal first',
    desc: "Before I define what to build, I define what success is NOT. It kills scope creep before it starts.",
  },
  {
    icon: '📰',
    title: 'Press release before PRD',
    desc: "If I can't explain the product clearly to a stranger, it isn't ready to build.",
  },
  {
    icon: '⚖️',
    title: 'RICE before opinion',
    desc: "I score every initiative: Reach, Impact, Confidence, Effort. It stops the loudest voice winning.",
  },
  {
    icon: '🚀',
    title: 'Ship to learn, not to launch',
    desc: "At 0→1, the first version is a question, not an answer. Speed-to-signal beats speed-to-polish.",
  },
]

export default function HowIThink() {
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
      id="how-i-think"
      ref={ref}
      className={`px-6 fade-in ${visible ? 'visible' : ''}`}
      style={{ paddingTop: '120px', paddingBottom: '120px' }}
    >
      <div className="max-w-5xl mx-auto">
        <p className="font-mono uppercase tracking-widest text-[#f59e0b] mb-3" style={{ fontSize: '11px' }}>Mental Models</p>
        <h2 className="font-medium text-white mb-12" style={{ fontSize: '36px' }}>
          How I approach problems
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <Card key={i} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Card({ card }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-[#0d1f35] rounded-xl p-6 relative overflow-hidden transition-transform duration-200 hover:-translate-y-1"
      style={{
        border: '1px solid #1e293b',
        borderLeft: hovered ? '3px solid #f59e0b' : '3px solid transparent',
        transition: 'border-left 200ms ease, transform 200ms ease',
      }}
    >
      <div className="text-2xl mb-4">{card.icon}</div>
      <h3 className="text-white font-medium text-lg mb-2">{card.title}</h3>
      <p className="text-[#94a3b8] text-sm leading-relaxed">{card.desc}</p>
    </div>
  )
}
