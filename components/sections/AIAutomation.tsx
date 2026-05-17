'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const pillars = [
  { title: 'Acquisition', body: 'Structured paid media systems, audience architecture, and creative frameworks that reduce CPL while increasing lead quality.' },
  { title: 'Operations', body: 'Workflow design, CRM logic, and process automation that eliminate bottlenecks and create consistent execution.' },
  { title: 'Intelligence', body: 'Attribution models, dashboards, and operational reporting systems that give leadership real visibility into performance.' },
  { title: 'Scalability', body: 'Systems designed to scale without breaking — modular, documented, and built for teams to run independently.' },
]

export default function AIAutomation() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id="systems" ref={ref} className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-teal/[0.04] blur-[120px] rounded-full pointer-events-none" />
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div initial={{ opacity: 0, x: -32 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}>
          <p className="text-[11px] font-semibold tracking-[0.18em] text-teal uppercase mb-5">AI & Automation</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-7">
            AI-Assisted <span className="text-gradient-teal">Operational Scaling</span>
          </h2>
          <p className="text-[16px] text-slate-400 leading-relaxed mb-5">
            Modern businesses do not fail because of weak marketing alone. They fail because acquisition, operations, sales, reporting, and customer workflows become fragmented as scale increases.
          </p>
          <p className="text-[16px] text-slate-400 leading-relaxed">
            The focus is building connected systems that improve operational visibility, lead velocity, automation efficiency, and revenue performance through AI-assisted operational thinking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pillars.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.6 }}
              className="surface-card rounded-2xl p-5 hover:border-teal/20 transition-all duration-300 group"
            >
              <div className="w-8 h-8 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center mb-4">
                <div className="w-2 h-2 rounded-full bg-teal group-hover:scale-125 transition-transform" />
              </div>
              <h3 className="text-[14px] font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
