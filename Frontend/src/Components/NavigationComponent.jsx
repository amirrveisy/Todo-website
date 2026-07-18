import util from '../util'

const NavigationBar = ({ stateChanger }) => {
  return (
    <nav className="border-b border-cyan-500/20 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 text-lg font-semibold text-cyan-300">
            T
          </div>
          <div>
            <p className="text-lg font-semibold tracking-[0.2em] text-slate-100">TASKLINE</p>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Alien Control</p>
          </div>
        </a>

        <div className="flex items-center gap-3">
          <button
            onClick={() => stateChanger(util.VIEWS.LOGIN)}
            className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/20"
          >
            Login
          </button>
          <button
            onClick={() => stateChanger(util.VIEWS.SIGNUP)}
            className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar