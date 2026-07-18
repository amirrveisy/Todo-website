import useTasks from './useTasks'
import Display from './Display'
import util from '../util'

const TaskPanel = ({ stateChanger }) => {
  const { tasks, input, changeInput, addTask, remTask, dateInput, changeDateInput } = useTasks()

  const logOut = () => {
    window.localStorage.removeItem('loggedNoteappUser')
    stateChanger(util.VIEWS.HOME)
  }

  return (
    <section className="min-h-screen px-6 py-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-6xl rounded-4xl border border-cyan-400/20 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl lg:p-8">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.35em] text-cyan-300">Mission board</p>
            <h1 className="text-3xl font-semibold text-white">My tasks</h1>
            <p className="mt-2 text-slate-400">Manage your day from a polished control station.</p>
          </div>

          <button
            className="rounded-full border border-orange-400/40 bg-orange-500/10 px-5 py-2 font-semibold text-orange-300 transition hover:bg-orange-500/20"
            onClick={logOut}
          >
            Logout
          </button>
        </div>

        <form onSubmit={addTask} className="mb-8 rounded-3xl border border-slate-800 bg-slate-950/60 p-4 sm:p-6">
          <div className="grid gap-4 lg:grid-cols-[1.4fr_0.8fr_auto]">
            <input
              data-testid="input"
              className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-slate-100 placeholder:text-slate-500"
              value={input}
              onChange={changeInput}
              placeholder="Add a new task..."
            />

            <input
              className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-slate-100"
              data-testid="date input"
              value={dateInput}
              onChange={changeDateInput}
              type="date"
            />

            <button className="rounded-2xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400" data-testid="add button" type="submit">
              Add task
            </button>
          </div>
        </form>

        <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-4 sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Task list</h2>
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
              {tasks.length} active
            </span>
          </div>

          <Display tasks={tasks} remover={remTask} />
        </div>
      </div>
    </section>
  )
}

export default TaskPanel