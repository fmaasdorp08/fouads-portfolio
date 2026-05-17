'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const pillars = ['Acquisition Systems','CRM Architecture','Revenue Operations','Automation Strategy','Operational Intelligence']

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id="about" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}
        >
          <p className="text-[11px] font-semibold tracking-[0.18em] text-teal uppercase mb-5">About</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.06] text-white mb-7">
            Commercial Systems Thinking Meets{' '}
            <span className="text-gradient-teal">AI-Assisted Growth</span>
          </h2>
          <p className="text-[16px] text-slate-400 leading-relaxed mb-5">
            Fouad Maasdorp is a Growth Systems Architect specializing in acquisition systems, CRM workflows, automation strategy, and operational intelligence across travel, insurance, hospitality, consulting, and technology sectors.
          </p>
          <p className="text-[16px] text-slate-400 leading-relaxed mb-10">
            Rather than treating marketing, sales, and operations as disconnected functions, his approach focuses on building connected growth ecosystems where acquisition, qualification, routing, reporting, and optimization operate as a unified system.
          </p>
          <div className="flex flex-wrap gap-2">
            {pillars.map(p => (
              <span key={p} className="px-3.5 py-1.5 rounded-lg border border-teal/20 bg-teal/[0.06] text-[12px] font-medium text-teal/90">
                {p}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22,1,0.36,1] }}
          className="relative"
        >
          <div className="surface-card rounded-3xl p-8 glow-teal">
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { n: 'Acquisition', c: '#2BB3B1' },
                { n: 'CRM Logic', c: '#C8A96A' },
                { n: 'Automation', c: '#2BB3B1' },
                { n: 'Reporting', c: '#C8A96A' },
              ].map((item, i) => (
                <motion.div key={item.n}
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ delay: i * 0.4, duration: 2.4, repeat: Infinity }}
                  className="rounded-xl p-4 text-center"
                  style={{ background: `${item.c}0d`, border: `1px solid ${item.c}25` }}
                >
                  <p className="text-[13px] font-semibold" style={{ color: item.c }}>{item.n}</p>
                </motion.div>
              ))}
            </div>
            {/* Central connector visual */}
            <div className="flex items-center justify-center py-4">
              <div className="relative flex items-center justify-center w-20 h-20">
                <motion.div className="absolute inset-0 rounded-full border border-teal/20"
                  animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 2.4, repeat: Infinity }}
                />
                <motion.div className="absolute inset-3 rounded-full border border-gold/20"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2.4, delay: 0.4, repeat: Infinity }}
                />
                <div className="w-8 h-8 rounded-full bg-teal/10 border border-teal/40 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-teal pulse-glow" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                { n: 'Qualification', c: '#C8A96A' },
                { n: 'Optimization', c: '#2BB3B1' },
                { n: 'Routing', c: '#C8A96A' },
                { n: 'Intelligence', c: '#2BB3B1' },
              ].map((item, i) => (
                <motion.div key={item.n}
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ delay: i * 0.4 + 0.2, duration: 2.4, repeat: Infinity }}
                  className="rounded-xl p-4 text-center"
                  style={{ background: `${item.c}0d`, border: `1px solid ${item.c}25` }}
                >
                  <p className="text-[13px] font-semibold" style={{ color: item.c }}>{item.n}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
