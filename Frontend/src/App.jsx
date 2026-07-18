import './App.css'
import { useEffect, useState } from 'react'
import LoginForm from './Components/LoginForm'
import TaskPanel from './Components/TaskPanel'
import taskService from './services/Task'
import MainPage from './Components/Mainpage'
import util from './util'
import SUForm from './Components/SignUpform'

function App() {
  const [view, setView] = useState(util.VIEWS.HOME)

  const viewChanger = (newView) => {
    setView(newView)
  }

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      viewChanger(util.VIEWS.TASKS)
      taskService.setToken(user.token)
    }
  }, [])

  return (
    <div className="min-h-screen bg-transparent text-slate-100">
      {view === util.VIEWS.HOME && <MainPage stateChanger={viewChanger} />}
      {view === util.VIEWS.LOGIN && <LoginForm stateChanger={viewChanger} />}
      {view === util.VIEWS.SIGNUP && <SUForm stateChanger={viewChanger} />}
      {view === util.VIEWS.TASKS && <TaskPanel stateChanger={viewChanger} />}
    </div>
  )
}

export default App