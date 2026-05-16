import './App.css'
import { useEffect, useState } from 'react'
import LoginForm from './Components/LoginForm'
import TaskPanel from './Components/TaskPanel'
import taskService from './services/Task'
import MainPage from '../src/Components/Mainpage'
import Footer from './Components/Footer'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import util from './util'

import NavigationBar from './Components/NavigationComponent'
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

    <div>


      {view === util.VIEWS.HOME && <MainPage stateChanger={viewChanger} />}
      {view === util.VIEWS.LOGIN && <LoginForm stateChanger={viewChanger} />}
      {view === util.VIEWS.SIGNUP && <SUForm stateChanger={viewChanger} />}
      {view === util.VIEWS.TASKS && <TaskPanel  stateChanger={viewChanger}  />}

      

    </div>


  )



}

export default App