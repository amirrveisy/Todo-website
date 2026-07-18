import { useState } from 'react'
import route from '../services/SignUp'
import util from '../util'

const SUForm = ({ stateChanger }) => {
  const [newUser, setNewUser] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const sendUserObject = async (event) => {
    event.preventDefault()

    const newUserObj = {
      username: newUser,
      password: newPassword,
    }

    try {
      await route.create(newUserObj)

      setNewUser('')
      setNewPassword('')
      stateChanger(util.VIEWS.LOGIN)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="flex min-h-screen items-center justify-center px-6 py-12">
      <div className="w-full max-w-md rounded-[2rem] border border-cyan-400/20 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm uppercase tracking-[0.35em] text-cyan-300">New pilot</p>
          <h2 className="text-3xl font-semibold text-white">Create your account</h2>
          <p className="mt-2 text-sm text-slate-400">Join the mission and organize your tasks in orbit.</p>
        </div>

        <form data-testid="signup-form" onSubmit={sendUserObject} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">Username</label>
            <input
              className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 placeholder:text-slate-500"
              data-testid="username-input"
              value={newUser}
              onChange={(event) => setNewUser(event.target.value)}
              placeholder="Choose a username"
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
              placeholder="Choose a password"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              className="w-full rounded-full bg-orange-500 px-4 py-3 font-semibold text-white transition hover:bg-orange-400"
              data-testid="signup-button"
              type="submit"
            >
              Sign Up
            </button>

            <button
              className="w-full rounded-full border border-slate-700 bg-slate-950/70 px-4 py-3 font-semibold text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-200"
              data-testid="signup-cancel-button"
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

export default SUForm