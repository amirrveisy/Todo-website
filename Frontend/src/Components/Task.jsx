const Task = ({ task, fun }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center rounded-3 mb-2 shadow-sm">
      
      <span className="fw-medium">
        {task}
      </span>

      <button
        data-testid="button"
        onClick={fun}
        className="btn btn-sm btn-success px-3"
      >
        Done
      </button>

    </li>
  )
}

export default Task