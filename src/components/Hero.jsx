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
  { text: 'const signal = await findFirst();', indent: 0, delay: 0 },
  { text: 'if (signal.confidence > 0.8) {', indent: 0, delay: 0.3 },
  { text: "  ship({ version: 'v1', scope: 'mvp' });", indent: 1, delay: 0.6 },
  { text: '} else {', indent: 0, delay: 0.9 },
  { text: '  iterate(feedback);', indent: 1, delay: 1.2 },
  { text: '}', indent: 0, delay: 1.5 },
  { text: '', indent: 0, delay: 1.6 },
  { text: '// retention: +18% in 6 weeks', indent: 0, delay: 1.8, comment: true },
  { text: '// drop-off: -23% at checkout', indent: 0, delay: 2.1, comment: true },
  { text: '// integrations: 0 → 40', indent: 0, delay: 2.4, comment: true },
]

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="hero-grid relative min-h-screen flex items-start justify-center px-6 pt-28 pb-16"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left: content */}
        <div>
          {/* Tag */}
          <div className="inline-block mb-6">
            <span className="font-mono text-xs text-[#38bdf8] border border-[#38bdf8] rounded-full px-4 py-1.5 tracking-wider">
              Product Manager · 0→1 &amp; Growth Stage
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-medium text-white leading-tight mb-6"
            style={{ fontSize: '52px', lineHeight: '1.1' }}
          >
            I find the problem<br />
            behind the problem.
          </h1>

          {/* Stats row — before subheading */}
          <div className="flex flex-wrap gap-3 mb-6">
            {[
              { label: '0→1 Products', value: 4, suffix: '' },
              { label: 'Peak Users', value: 2, suffix: 'M+' },
              { label: 'Avg. weeks to first signal', value: 6, suffix: '' },
            ].map((stat, i) => (
              <div
                key={i}
                className="font-mono text-sm border border-[#1e293b] bg-[#0d1f35] rounded-lg px-4 py-2.5 text-[#f59e0b]"
              >
                {stat.label}: <Counter target={stat.value} suffix={stat.suffix} />
              </div>
            ))}
          </div>

          {/* Subheading */}
          <p className="text-[#94a3b8] text-base leading-relaxed max-w-[520px] mb-10">
            From zero users to scale — I've built products in the chaos of 0→1 and the
            discipline of growth. I use data to make decisions and intuition to know which
            data matters.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo('how-i-think')}
              className="bg-[#38bdf8] text-[#0f172a] font-medium px-6 py-3 rounded-lg hover:bg-[#7dd3fc] active:scale-[0.97] transition-all duration-200"
            >
              See how I think →
            </button>
            <button
              onClick={() => scrollTo('case-studies')}
              className="border border-[#38bdf8] text-[#38bdf8] font-medium px-6 py-3 rounded-lg hover:bg-[#38bdf8]/10 active:scale-[0.97] transition-all duration-200"
            >
              View case studies
            </button>
          </div>
        </div>

        {/* Right: animated code visual */}
        <div className="hidden lg:flex items-start justify-end pt-4">
          <div
            className="w-full max-w-sm rounded-xl p-6 font-mono text-sm relative overflow-hidden"
            style={{
              background: '#0d1f35',
              border: '1px solid #1e293b',
            }}
          >
            {/* Terminal header dots */}
            <div className="flex gap-2 mb-5">
              <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
              <span className="w-3 h-3 rounded-full" style={{ background: '#ffbd2e' }} />
              <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
            </div>

            {/* Code lines */}
            <div className="flex flex-col gap-2">
              {codeLines.map((line, i) => (
                <div
                  key={i}
                  className="code-line"
                  style={{ animationDelay: `${line.delay}s` }}
                >
                  {line.text === '' ? (
                    <span>&nbsp;</span>
                  ) : (
                    <span
                      style={{
                        color: line.comment ? '#94a3b8' : line.indent ? '#e2e8f0' : '#38bdf8',
                        paddingLeft: line.indent ? '1rem' : 0,
                        opacity: line.comment ? 0.7 : 1,
                      }}
                    >
                      {line.text}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Blinking cursor */}
            <div className="mt-3 flex items-center gap-1">
              <span className="text-[#38bdf8]">›</span>
              <span className="cursor-blink inline-block w-2 h-4 bg-[#38bdf8] ml-1" />
            </div>

            {/* Subtle glow overlay */}
            <div
              className="absolute inset-0 pointer-events-none rounded-xl"
              style={{
                background: 'radial-gradient(ellipse at 80% 20%, rgba(56,189,248,0.06) 0%, transparent 60%)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
