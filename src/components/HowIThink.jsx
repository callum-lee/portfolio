const cards = [
  {
    num: '01',
    title: 'Anti-goal first',
    desc: "Before scoping anything, I define what this system should NOT do. It's the fastest way to kill scope creep before it starts.",
  },
  {
    num: '02',
    title: 'Signal before speed',
    desc: "I don't ship until the signal is strong enough to act on. Velocity without signal is just expensive noise.",
  },
  {
    num: '03',
    title: 'Structure the ambiguity, then decide',
    desc: "Most blockers aren't resource problems — they're legibility problems. I make the situation readable before I make a call.",
  },
  {
    num: '04',
    title: 'Operator metrics over vanity metrics',
    desc: "DAU and pageviews tell you what happened. Time-to-decision, error rate, manual hours saved — those tell you if the system is actually working.",
  },
]

export default function HowIThink() {
  return (
    <section
      id="how-i-think"
      style={{ padding: '80px 48px', borderBottom: '1px solid var(--border)' }}
    >
      <div style={{ maxWidth: '1080px', margin: '0 auto', width: '100%' }}>
        <p style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '12px', fontWeight: 400 }}>
          Mental Models
        </p>
        <h2 style={{ fontSize: '28px', fontWeight: 600, color: 'var(--text)', letterSpacing: '-.02em', marginBottom: '6px' }}>
          How I approach problems
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--text2)', marginBottom: '36px', fontWeight: 300 }}>
          Frameworks I actually use — not just talk about.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }} className="cards-grid">
          {cards.map((card, i) => (
            <Card key={i} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Card({ card }) {
  return (
    <div
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '22px',
      }}
    >
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--muted)', marginBottom: '12px' }}>
        {card.num}
      </div>
      <h3 style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text)', marginBottom: '7px' }}>
        {card.title}
      </h3>
      <p style={{ fontSize: '13px', color: 'var(--text2)', lineHeight: 1.65, fontWeight: 300 }}>
        {card.desc}
      </p>
    </div>
  )
}
