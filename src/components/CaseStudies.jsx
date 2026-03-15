import { useEffect, useRef, useState } from 'react'

const studies = [
  {
    stage: '0→1',
    title: 'Mobile onboarding — 18% D7 retention lift',
    decision: 'I could have built a full tutorial. I cut the flow to 3 steps instead.',
    problem: '60% of new users dropped off before completing setup.',
    process: ['User interviews', 'Journey mapping', 'Prototype', 'A/B test', 'Launch'],
    outcome: '+18% D7 retention · 6 weeks · ~40% reduction in support tickets',
  },
  {
    stage: 'Growth',
    title: 'Checkout redesign — 23% drop-off reduction',
    decision: 'I could have rebuilt from scratch. I ran a 2-week optimisation sprint first.',
    problem: '40% cart abandonment at payment step — est. $2M annual revenue leak.',
    process: ['Heatmaps', 'User interviews', 'RICE scoring', 'A/B test', 'Rollout'],
    outcome: '+23% conversion · 8 weeks · ~$460K ARR recovered',
  },
  {
    stage: '0→1',
    title: 'API platform — 0 to 40 partner integrations in 6 months',
    decision: 'I could have waited for perfect docs. I shipped a rough SDK on day 30.',
    problem: 'Zero external integrations — growth blocked by no partner ecosystem.',
    process: ['Partner discovery', 'PRD', 'SDK v1', 'Feedback loop', 'Scale'],
    outcome: '40 integrations · 6 months · 3× developer sign-up rate',
  },
]

export default function CaseStudies() {
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
      id="case-studies"
      ref={ref}
      className={`py-24 px-6 fade-in ${visible ? 'visible' : ''}`}
    >
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-xs text-[#38bdf8] uppercase tracking-widest mb-3">Case Studies</p>
        <h2 className="text-3xl md:text-4xl font-medium text-white mb-3">
          Decisions I've made and why
        </h2>
        <p className="text-[#94a3b8] mb-12">
          3 studies — each tagged by stage, led by the decision not the outcome
        </p>

        <div className="flex flex-col gap-6">
          {studies.map((study, i) => (
            <StudyCard key={i} study={study} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StudyCard({ study }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-[#0d1f35] rounded-xl p-6 md:p-8 transition-all duration-200"
      style={{
        border: `1px solid ${hovered ? '#38bdf8' : '#1e293b'}`,
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 0 24px rgba(56,189,248,0.12)' : 'none',
        transition: 'border-color 200ms ease, transform 200ms ease, box-shadow 200ms ease',
      }}
    >
      {/* Stage badge */}
      <span
        className="font-mono text-xs font-medium px-2.5 py-1 rounded mb-4 inline-block"
        style={
          study.stage === '0→1'
            ? { background: '#f59e0b', color: '#0f172a' }
            : { background: '#38bdf8', color: '#0f172a' }
        }
      >
        {study.stage}
      </span>

      <h3 className="text-white font-semibold text-xl mb-2">{study.title}</h3>
      <p className="text-[#94a3b8] italic mb-4 text-sm">{study.decision}</p>

      <hr className="border-[#1e293b] mb-4" />

      <p className="text-[#94a3b8] text-sm mb-4">
        <span className="text-[#e2e8f0] font-medium">Problem: </span>
        {study.problem}
      </p>

      {/* Process trail */}
      <div className="flex flex-wrap gap-2 mb-4">
        {study.process.map((step, i) => (
          <span key={i} className="font-mono text-xs text-[#94a3b8] bg-[#0f172a] border border-[#1e293b] rounded-full px-3 py-1">
            {step}
          </span>
        ))}
      </div>

      <p className="font-mono text-sm text-[#f59e0b] mb-4">→ {study.outcome}</p>

      <a href="#" className="text-[#38bdf8] text-sm hover:underline">
        Read full case study →
      </a>
    </div>
  )
}
