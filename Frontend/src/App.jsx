import './App.css'
import { useEffect, useState } from 'react'
import AuthPanel from './Components/AuthPanel'
import TaskPanel from './Components/TaskPanel'
import taskService from '../services/Task'

function App() {
  const [authorized, setauthorized] = useState(false)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setauthorized(true)
      taskService.setToken(user.token)
    }
  }, [])

  return (
    <div>
      {!authorized && <AuthPanel authochanger={setauthorized} />}
      {authorized && <TaskPanel setAutho={setauthorized} />}
    </div>
  )
}

export default App