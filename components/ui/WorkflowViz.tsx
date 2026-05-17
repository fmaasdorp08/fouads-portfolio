'use client'
import { motion } from 'framer-motion'

const nodes = [
  { label: 'Google / Meta Ads', color: '#2BB3B1' },
  { label: 'CRM Capture', color: '#2BB3B1' },
  { label: 'Lead Scoring', color: '#C8A96A' },
  { label: 'Automation', color: '#C8A96A' },
  { label: 'Sales Routing', color: '#2BB3B1' },
  { label: 'Reporting', color: '#2BB3B1' },
  { label: 'Optimization', color: '#C8A96A' },
]

export default function WorkflowViz() {
  return (
    <div className="relative w-[340px] h-[520px]">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-3xl bg-teal/5 blur-2xl" />
      <div className="relative w-full h-full surface-card rounded-3xl p-6 flex flex-col justify-between overflow-hidden">
        {/* Top label */}
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-teal pulse-glow" />
          <span className="text-[11px] tracking-widest text-teal/80 uppercase font-semibold">Lead Acquisition Engine</span>
        </div>

        {/* Nodes */}
        <div className="flex-1 flex flex-col justify-around py-2">
          {nodes.map((n, i) => (
            <motion.div key={n.label}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.12, duration: 0.5, ease: [0.22,1,0.36,1] }}
              className="flex items-center gap-3 group"
            >
              {/* Line connector */}
              {i > 0 && (
  <div
    className="absolute left-3 top-[-28px] h-[28px] w-px opacity-60"
    style={{ background: `linear-gradient(to bottom, ${n.color}55, ${n.color})` }}
  />
)}
              <div className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
                style={{ background: `${n.color}18`, border: `1px solid ${n.color}40` }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: n.color }} />
              </div>
              <span className="text-[13px] font-medium text-slate-300 group-hover:text-white transition-colors">{n.label}</span>
              <div className="ml-auto w-8 h-px" style={{ background: `linear-gradient(90deg, ${n.color}40, transparent)` }} />
            </motion.div>
          ))}
        </div>

        {/* Bottom status bar */}
        <div className="border-t border-white/[0.06] pt-4 flex items-center justify-between">
          <span className="text-[11px] text-slate-600">System active</span>
          <div className="flex gap-1.5">
            {[0, 1, 2].map(i => (
              <motion.div key={i} className="w-1.5 h-1.5 rounded-full bg-teal"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ delay: i * 0.2, duration: 1.2, repeat: Infinity }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
