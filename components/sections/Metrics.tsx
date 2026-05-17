'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const metrics = [
  { value: 'R2.4M+', label: 'Annual Managed Ad Spend', color: 'teal' },
  { value: '43%',    label: 'Reduction in Cost Per Lead', color: 'gold' },
  { value: '12,000+',label: 'Qualified Leads Generated', color: 'teal' },
  { value: '35%',    label: 'Operational Efficiency Gains', color: 'gold' },
  { value: '92%',    label: 'Attribution Visibility', color: 'teal' },
  { value: '4hr',    label: 'Lead Response Framework', color: 'gold' },
]

export default function Metrics() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section ref={ref} className="py-20 px-6 border-y border-white/[0.05] bg-[#0E1520]/60">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {metrics.map((m, i) => (
            <motion.div key={m.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22,1,0.36,1] }}
              className="surface-card p-5 rounded-2xl text-center group hover:border-teal/20 transition-all duration-300"
            >
              <p className={`text-2xl font-bold mb-1.5 ${m.color === 'teal' ? 'text-teal' : 'text-gold'}`}>{m.value}</p>
              <p className="text-[11px] text-slate-500 leading-snug">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
