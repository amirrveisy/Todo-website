import { useState } from 'react'
import loginRoute from '../services/Login'
import taskService from '../services/Task'
import util from '../util'

const LoginForm = ({ stateChanger }) => {
  
  const [newUser, setNewUser] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const handleLogin = () => {
    stateChanger(util.VIEWS.TASKS)
  }

  const sendUserObject = async (event) => {

    event.preventDefault()

    const newUserObj = {
      username: newUser,
      password: newPassword,
    }

    try {
      
      const response = await loginRoute.create(newUserObj)

      taskService.setToken(response.token)

      window.localStorage.setItem('loggedNoteappUser', JSON.stringify(response))

      handleLogin()
      setNewUser('')
      setNewPassword('')
    } catch (error) {
      console.log(error)
      setNewUser('')
      setNewPassword('')
    }
  }

  return (
    <section className="flex min-h-screen items-center justify-center px-6 py-12">
      <div className="w-full max-w-md rounded-[2rem] border border-cyan-400/20 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm uppercase tracking-[0.35em] text-cyan-300">Access terminal</p>
          <h2 className="text-3xl font-semibold text-white">Welcome back</h2>
          <p className="mt-2 text-sm text-slate-400">Login to manage your tasks from the command deck.</p>
        </div>

        <form data-testid="login-form" onSubmit={sendUserObject} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">Username</label>
            <input
              className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 placeholder:text-slate-500"
              data-testid="username-input"
              value={newUser}
              onChange={(event) => setNewUser(event.target.value)}
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">Password</label>
            <input
              className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 placeholder:text-slate-500"
              type="password"
              data-testid="password-input"
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              className="w-full rounded-full bg-orange-500 px-4 py-3 font-semibold text-white transition hover:bg-orange-400"
              data-testid="logform-login-button"
              type="submit"
            >
              Login
            </button>

            <button
              className="w-full rounded-full border border-slate-700 bg-slate-950/70 px-4 py-3 font-semibold text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-200"
              data-testid="logform-cancel-button"
              type="button"
              onClick={() => stateChanger(util.VIEWS.HOME)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default LoginForm