import util from '../util'

const Task = ({ task, date, fun }) => {
  const today = new Date(util.getTodayDate())
  const taskDate = new Date(date)

  const isUrgent = util.isUrgent(today, taskDate)

  // 🔵 NOT URGENT
  if (!isUrgent) {
    return (
      <li className="list-group-item rounded-3 mb-2 shadow-sm">
        <div className="row align-items-center">

          <div className="col-6 text-break">
            <span className="fw-medium">{task}</span>
          </div>

          <div className="col-3 text-center text-muted">
            {date}
          </div>

          <div className="col-3 text-end">
            <button
              data-testid="button"
              onClick={fun}
              className="btn btn-sm btn-outline-success px-3"
            >
              Done
            </button>
          </div>

        </div>
      </li>
    )
  }

  // 🔴 URGENT
  return (
    <li className="list-group-item rounded-3 mb-2 shadow-sm border-start border-4 border-warning bg-warning-subtle">
      <div className="row align-items-center">

        <div className="col-6 text-break">
          <span className="fw-medium">{task}</span>
        </div>

        <div className="col-3 text-center text-muted">
          {date}
        </div>

        <div className="col-3 text-end">
          <button
            data-testid="button"
            onClick={fun}
            className="btn btn-sm btn-outline-success px-3"
          >
            Done
          </button>
        </div>

      </div>
    </li>
  )
}

export default Task