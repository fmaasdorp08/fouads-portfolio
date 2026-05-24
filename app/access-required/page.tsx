export default function AccessRequiredPage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 mb-6">
          Private Portfolio Access
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Access Restricted
        </h1>

        <p className="text-slate-400 text-lg leading-relaxed">
          This portfolio environment is privately distributed.
          If you were expecting access, please request a private invitation link directly from Fouad Maasdorp.
        </p>
      </div>
    </main>
  )
}
