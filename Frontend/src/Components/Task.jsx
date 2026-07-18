import util from '../util'

const Task = ({ task, date, fun }) => {
  const today = new Date(util.getTodayDate())
  const taskDate = new Date(date)

  const isUrgent = util.isUrgent(today, taskDate)

  const baseClasses = 'flex flex-col gap-3 rounded-2xl border p-4 sm:flex-row sm:items-center sm:justify-between'
  const normalClasses = `${baseClasses} border-slate-800 bg-slate-900/70`
  const urgentClasses = `${baseClasses} border-orange-400/40 bg-orange-500/10`

  return (
    <li className={isUrgent ? urgentClasses : normalClasses}>
      <div className="min-w-0">
        <p className="break-words font-medium text-slate-100">{task}</p>
        <p className="mt-1 text-sm text-slate-400">{date}</p>
      </div>

      <button
        data-testid="button"
        onClick={fun}
        className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/20"
      >
        Done
      </button>
    </li>
  )
}

export default Task