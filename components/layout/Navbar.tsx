'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Systems', href: '#systems' },
  { label: 'Case Studies', href: '#cases' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
    >
      <nav className={`max-w-6xl mx-auto rounded-2xl px-5 py-3.5 flex items-center justify-between transition-all duration-500 ${
        scrolled ? 'glass shadow-2xl shadow-black/40' : 'bg-transparent'
      }`}>
        <a href="#" className="flex flex-col leading-tight">
          <span className="text-[13px] font-semibold tracking-[0.18em] text-teal uppercase">Fouad Maasdorp</span>
          <span className="text-[10px] text-slate-500 tracking-widest uppercase">Growth Systems Architect</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="px-3.5 py-2 text-[13px] font-medium text-slate-400 hover:text-slate-100 rounded-lg hover:bg-white/5 transition-all duration-200">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold bg-teal/10 border border-teal/25 text-teal hover:bg-teal/20 transition-all duration-200">
          Engage
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors">
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            className="md:hidden mt-2 max-w-6xl mx-auto glass rounded-2xl p-4 space-y-1">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="block px-4 py-3 text-[14px] font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
