import { useEffect, useRef, useState } from 'react'

const articles = [
  {
    title: 'Why I kill features before building them',
    hook: "The backlog is a graveyard. Here's my triage system.",
    readTime: '4 min read',
  },
  {
    title: 'The metric I stopped trusting',
    hook: "DAU lied to me for 6 months. Here's what I measure instead.",
    readTime: '3 min read',
  },
  {
    title: 'What zero-to-one really means',
    hook: "It's not about speed. It's about surviving your own assumptions.",
    readTime: '5 min read',
  },
]

export default function Writing() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="writing"
      ref={ref}
      className={`px-6 fade-in ${visible ? 'visible' : ''}`}
      style={{ paddingTop: '120px', paddingBottom: '120px' }}
    >
      <div className="max-w-5xl mx-auto">
        <p className="font-mono uppercase tracking-widest text-[#38bdf8] mb-3" style={{ fontSize: '11px' }}>Writing</p>
        <h2 className="font-medium text-white mb-3" style={{ fontSize: '36px' }}>
          How I think in public
        </h2>
        <p className="text-[#94a3b8] mb-12" style={{ fontSize: '16px' }}>
          Opinions on product, decisions, and the stuff most PMs don't talk about.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      className="bg-[#0d1f35] rounded-xl p-6 relative flex flex-col cursor-pointer"
      style={{
        border: `1px solid ${hovered ? '#38bdf8' : '#1e293b'}`,
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'border-color 200ms ease, transform 200ms ease',
      }}
    >
      {/* External link icon */}
      <div className="absolute top-4 right-4 text-[#94a3b8]">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 11L11 3M11 3H6M11 3V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <h3 className="text-white font-medium text-base mb-2 pr-6 leading-snug">{article.title}</h3>
      <p className="text-[#94a3b8] text-sm leading-relaxed flex-1 mb-4">{article.hook}</p>

      <div className="flex items-center gap-2 font-mono text-xs text-[#94a3b8]">
        <span className="text-[#f59e0b]">●</span>
        {article.readTime}
      </div>
    </div>
  )
}
