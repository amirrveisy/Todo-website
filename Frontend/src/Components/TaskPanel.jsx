import useTasks from "./useTasks"
import Display from './Display'
import util from "../util"

const TaskPanel = ({ stateChanger }) => {
  const { tasks, input, changeInput, addTask, remTask, dateInput, changeDateInput } = useTasks()

  const logOut = () => {
    window.localStorage.removeItem('loggedNoteappUser')
    stateChanger(util.VIEWS.HOME)
  }

  return (
    <section className="min-vh-100 bg-light py-5">
      <div className="container">
        <div className="card shadow-lg border-0 rounded-4">
          <div className="card-body p-4 p-md-5">

            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h1 className="fw-bold mb-1">My Tasks</h1>
                <p className="text-muted mb-0">
                  Manage your daily tasks in one place
                </p>
              </div>

              <button
                className="btn btn-outline-danger rounded-3 px-4"
                onClick={logOut}
              >
                Logout
              </button>
            </div>

            <form onSubmit={addTask} className="mb-4">
              <div className="input-group input-group-lg">

                <input
                  data-testid="input"
                  className="form-control"
                  value={input}
                  onChange={changeInput}
                  placeholder="Add a new task..."
                />

              </div>

              <div className="input-group input-group-lg">
                <input
                  className="form-control"
                  data-testid="date input"
                  value={dateInput}
                  onChange={changeDateInput}
                  type="date"
                />
              </div>

              <button className="btn btn-danger px-4" data-testid="add button"  type="submit">
                Add
              </button>

            </form>

            <div className="bg-white border rounded-4 p-3">
              <h5 className="fw-semibold mb-3">Task List</h5>

              <Display tasks={tasks} remover={remTask} />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default TaskPanel