import { useState } from 'react'

const articles = [
  {
    title: 'Why I define the anti-goal before the roadmap',
    hook: 'Most scope creep starts at the top, not the backlog.',
    readTime: '4 min',
  },
  {
    title: 'The metric I stopped trusting (and what replaced it)',
    hook: 'DAU hid a broken retention loop for 6 months.',
    readTime: '3 min',
  },
  {
    title: "Ambiguity isn't a blocker — illegibility is",
    hook: "The problem is never that we don't know enough. It's that we can't read what we know.",
    readTime: '5 min',
  },
]

export default function Writing() {
  return (
    <section
      id="writing"
      style={{ padding: '80px 48px', borderBottom: '1px solid var(--border)' }}
    >
      <div style={{ maxWidth: '1080px', margin: '0 auto', width: '100%' }}>
        <p style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '12px', fontWeight: 400 }}>
          Writing
        </p>
        <h2 style={{ fontSize: '28px', fontWeight: 600, color: 'var(--text)', letterSpacing: '-.02em', marginBottom: '6px' }}>
          How I think in public
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--text2)', marginBottom: '36px', fontWeight: 300 }}>
          Opinions on product, decisions, and the stuff most PMs don't talk about.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }} className="writing-grid">
          {articles.map((article, i) => (
            <ArticleCard key={i} article={article} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ArticleCard({ article }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--surface)',
        border: `1px solid ${hovered ? 'var(--border2)' : 'var(--border)'}`,
        borderRadius: '8px',
        padding: '20px',
        cursor: 'pointer',
        transition: 'border-color 200ms ease',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h3 style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text)', lineHeight: 1.45, marginBottom: '8px' }}>
        {article.title}
      </h3>
      <p style={{ fontSize: '13px', color: 'var(--text2)', lineHeight: 1.55, marginBottom: '16px', fontWeight: 300, flex: 1 }}>
        {article.hook}
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--muted)' }}>
        <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
        {article.readTime}
      </div>
    </div>
  )
}
