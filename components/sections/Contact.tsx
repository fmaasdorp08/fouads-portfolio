'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id="contact" ref={ref} className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal/[0.04] via-transparent to-gold/[0.04] pointer-events-none" />
      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}>
          <p className="text-[11px] font-semibold tracking-[0.18em] text-teal uppercase mb-5">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Let's Build <span className="text-gradient-teal">Smarter Growth Systems</span>
          </h2>
          <p className="text-[16px] text-slate-400 leading-relaxed mb-12 max-w-[52ch] mx-auto">
            Available for consulting, growth systems strategy, automation design, CRM optimization, and operational workflow architecture.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <a href="mailto:info@thynkverse.co.za"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-semibold text-[14px] bg-teal text-[#0B0F14] hover:bg-teal/90 transition-all duration-200 shadow-lg shadow-teal/20">
              Download Portfolio PDF
            </a>
            <a href="mailto:info@thynkverse.co.za"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-semibold text-[14px] bg-white/[0.05] border border-white/10 text-white hover:bg-white/[0.09] hover:border-white/20 transition-all duration-200">
              Book Intro Call
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { label: 'Email', value: 'info@thynkverse.co.za' },
              { label: 'Location', value: 'Cape Town, South Africa' },
              { label: 'Availability', value: 'Remote · Global' },
            ].map(item => (
              <div key={item.label} className="surface-card rounded-2xl p-4 text-center">
                <p className="text-[11px] text-slate-600 mb-1 tracking-wide uppercase">{item.label}</p>
                <p className="text-[13px] font-medium text-slate-300">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
