import { useState } from 'react'

const experiments = [
  {
    status: 'active',
    name: 'Hirelyte',
    problem: 'Recruiting feedback loops are slow and lose signal between rounds.',
    approach: 'Building a lightweight tool to structure interviewer notes into structured signal before debrief.',
    learning: 'The bottleneck isn\'t data — it\'s the format data arrives in.',
  },
  {
    status: 'shipped',
    name: 'Proposal automation',
    problem: 'Manual proposal creation was taking 3-4 hours per deal with inconsistent output.',
    approach: 'Built a template system + data layer that generates first-draft proposals from CRM data automatically.',
    learning: 'Automating the draft cut time to 20min. The real win was consistency, not speed.',
  },
  {
    status: 'learning',
    name: 'AI decision logger',
    problem: 'Product decisions get made verbally and then lost. No audit trail, no learning loop.',
    approach: 'Testing a lightweight Notion + AI workflow that captures decision context at the moment it happens.',
    learning: 'Still testing. Early signal: teams use it when the friction is near zero.',
  },
]

const statusStyles = {
  active:   { bg: 'var(--green-dim)',  color: 'var(--green)',  border: 'var(--green-border)' },
  shipped:  { bg: 'var(--blue-dim)',   color: 'var(--blue)',   border: 'var(--blue-border)' },
  learning: { bg: 'var(--accent-dim)', color: 'var(--accent)', border: 'var(--accent-border)' },
  paused:   { bg: 'var(--surface2)',   color: 'var(--muted)',  border: 'var(--border)' },
}

export default function Experiments() {
  return (
    <section
      id="experiments"
      style={{ padding: '80px 48px', borderBottom: '1px solid var(--border)' }}
    >
      <div style={{ maxWidth: '1080px', margin: '0 auto', width: '100%' }}>
        <p style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '12px', fontWeight: 400 }}>
          Experiments
        </p>
        <h2 style={{ fontSize: '28px', fontWeight: 600, color: 'var(--text)', letterSpacing: '-.02em', marginBottom: '6px' }}>
          Things I've built and tried
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--text2)', marginBottom: '36px', fontWeight: 300 }}>
          Not polished case studies. Faster, rawer — problem → approach → what I learned.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }} className="experiments-grid">
          {experiments.map((exp, i) => (
            <ExperimentCard key={i} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperimentCard({ exp }) {
  const [hovered, setHovered] = useState(false)
  const sc = statusStyles[exp.status]

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--surface)',
        border: `1px solid ${hovered ? 'var(--border2)' : 'var(--border)'}`,
        borderRadius: '8px',
        padding: '20px',
        transition: 'border-color 200ms ease, transform 200ms ease',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      {/* Header: name + badge */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text)' }}>
          {exp.name}
        </h3>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '10px',
            padding: '2px 8px',
            borderRadius: '99px',
            background: sc.bg,
            color: sc.color,
            border: `1px solid ${sc.border}`,
            flexShrink: 0,
            marginLeft: '10px',
          }}
        >
          {exp.status}
        </span>
      </div>

      <p style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.55, marginBottom: '6px' }}>
        <span style={{ color: 'var(--text2)', fontWeight: 400 }}>Problem: </span>
        {exp.problem}
      </p>

      <p style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.55, marginBottom: '0' }}>
        <span style={{ color: 'var(--text2)', fontWeight: 400 }}>Approach: </span>
        {exp.approach}
      </p>

      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '12px', marginTop: '12px' }}>
        <p style={{ fontSize: '12px', color: 'var(--text2)', lineHeight: 1.55 }}>
          <span style={{ color: 'var(--accent)' }}>↳</span> {exp.learning}
        </p>
      </div>
    </div>
  )
}
