import { useEffect, useRef, useState } from 'react'

const tooltipMap = {
  'Roadmapping': 'Used in: API Platform',
  'OKRs': 'Used in: API Platform',
  'PRDs': 'Used in: API Platform',
  'GTM': '',
  'Prioritisation': '',
  'North Star Metrics': '',
  'User interviews': 'Used in: Mobile Onboarding',
  'Jobs-to-be-done': 'Used in: Mobile Onboarding',
  'A/B Testing': 'Used in: Checkout Redesign',
  'Usability testing': '',
  'SQL': 'Used in: Checkout Redesign',
  'Mixpanel': 'Used in: Checkout Redesign',
  'Amplitude': 'Used in: Checkout Redesign',
  'Looker': '',
  'Funnel analysis': 'Used in: Checkout Redesign',
  'Figma': 'Used in: Mobile Onboarding',
  'Jira': '',
  'Notion': '',
  'Linear': '',
  'Miro': 'Used in: Mobile Onboarding',
  'Confluence': '',
}

const rows = [
  { category: 'Strategy', skills: ['Roadmapping', 'OKRs', 'GTM', 'PRDs', 'Prioritisation', 'North Star Metrics'] },
  { category: 'Research', skills: ['User interviews', 'Jobs-to-be-done', 'A/B Testing', 'Usability testing'] },
  { category: 'Data', skills: ['SQL', 'Mixpanel', 'Amplitude', 'Looker', 'Funnel analysis'] },
  { category: 'Tools', skills: ['Figma', 'Jira', 'Notion', 'Linear', 'Miro', 'Confluence'] },
]

export default function Skills() {
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
      id="skills"
      ref={ref}
      className={`py-24 px-6 fade-in ${visible ? 'visible' : ''}`}
    >
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs text-[#38bdf8] uppercase tracking-widest mb-8">Skills</p>

        <div className="flex flex-col gap-6">
          {rows.map((row, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-4">
              <span className="font-mono text-sm text-[#94a3b8] w-20 flex-shrink-0 pt-1">
                {row.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {row.skills.map((skill, j) => (
                  <Pill key={j} skill={skill} tooltip={tooltipMap[skill]} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pill({ skill, tooltip }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="relative">
      <span
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="font-mono text-xs text-[#94a3b8] bg-[#0d1f35] border border-[#38bdf8] rounded-full px-3 py-1.5 cursor-default inline-block"
      >
        {skill}
      </span>
      {hovered && tooltip && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-[#1e293b] text-[#e2e8f0] text-xs font-mono px-2.5 py-1.5 rounded whitespace-nowrap z-10 pointer-events-none">
          {tooltip}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#1e293b]" />
        </div>
      )}
    </div>
  )
}
