import { useEffect, useRef } from 'react'

function Counter({ target, suffix = '', prefix = '' }) {
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
      el.textContent = prefix + current.toLocaleString() + suffix
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [target, suffix, prefix])

  return <span ref={ref}>{prefix}0{suffix}</span>
}

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="hero-grid relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16"
    >
      <div className="max-w-3xl w-full">
        {/* Tag */}
        <div className="inline-block mb-8">
          <span className="font-mono text-xs text-[#38bdf8] border border-[#38bdf8] rounded-full px-4 py-1.5 tracking-wider">
            Product Manager · 0→1 &amp; Growth Stage
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-4xl md:text-6xl font-medium text-white leading-tight mb-6">
          I find the problem<br />
          behind the problem.
        </h1>

        {/* Subheading */}
        <p className="text-[#94a3b8] text-lg leading-relaxed max-w-[520px] mb-10">
          From zero users to scale — I've built products in the chaos of 0→1 and the
          discipline of growth. I use data to make decisions and intuition to know which
          data matters.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap gap-3 mb-10">
          {[
            { label: '0→1 Products', value: 4, suffix: '' },
            { label: 'Peak Users', value: 2, suffix: 'M+' },
            { label: 'Avg. weeks to first signal', value: 6, suffix: '' },
          ].map((stat, i) => (
            <div
              key={i}
              className="font-mono text-sm border border-[#1e293b] bg-[#0d1f35] rounded-lg px-4 py-2.5 text-[#f59e0b]"
            >
              {stat.label}:{' '}
              <Counter target={stat.value} suffix={stat.suffix} />
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => scrollTo('how-i-think')}
            className="bg-[#38bdf8] text-[#0f172a] font-medium px-6 py-3 rounded-lg hover:bg-[#7dd3fc] transition-colors duration-200"
          >
            See how I think →
          </button>
          <button
            onClick={() => scrollTo('case-studies')}
            className="border border-[#38bdf8] text-[#38bdf8] font-medium px-6 py-3 rounded-lg hover:bg-[#38bdf8]/10 transition-colors duration-200"
          >
            View case studies
          </button>
        </div>
      </div>
    </section>
  )
}
