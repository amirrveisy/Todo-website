import './App.css'
import { useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import LoginForm from './Components/LoginForm'
import TaskPanel from './Components/TaskPanel'
import taskService from './services/Task'
import MainPage from './Components/Mainpage'
import util from './util'
import SUForm from './Components/SignUpform'

function App() {
  const navigate = useNavigate()

  const viewChanger = (newView) => {
    switch (newView) {
      case util.VIEWS.LOGIN:
        navigate('/login')
        break
      case util.VIEWS.SIGNUP:
        navigate('/signup')
        break
      case util.VIEWS.TASKS:
        navigate('/tasks')
        break
      default:
        navigate('/')
    }
  }

  useEffect(() => {

    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      viewChanger(util.VIEWS.TASKS)
      taskService.setToken(user.token)
    }
    
  }, [navigate])

  return (
    <div className="min-h-screen bg-transparent text-slate-100">

      <Routes>
        <Route path="/" element={<MainPage stateChanger={viewChanger} />} />
        <Route path="/login" element={<LoginForm stateChanger={viewChanger} />} />
        <Route path="/signup" element={<SUForm stateChanger={viewChanger} />} />
        <Route path="/tasks" element={<TaskPanel stateChanger={viewChanger} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

    </div>
  )
}

export default App