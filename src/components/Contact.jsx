export default function Contact() {
  return (
    <section
      id="contact"
      style={{ padding: '80px 48px', borderBottom: '1px solid var(--border)' }}
    >
      <div style={{ maxWidth: '1080px', margin: '0 auto', width: '100%' }}>
        <p style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '12px', fontWeight: 400 }}>
          Contact
        </p>
        <h2 style={{ fontSize: '28px', fontWeight: 600, color: 'var(--text)', letterSpacing: '-.02em', marginBottom: '6px' }}>
          Let's talk
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--text2)', marginBottom: '36px', fontWeight: 300 }}>
          Open to senior PM and operator roles, advisory work, and genuinely messy problems.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }} className="contact-grid">
          {/* Form */}
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', letterSpacing: '.04em', textTransform: 'uppercase', marginBottom: '6px' }}>
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                style={{
                  width: '100%',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  padding: '10px 14px',
                  color: 'var(--text2)',
                  fontSize: '13px',
                  fontWeight: 300,
                  fontFamily: "'DM Sans', sans-serif",
                  outline: 'none',
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--border2)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', letterSpacing: '.04em', textTransform: 'uppercase', marginBottom: '6px' }}>
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  width: '100%',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  padding: '10px 14px',
                  color: 'var(--text2)',
                  fontSize: '13px',
                  fontWeight: 300,
                  fontFamily: "'DM Sans', sans-serif",
                  outline: 'none',
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--border2)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', letterSpacing: '.04em', textTransform: 'uppercase', marginBottom: '6px' }}>
                Message
              </label>
              <textarea
                rows={5}
                placeholder="What's on your mind?"
                style={{
                  width: '100%',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  padding: '10px 14px',
                  color: 'var(--text2)',
                  fontSize: '13px',
                  fontWeight: 300,
                  fontFamily: "'DM Sans', sans-serif",
                  outline: 'none',
                  resize: 'none',
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--border2)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
              />
            </div>
            <button
              type="submit"
              style={{
                background: 'var(--text)',
                color: '#0f0f0f',
                fontWeight: 600,
                fontSize: '13px',
                padding: '10px 24px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                width: '100%',
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Send message →
            </button>
          </form>

          {/* Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <SocialLink
              href="https://linkedin.com/in/callum-lee"
              icon="in"
              label="callum-lee"
              sublabel="LinkedIn"
            />
            <SocialLink
              href="https://github.com/callum-lee"
              icon="gh"
              label="callum-lee"
              sublabel="GitHub"
            />
            <SocialLink
              href="mailto:callum@email.com"
              icon="@"
              label="callum@email.com"
              sublabel="Email"
            />

            <a
              href="/resume.pdf"
              style={{
                display: 'block',
                textAlign: 'center',
                background: 'transparent',
                border: '1px solid var(--border)',
                color: 'var(--text2)',
                padding: '10px 24px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 300,
                textDecoration: 'none',
                marginTop: '22px',
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Download resume →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        textDecoration: 'none',
      }}
    >
      <div
        style={{
          width: '34px',
          height: '34px',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '11px',
          color: 'var(--muted)',
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <span style={{ fontSize: '13px', color: 'var(--text2)', fontWeight: 300 }}>{label}</span>
    </a>
  )
}
