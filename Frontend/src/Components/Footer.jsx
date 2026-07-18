import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="border-t border-cyan-500/20 bg-slate-950/70 px-6 py-8 backdrop-blur-xl lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-[0.2em] text-slate-100">TASKLINE</p>
          <p className="text-sm text-slate-400">© 2026 All rights reserved</p>
        </div>

        <div className="flex items-center gap-4 text-slate-400">
          <a href="https://github.com/amirrveisy" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/amirrveisy/" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer