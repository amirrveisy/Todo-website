import useTasks from "./useTasks"
import Display from './Display'


const TaskPanel=({setAutho})=>{

const { tasks, input, changeInput, addTask, remTask } = useTasks()

const logOut =()=>{

  window.localStorage.removeItem('loggedNoteappUser')
  setAutho(false)

}


return (
    <div>
        <div>
          <h1>Tasks</h1>
          <Display tasks={tasks} remover={remTask} />
        </div>
        <div>
          <h1>Add a task :</h1>
          <form onSubmit={addTask}>
            <input value={input} onChange={changeInput} />
          </form>
        </div>

        <div>

          <button onClick={()=> logOut()} > logout </button>
        </div>
    </div>    
)
   
}
export default TaskPanel