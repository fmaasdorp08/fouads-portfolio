'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const cases = [
  {
    client: 'Travelopia',
    headline: 'Full-Funnel Acquisition Recovery',
    metric: '43%',
    metricLabel: 'Reduction in CPL',
    color: '#2BB3B1',
    tags: ['Meta Ads','CAPI','First-Party Data','Lead Qualification','CPL Optimisation'],
    desc: 'Full restructure of paid media campaigns, implementation of Meta Conversions API, and first-party data strategy to recover attribution visibility and drive cost-per-lead down.',
    category: 'Performance Marketing',
  },
  {
    client: 'Tarsus Technology',
    headline: 'CRM & Dialler Workflow Integration',
    metric: '35%',
    metricLabel: 'Productivity Increase',
    color: '#C8A96A',
    tags: ['Lead Routing','CRM Integration','Workflow Orchestration','Dialler','Reporting'],
    desc: 'End-to-end integration of CRM, dialler, and lead routing systems to eliminate manual handoffs and give leadership real-time operational reporting.',
    category: 'Revenue Operations',
  },
  {
    client: 'Evergreen Wealth Solutions/Debtwyze',
    headline: 'Operational Workflow Optimization',
    metric: 'Ops',
    metricLabel: 'Workflow Architecture',
    color: '#2BB3B1',
    tags: ['Lead Management','Operational Redesign','CRM Logic','WhatsApp Integration','Routing'],
    desc: 'Full redesign of lead management architecture, communication routing, and CRM workflow logic, including WhatsApp integration strategy for faster response times.',
    category: 'Operations',
  },
  {
    client: 'Lobster Tavern',
    headline: 'Premium Digital Positioning',
    metric: '67%',
    metricLabel: 'Reservations + Orders',
    color: '#C8A96A',
    tags: ['Local SEO','Reservation Systems','Brand Repositioning','Customer Acquisition'],
    desc: 'Digital repositioning from a generic listing presence to a premium brand experience that drove a significant increase in direct reservations and online orders.',
    category: 'Growth Strategy',
  },
]

export default function CaseStudies() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id="cases" ref={ref} className="py-28 px-6 bg-[#0E1520]/30">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="mb-16">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-teal uppercase mb-4">Case Studies</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight max-w-[18ch]">
              Commercial results, <span className="text-gradient-teal">proven in context</span>
            </h2>
            <p className="text-[15px] text-slate-500 max-w-[42ch]">Selected projects demonstrating performance across acquisition, operations, and growth strategy.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {cases.map((c, i) => (
            <motion.div key={c.client}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22,1,0.36,1] }}
              whileHover={{ y: -6, scale: 1.015 }}
              className="surface-card rounded-3xl p-7 group transition-all duration-500 hover:border-teal/20 hover:shadow-2xl hover:shadow-teal/5 cursor-default"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.16em] uppercase mb-2 block" style={{ color: c.color }}>{c.category}</span>
                  <h3 className="text-[20px] font-bold text-white leading-tight">{c.headline}</h3>
                  <p className="text-[13px] text-slate-500 mt-1">{c.client}</p>
                </div>
                <div className="text-left sm:text-right shrink-0 max-w-full">
                  <p className="text-2xl sm:text-3xl font-bold break-words" style={{ color: c.color }}>{c.metric}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5 max-w-[220px] sm:max-w-none">{c.metricLabel}</p>
                </div>
              </div>
              <p className="text-[14px] text-slate-400 leading-relaxed mb-6">{c.desc}</p>
              <div className="flex flex-wrap gap-2 pt-5 border-t border-white/[0.06]">
                {c.tags.map(t => (
                  <span key={t} className="px-2.5 py-1 rounded-md text-[11px] font-medium text-slate-500 bg-white/[0.04] border border-white/[0.06]">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
