import { useEffect, useRef } from 'react'

function Counter({ target, suffix = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const numericTarget = parseInt(target.toString().replace(/\D/g, ''), 10)
    const duration = 1800
    const start = performance.now()

    const tick = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * numericTarget)
      el.textContent = current.toLocaleString() + suffix
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [target, suffix])

  return <span ref={ref}>0{suffix}</span>
}

const codeLines = [
  { text: '// how I work', color: 'var(--muted)' },
  { text: '' },
  { text: 'input = messy_problem', color: 'var(--accent)' },
  { text: 'signal = extract(data,', color: 'var(--accent)' },
  { text: '         users, constraints)', color: 'var(--accent)' },
  { text: '' },
  { parts: [
    { text: 'if (signal.confidence > ', color: 'var(--blue)' },
    { text: '0.7', color: 'var(--accent)' },
    { text: ') {', color: 'var(--blue)' },
  ]},
  { text: '  ship(v1)', color: 'var(--green)' },
  { text: '} else {', color: 'var(--blue)' },
  { text: '  refine(signal)', color: 'var(--accent)' },
  { text: '}', color: 'var(--blue)' },
  { text: '' },
  { text: '// outcomes', color: 'var(--muted)' },
  { text: '// decisions made faster', color: 'var(--green)' },
  { text: '// ambiguity reduced', color: 'var(--green)' },
  { text: '// systems that scale', color: 'var(--green)' },
]

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      style={{
        minHeight: '86vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 48px',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 380px',
          gap: '72px',
          alignItems: 'center',
          maxWidth: '1080px',
          margin: '0 auto',
          width: '100%',
        }}
        className="hero-grid-layout"
      >
        {/* Left */}
        <div>
          {/* Tag */}
          <div
            style={{
              fontSize: '12px',
              color: 'var(--muted)',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              padding: '4px 11px',
              display: 'inline-block',
              marginBottom: '24px',
            }}
          >
            Product &amp; Data Operator · 0→1 and Scale
          </div>

          {/* H1 */}
          <h1
            style={{
              fontSize: '42px',
              fontWeight: 600,
              lineHeight: 1.14,
              letterSpacing: '-.025em',
              color: 'var(--text)',
              maxWidth: '500px',
              marginBottom: '20px',
            }}
          >
            I build systems that turn ambiguity into decisions.
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontSize: '15px',
              color: 'var(--text2)',
              fontWeight: 300,
              lineHeight: 1.7,
              maxWidth: '440px',
              marginBottom: '28px',
            }}
          >
            I work on messy problems — unclear data, unclear users, unclear direction.
            Then I structure them into something that can actually ship. Most of my work
            sits between product, data, and operations.
          </p>

          {/* Metrics row */}
          <div
            style={{
              display: 'flex',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              overflow: 'hidden',
              width: 'fit-content',
              marginBottom: '28px',
            }}
          >
            {[
              { value: '0→1', label: 'Systems shipped' },
              { value: '40hr→min', label: 'Manual → automated' },
              { value: '$100K+', label: 'Early ARR impact' },
            ].map((m, i) => (
              <div
                key={i}
                style={{
                  padding: '10px 18px',
                  borderRight: i < 2 ? '1px solid var(--border)' : 'none',
                }}
              >
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', color: 'var(--accent)' }}>
                  {m.value}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => scrollTo('how-i-think')}
              style={{
                background: 'var(--text)',
                color: '#0f0f0f',
                fontWeight: 600,
                padding: '9px 20px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '13px',
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              See how I think →
            </button>
            <button
              onClick={() => scrollTo('case-studies')}
              style={{
                background: 'transparent',
                color: 'var(--text2)',
                border: '1px solid var(--border2)',
                padding: '9px 20px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '13px',
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Systems I've built
            </button>
          </div>
        </div>

        {/* Right: Code card */}
        <div
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '10px',
            overflow: 'hidden',
          }}
          className="code-card"
        >
          {/* Header */}
          <div
            style={{
              background: 'var(--surface2)',
              borderBottom: '1px solid var(--border)',
              padding: '10px 16px',
              fontSize: '11px',
              color: 'var(--muted)',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            how-i-work.js
          </div>

          {/* Body */}
          <div
            style={{
              padding: '20px 22px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px',
              lineHeight: 1.85,
            }}
          >
            {codeLines.map((line, i) => (
              <div key={i}>
                {!line.text && !line.parts ? (
                  <span>&nbsp;</span>
                ) : line.parts ? (
                  <span>
                    {line.parts.map((part, j) => (
                      <span key={j} style={{ color: part.color }}>{part.text}</span>
                    ))}
                  </span>
                ) : (
                  <span style={{ color: line.color }}>{line.text}</span>
                )}
              </div>
            ))}
            <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ color: 'var(--accent)' }}>›</span>
              <span className="cursor-blink" style={{ display: 'inline-block', width: '7px', height: '14px', background: 'var(--accent)', marginLeft: '2px' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
