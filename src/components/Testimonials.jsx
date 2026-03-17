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
  return (
    <section
      style={{ padding: '80px 48px', borderBottom: '1px solid var(--border)' }}
    >
      <div style={{ maxWidth: '1080px', margin: '0 auto', width: '100%' }}>
        <p style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '12px', fontWeight: 400 }}>
          What people say
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginTop: '24px' }} className="testimonials-grid">
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
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '24px',
      }}
    >
      <span
        style={{
          fontSize: '22px',
          color: 'var(--muted)',
          fontFamily: 'Georgia, serif',
          lineHeight: 1,
          marginBottom: '12px',
          display: 'block',
          opacity: 0.8,
        }}
      >
        &ldquo;
      </span>

      <p style={{ fontSize: '13px', color: 'var(--text2)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '18px', fontWeight: 300 }}>
        {t.quote}
      </p>

      <div>
        <p style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text)' }}>— {t.name}</p>
        <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '2px', fontWeight: 300 }}>{t.role}</p>
      </div>
    </div>
  )
}
