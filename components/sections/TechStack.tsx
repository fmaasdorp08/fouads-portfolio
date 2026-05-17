'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const tools = [
  'HubSpot','Google Analytics 4','Google Ads','Meta Ads Manager',
  'Zapier','Looker Studio','SharePoint','CRM Systems',
  'Automation Workflows','Webhook Integrations','Operational Reporting','Canva',
]

export default function TechStack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section className="py-20 px-6 border-y border-white/[0.05] bg-[#0E1520]/50">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="mb-12 text-center" ref={ref}>
          <p className="text-[11px] font-semibold tracking-[0.18em] text-teal uppercase mb-3">Technology & Platforms</p>
          <h2 className="font-display text-3xl font-bold text-white">Built on enterprise-grade tooling</h2>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-3">
          {tools.map((t, i) => (
            <motion.div key={t}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.04, borderColor: 'rgba(43,179,177,0.4)' }}
              className="px-4 py-2.5 rounded-xl border border-white/[0.07] bg-white/[0.03] text-[13px] font-medium text-slate-400 hover:text-white transition-all duration-200 cursor-default"
            >
              {t}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
