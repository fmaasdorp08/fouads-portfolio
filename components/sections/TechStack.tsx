'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const tools = [
  'HubSpot',
  'Google Analytics 4',
  'Google Ads',
  'Meta Ads Manager',
  'Zapier',
  'Looker Studio',
  'SharePoint',
  'CRM Systems',
  'Automation Workflows',
  'Webhook Integrations',
  'Operational Reporting',
  'Canva',
]

const repeatedTools = [...tools, ...tools]

export default function TechStack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 border-y border-white/[0.05] bg-[#0E1520]/40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <p className="text-[11px] font-semibold tracking-[0.18em] text-teal uppercase mb-3">
            Technology & Platforms
          </p>

          <h2 className="font-display text-3xl font-bold text-white">
            Built on enterprise-grade tooling
          </h2>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#0B0F14] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#0B0F14] to-transparent" />

        <div className="marquee-track flex w-max gap-3 px-3">
          {repeatedTools.map((tool, index) => (
            <motion.div
              key={`${tool}-${index}`}
              whileHover={{
                scale: 1.06,
                y: -2,
                borderColor: 'rgba(43,179,177,0.45)',
              }}
              className="shrink-0 px-5 py-3 rounded-xl border border-white/[0.07] bg-white/[0.035] text-[13px] font-medium text-slate-400 hover:text-white transition-all duration-200 cursor-default backdrop-blur-sm"
            >
              {tool}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}