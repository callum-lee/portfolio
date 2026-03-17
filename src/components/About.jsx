const tools = ['SQL', 'Mixpanel', 'Figma', 'Notion', 'Linear', 'Amplitude', 'Python (basics)', 'Miro']

const facts = [
  { text: 'Currently: [Role] at [Company]' },
  { text: 'Previously: [Company A] · [Company B]' },
  { text: 'Based in Sydney, Australia' },
  { text: 'Building: Hirelyte (side project)' },
]

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: '80px 48px', borderBottom: '1px solid var(--border)' }}
    >
      <div style={{ maxWidth: '1080px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '72px 1fr', gap: '36px' }} className="about-grid">
          {/* Avatar */}
          <div>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--surface2)',
                border: '1.5px solid var(--border2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                fontWeight: 500,
                color: 'var(--text2)',
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              CL
            </div>
          </div>

          {/* Text */}
          <div>
            <p style={{ fontSize: '18px', fontWeight: 500, color: 'var(--text)', lineHeight: 1.45, marginBottom: '16px', letterSpacing: '-.01em' }}>
              I've started from zero and scaled to millions.<br />
              The hardest part is always the same: figuring out what not to build.
            </p>

            <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300, marginBottom: '12px' }}>
              I'm a product and data operator — I work on the problems that sit between
              product, data, and ops. The ones that are too ambiguous for a clean roadmap
              and too important to get wrong.
            </p>

            <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300, marginBottom: '24px' }}>
              I care about systems over features, signal over speed, and decisions over
              activity. Based in Sydney, Australia.
            </p>

            {/* Facts */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '18px' }}>
              {facts.map((fact, i) => (
                <p key={i} style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300 }}>
                  <span style={{ color: 'var(--muted)', fontSize: '11px', marginRight: '8px' }}>▸</span>
                  {fact.text}
                </p>
              ))}
            </div>

            {/* Tools */}
            <p style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.04em', marginTop: '18px', marginBottom: '8px' }}>
              Reaches for
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {tools.map((tool, i) => (
                <span
                  key={i}
                  style={{
                    background: 'var(--surface2)',
                    border: '1px solid var(--border)',
                    color: 'var(--text2)',
                    fontSize: '12px',
                    borderRadius: '4px',
                    padding: '3px 10px',
                    fontWeight: 300,
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
