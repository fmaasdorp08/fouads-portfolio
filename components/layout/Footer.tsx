export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-[13px] font-semibold tracking-[0.15em] text-teal uppercase">Fouad Maasdorp</p>
          <p className="text-[11px] text-slate-600 mt-0.5">Growth Systems Architect · Cape Town, South Africa</p>
        </div>
        <p className="text-[12px] text-slate-600">© {new Date().getFullYear()} · Built for performance.</p>
      </div>
    </footer>
  )
}
