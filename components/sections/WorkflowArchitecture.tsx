'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type Node = { label: string; color: string; sub?: string }

const acqNodes: Node[] = [
  { label: 'Google / Meta Ads', color: '#2BB3B1', sub: 'Paid acquisition' },
  { label: 'Landing Page', color: '#2BB3B1', sub: 'Conversion layer' },
  { label: 'CRM Capture', color: '#C8A96A', sub: 'Data ingestion' },
  { label: 'Lead Scoring', color: '#C8A96A', sub: 'Qualification logic' },
  { label: 'Auto Qualification', color: '#2BB3B1', sub: 'Rules engine' },
  { label: 'Sales Routing', color: '#2BB3B1', sub: 'Assignment logic' },
  { label: 'Dialler / Queue', color: '#C8A96A', sub: 'Sales handoff' },
  { label: 'Reporting Dashboard', color: '#C8A96A', sub: 'Performance data' },
  { label: 'Optimization Loop', color: '#2BB3B1', sub: 'Continuous improvement' },
]

const aiNodes: Node[] = [
  { label: 'Customer Inquiry', color: '#2BB3B1', sub: 'Entry point' },
  { label: 'AI Categorization', color: '#C8A96A', sub: 'Intent mapping' },
  { label: 'Priority Assignment', color: '#C8A96A', sub: 'Urgency scoring' },
  { label: 'CRM Trigger', color: '#2BB3B1', sub: 'System action' },
  { label: 'Sales / Support Routing', color: '#2BB3B1', sub: 'Team assignment' },
  { label: 'Auto Notifications', color: '#C8A96A', sub: 'Stakeholder alerts' },
  { label: 'Performance Tracking', color: '#C8A96A', sub: 'Metrics capture' },
  { label: 'Operational Reporting', color: '#2BB3B1', sub: 'Executive visibility' },
]

function FlowDiagram({ nodes, title }: { nodes: Node[]; title: string }) {
  return (
    <div className="surface-card rounded-3xl p-7 h-full">
      <div className="flex items-center gap-2.5 mb-7">
        <motion.span className="w-2 h-2 rounded-full bg-teal"
          animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.8, repeat: Infinity }} />
        <span className="text-[11px] font-semibold tracking-[0.14em] text-teal uppercase">{title}</span>
      </div>
      <div className="space-y-1">
        {nodes.map((n, i) => (
          <motion.div key={n.label}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <div className="flex items-center gap-3 py-2.5 px-3.5 rounded-xl hover:bg-white/[0.03] transition-colors group cursor-default">
              <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: `${n.color}15`, border: `1px solid ${n.color}30` }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: n.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-medium text-slate-200 group-hover:text-white transition-colors">{n.label}</p>
                {n.sub && <p className="text-[11px] text-slate-600">{n.sub}</p>}
              </div>
              <div className="w-6 h-px opacity-40" style={{ background: n.color }} />
            </div>
            {i < nodes.length - 1 && (
              <div className="flex items-center ml-[22px] pl-[11px]">
                <motion.div className="w-px bg-gradient-to-b from-slate-700/60 to-transparent"
                  style={{ height: '14px' }}
                  animate={{ opacity: [0.4, 0.9, 0.4] }}
                  transition={{ delay: i * 0.1, duration: 2, repeat: Infinity }}
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function WorkflowArchitecture() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id="workflow" ref={ref} className="py-28 px-6 grid-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14] via-transparent to-[#0B0F14] pointer-events-none" />
      <div className="relative max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="mb-16 text-center">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-teal uppercase mb-4">Workflow Architecture</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
            Operational systems built for <span className="text-gradient-teal">precision at scale</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FlowDiagram nodes={acqNodes} title="Lead Acquisition Engine" />
          <FlowDiagram nodes={aiNodes}  title="AI-Assisted Operations Workflow" />
        </div>
      </div>
    </section>
  )
}
