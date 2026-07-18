const HeroSection = () => {
  return (
    <section className="relative overflow-hidden px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
            Alien task intelligence online
          </div>

          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Command your day from a cosmic control panel.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
            Organize every mission, track every deadline, and keep your schedule aligned with a sleek, futuristic workspace built for focus.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-400">
              Start orbiting
            </button>
            <button className="rounded-full border border-slate-700 bg-slate-900/60 px-6 py-3 font-semibold text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-200">
              Browse features
            </button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ['24/7', 'signal sync'],
              ['Zero', 'clutter'],
              ['Fast', 'focus']
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur">
                <p className="text-2xl font-semibold text-cyan-300">{value}</p>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-cyan-400/15 blur-3xl" />
          <div className="relative rounded-[2rem] border border-cyan-400/20 bg-slate-900/70 p-16 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
            <div className="h-full w-full rounded-[1.4rem] bg-slate-950/80" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection