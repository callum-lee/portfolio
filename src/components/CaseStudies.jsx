import { useState } from 'react'

const studies = [
  {
    stage: '0→1',
    title: 'Mobile onboarding — 18% D7 retention lift',
    decision: 'I could have built a full tutorial. I cut the flow to 3 steps instead.',
    problem: '60% of new users dropped off before completing setup.',
    process: ['User interviews', 'Journey mapping', 'Prototype', 'A/B test', 'Launch'],
    artifacts: ['📋 PRD', '🗺 Journey map', '📊 A/B results'],
    outcome: '+18% D7 retention · 6 weeks · ~40% reduction in support tickets',
  },
  {
    stage: 'Growth',
    title: 'Checkout redesign — 23% drop-off reduction',
    decision: 'I could have rebuilt from scratch. I ran a 2-week optimisation sprint first.',
    problem: '40% cart abandonment at payment step — est. $2M annual revenue leak.',
    process: ['Heatmaps', 'User interviews', 'RICE scoring', 'A/B test', 'Rollout'],
    artifacts: ['📋 PRD', '🗺 Journey map', '📊 A/B results'],
    outcome: '+23% conversion · 8 weeks · ~$460K ARR recovered',
  },
  {
    stage: '0→1',
    title: 'API platform — 0 to 40 partner integrations in 6 months',
    decision: 'I could have waited for perfect docs. I shipped a rough SDK on day 30.',
    problem: 'Zero external integrations — growth blocked by no partner ecosystem.',
    process: ['Partner discovery', 'PRD', 'SDK v1', 'Feedback loop', 'Scale'],
    artifacts: ['📋 PRD', '🗺 Journey map', '📊 A/B results'],
    outcome: '40 integrations · 6 months · 3× developer sign-up rate',
  },
]

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      style={{ padding: '80px 48px', borderBottom: '1px solid var(--border)' }}
    >
      <div style={{ maxWidth: '1080px', margin: '0 auto', width: '100%' }}>
        <p style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '12px', fontWeight: 400 }}>
          Systems I've Built
        </p>
        <h2 style={{ fontSize: '28px', fontWeight: 600, color: 'var(--text)', letterSpacing: '-.02em', marginBottom: '6px' }}>
          Decisions I've made and why
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--text2)', marginBottom: '36px', fontWeight: 300 }}>
          3 studies — each tagged by stage, led by the decision not the outcome
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
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
  const isZeroToOne = study.stage === '0→1'

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--surface)',
        border: `1px solid ${hovered ? 'var(--border2)' : 'var(--border)'}`,
        borderRadius: '8px',
        padding: '24px 28px',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'border-color 200ms ease, transform 200ms ease',
      }}
    >
      {/* Stage badge */}
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '10px',
          padding: '2px 8px',
          borderRadius: '3px',
          display: 'inline-block',
          marginBottom: '12px',
          background: isZeroToOne ? 'var(--accent-dim)' : 'var(--blue-dim)',
          color: isZeroToOne ? 'var(--accent)' : 'var(--blue)',
          border: `1px solid ${isZeroToOne ? 'var(--accent-border)' : 'var(--blue-border)'}`,
        }}
      >
        {study.stage}
      </span>

      <h3 style={{ fontSize: '16px', fontWeight: 500, color: 'var(--text)', marginBottom: '6px' }}>
        {study.title}
      </h3>
      <p style={{ fontSize: '13px', color: 'var(--muted)', fontStyle: 'italic', fontWeight: 300, marginBottom: '14px' }}>
        {study.decision}
      </p>

      <div style={{ height: '1px', background: 'var(--border)', margin: '14px 0' }} />

      <p style={{ fontSize: '13px', color: 'var(--text2)', fontWeight: 300, marginBottom: '14px' }}>
        <span style={{ fontWeight: 400, color: 'var(--text)' }}>Problem: </span>
        {study.problem}
      </p>

      {/* Process trail */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '10px' }}>
        {study.process.map((step, i) => (
          <span
            key={i}
            style={{
              background: 'var(--surface2)',
              border: '1px solid var(--border)',
              color: 'var(--muted)',
              fontSize: '11px',
              padding: '2px 8px',
              borderRadius: '3px',
            }}
          >
            {step}
          </span>
        ))}
      </div>

      {/* Artifacts */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
        {study.artifacts.map((artifact, i) => (
          <span
            key={i}
            style={{
              background: 'var(--surface2)',
              border: '1px solid var(--border)',
              color: 'var(--text2)',
              fontSize: '11px',
              padding: '2px 8px',
              borderRadius: '3px',
            }}
          >
            {artifact}
          </span>
        ))}
      </div>

      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'var(--accent)', marginBottom: '12px' }}>
        → {study.outcome}
      </p>

      <a href="#" style={{ fontSize: '12px', color: 'var(--muted)', textDecoration: 'none' }}>
        Read full case study →
      </a>
    </div>
  )
}
