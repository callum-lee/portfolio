import { useEffect, useRef, useState } from 'react'

export default function Contact() {
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
      id="contact"
      ref={ref}
      className={`py-24 px-6 fade-in ${visible ? 'visible' : ''}`}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-white mb-3">Let's talk</h2>
        <p className="text-[#94a3b8] mb-12">
          Open to senior PM roles, advisory work, and interesting problems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm text-[#94a3b8] mb-1.5 font-mono">Name</label>
              <input
                type="text"
                className="w-full bg-[#0d1f35] border border-[#1e293b] rounded-lg px-4 py-3 text-[#e2e8f0] text-sm focus:outline-none focus:border-[#38bdf8] transition-colors duration-200"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-[#94a3b8] mb-1.5 font-mono">Email</label>
              <input
                type="email"
                className="w-full bg-[#0d1f35] border border-[#1e293b] rounded-lg px-4 py-3 text-[#e2e8f0] text-sm focus:outline-none focus:border-[#38bdf8] transition-colors duration-200"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm text-[#94a3b8] mb-1.5 font-mono">Message</label>
              <textarea
                rows={5}
                className="w-full bg-[#0d1f35] border border-[#1e293b] rounded-lg px-4 py-3 text-[#e2e8f0] text-sm focus:outline-none focus:border-[#38bdf8] transition-colors duration-200 resize-none"
                placeholder="What's on your mind?"
              />
            </div>
            <button
              type="submit"
              className="bg-[#38bdf8] text-[#0f172a] font-medium px-6 py-3 rounded-lg hover:bg-[#7dd3fc] transition-colors duration-200 text-sm"
            >
              Send message →
            </button>
          </form>

          {/* Links */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <a
                href="https://linkedin.com/in/callum-lee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#94a3b8] hover:text-[#e2e8f0] transition-colors duration-200 group"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[#38bdf8]">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="font-mono text-sm">callum-lee</span>
              </a>

              <a
                href="https://github.com/callum-lee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#94a3b8] hover:text-[#e2e8f0] transition-colors duration-200"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[#38bdf8]">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="font-mono text-sm">callum-lee</span>
              </a>

              <a
                href="mailto:callum@email.com"
                className="flex items-center gap-3 text-[#94a3b8] hover:text-[#e2e8f0] transition-colors duration-200"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#38bdf8]">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span className="font-mono text-sm">callum@email.com</span>
              </a>
            </div>

            <a
              href="/resume.pdf"
              className="inline-flex items-center border border-[#38bdf8] text-[#38bdf8] font-medium px-5 py-2.5 rounded-lg hover:bg-[#38bdf8]/10 transition-colors duration-200 text-sm w-fit"
            >
              Download resume →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
