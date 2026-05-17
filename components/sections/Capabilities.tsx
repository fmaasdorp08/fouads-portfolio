'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const caps = [
  { icon: '⬡', title: 'AI-Assisted Workflow Design', desc: 'Intelligent process mapping using AI to surface bottlenecks and design scalable workflows.' },
  { icon: '◈', title: 'CRM Architecture', desc: 'End-to-end CRM logic, pipeline configuration, field structure, and data integrity systems.' },
  { icon: '◉', title: 'Revenue Operations', desc: 'Unified revenue frameworks connecting marketing, sales, and customer success data.' },
  { icon: '▲', title: 'Performance Acquisition', desc: 'Paid media strategy, audience architecture, creative direction, and CPL optimisation.' },
  { icon: '⟳', title: 'Lead Routing Systems', desc: 'Smart routing logic to qualify, score, assign, and accelerate lead flow through pipelines.' },
  { icon: '⚡', title: 'Automation Strategy', desc: 'End-to-end automation design using triggers, conditions, and workflow orchestration.' },
  { icon: '◎', title: 'Operational Intelligence', desc: 'Dashboards, attribution models, and reporting systems that make decisions easier.' },
  { icon: '⊞', title: 'Funnel Optimisation', desc: 'Top-to-bottom funnel analysis, conversion improvement, and drop-off reduction frameworks.' },
  { icon: '▣', title: 'Reporting & Attribution', desc: 'Multi-touch attribution, GA4, Looker Studio, and custom reporting architecture.' },
  { icon: '◆', title: 'Marketing Systems Design', desc: 'Infrastructure-level marketing planning that removes manual dependency at scale.' },
  { icon: '⊙', title: 'Conversion Optimisation', desc: 'Landing page strategy, A/B testing frameworks, and conversion-rate improvement systems.' },
  { icon: '⟡', title: 'Lifecycle Marketing', desc: 'Retention, re-engagement, and customer lifecycle automation across email and CRM.' },
]

export default function Capabilities() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id="capabilities" ref={ref} className="py-28 px-6 bg-[#0E1520]/40">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="mb-16 text-center">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-teal uppercase mb-4">Core Capabilities</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
            Systems that drive <span className="text-gradient-gold">compounding growth</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {caps.map((c, i) => (
            <motion.div key={c.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05, duration: 0.6, ease: [0.22,1,0.36,1] }}
              whileHover={{ y: -4, borderColor: 'rgba(43,179,177,0.3)' }}
              className="surface-card rounded-2xl p-5 cursor-default transition-all duration-300 group"
            >
              <div className="w-9 h-9 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal text-[15px] mb-4 group-hover:bg-teal/20 transition-colors">
                {c.icon}
              </div>
              <h3 className="text-[14px] font-semibold text-white mb-2 leading-snug">{c.title}</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
