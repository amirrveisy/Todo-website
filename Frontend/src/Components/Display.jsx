import Task from './Task'

const Display = ({ tasks, remover }) => {
  if (tasks.length === 0) return <p>Nothing to do! chill</p>

  return (
    <ul>
      {
        tasks.map(taskIn => <Task task={taskIn.task} fun={() => remover(taskIn.id)} />)
      }
    </ul>
  )
}
export default Display
