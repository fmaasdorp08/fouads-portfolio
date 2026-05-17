'use client'
import { motion } from 'framer-motion'
import WorkflowViz from '@/components/ui/WorkflowViz'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 px-6 grid-bg overflow-hidden">
      {/* Ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-teal/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-teal/20 bg-teal/[0.07] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            <span className="text-[12px] font-semibold tracking-[0.12em] text-teal uppercase">Growth Systems Architect</span>
          </motion.div>

          <motion.h1 {...fadeUp(0.2)} className="font-display font-800 text-4xl md:text-5xl xl:text-6xl leading-[1.04] tracking-tight text-white mb-6">
            Building AI-Powered{' '}
            <span className="text-gradient-teal">Growth Systems</span>{' '}
            That Scale Businesses Efficiently
          </motion.h1>

          <motion.p {...fadeUp(0.35)} className="text-[16px] md:text-[17px] text-slate-400 leading-relaxed max-w-[52ch] mb-10">
            AI-assisted acquisition systems, workflow automation, CRM architecture, and operational intelligence designed to improve lead velocity, conversion efficiency, and operational scalability.
          </motion.p>

          <motion.div {...fadeUp(0.45)} className="flex flex-wrap gap-4">
            <a href="#cases"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-[14px] bg-teal text-[#0B0F14] hover:bg-teal/90 transition-all duration-200 shadow-lg shadow-teal/20">
              View Case Studies
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a
  href="/Fouad_Maasdorp_Premium_Portfolio_of_Evidence.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-[14px] bg-teal text-[#0B0F14] hover:bg-teal/90 transition-all duration-200 shadow-lg shadow-teal/20 hover:-translate-y-0.5"
>
  Download Portfolio
</a>
          </motion.div>

          <motion.div {...fadeUp(0.55)} className="flex items-center gap-6 mt-10 pt-10 border-t border-white/[0.06]">
            {[['10+', 'Years experience'],['R2.4M+', 'Ad spend managed'],['12,000+', 'Leads generated']].map(([n, l]) => (
              <div key={n}>
                <p className="text-xl font-800 text-white font-bold">{n}</p>
                <p className="text-[11px] text-slate-500 mt-0.5">{l}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
  className="hidden lg:flex justify-center"
>
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
  >
    <WorkflowViz />
  </motion.div>
</motion.div>
      </div>
    </section>
  )
}
