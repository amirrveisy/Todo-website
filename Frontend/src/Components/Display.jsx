import Task from './Task'

const Display = ({ tasks, remover }) => {
  if (tasks.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/50 p-6 text-center text-slate-400">
        Nothing to do yet. Your orbit is clear.
      </div>
    )
  }

  return (
    <ul className="space-y-3">
      {tasks.map((taskIn) => (
        <Task key={taskIn.id} task={taskIn.task} date={taskIn.date} fun={() => remover(taskIn.id)} />
      ))}
    </ul>
  )
}

export default Display
